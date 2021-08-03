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

export async function performActionFromForm(form: Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>, action: (recordId: string) => Promise<void>, message: string) {
    try {
        const id = form.data.entity.getId();

        try {
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

export async function performActionFromGrid(grid: Xrm.SubGridControl<any>, selectedIds: string[], action: (recordId: string) => Promise<void>, message: (sequenceNumber: number) => string) {
    try {
        try {
            for (let i = 0; i < selectedIds.length; ++i) {
                const id = selectedIds[i];
                Xrm.Utility.showProgressIndicator(message(i + 1));
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
