export async function showError(error: any) {
    const message = getErrorMessage(error);
    await Xrm.Navigation.openAlertDialog({ text: message });
}

function getErrorMessage(error: any) {
    try {
        const errorMessage = JSON.parse(error.message);
        return errorMessage.error.message;
    } catch {
    }

    return error;
}

export function formatGuid(guid: string) {
    const formattedGuid = guid.replace("{", "").replace("}", "");
    return formattedGuid;
}

export function sleep(timeout: number) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export async function performActionFromForm(form: Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>, action: (recordId: string) => Promise<void>, messageKey: string) {
    try {
        const id = form.data.entity.getId();

        try {
            const message = await getLocalizedText(messageKey);
            Xrm.Utility.showProgressIndicator(message);
            await action(id);
        } finally {
            Xrm.Utility.closeProgressIndicator();
        }

        await form.data.refresh();
    } catch (error) {
        await showError(error);
    }
}

export async function performActionFromGrid(grid: Xrm.SubGridControl<any>, selectedIds: string[], action: (recordId: string) => Promise<void>, message: (sequenceNumber: number) => Promise<string>) {
    try {
        try {
            for (let i = 0; i < selectedIds.length; ++i) {
                const id = selectedIds[i];
                Xrm.Utility.showProgressIndicator(await message(i + 1));
                await action(id);
            }
        } finally {
            Xrm.Utility.closeProgressIndicator();
        }

        grid.refresh();
    } catch (error) {
        await showError(error);
    }
}

export async function getLocalizedText(key: string, ...args: any[]) {
    const context = Xrm.Utility.getGlobalContext();
    const resxWebResourceName = `pc_/Resource.${context.userSettings.languageId}.resx`;
    const resxWebResource = await XrmQuery.retrieveMultiple(x => x.webresourceset)
        .filter(wr => Filter.equals(wr.name, resxWebResourceName))
        .select(wr => [wr.contentjson])
        .promiseFirst();
    const resource = JSON.parse(resxWebResource.contentjson);
    const formatString = resource[key];
    const formattedString = format(formatString, args);
    return formattedString;
}

function format(format: string, args: string[]) {
    const formattedString = format.replace(/{(\d+)}/g, (_, position) => args[position]);
    return formattedString;
}
