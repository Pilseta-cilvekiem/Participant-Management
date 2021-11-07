export async function showError(error) {
    const message = getErrorMessage(error);
    await Xrm.Navigation.openAlertDialog({ text: message });
}
function getErrorMessage(error) {
    try {
        const errorMessage = JSON.parse(error.message);
        return errorMessage.error.message;
    }
    catch (_a) {
    }
    return error;
}
export function formatGuid(guid) {
    const formattedGuid = guid.replace("{", "").replace("}", "");
    return formattedGuid;
}
export function sleep(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export async function performActionFromForm(form, action, messageKey) {
    try {
        const id = form.data.entity.getId();
        try {
            const message = await getLocalizedText(messageKey);
            Xrm.Utility.showProgressIndicator(message);
            await action(id);
        }
        finally {
            Xrm.Utility.closeProgressIndicator();
        }
        await form.data.refresh();
    }
    catch (error) {
        await showError(error);
    }
}
export async function performActionFromGrid(grid, selectedIds, action, message) {
    try {
        try {
            for (let i = 0; i < selectedIds.length; ++i) {
                const id = selectedIds[i];
                Xrm.Utility.showProgressIndicator(await message(i + 1));
                await action(id);
            }
        }
        finally {
            Xrm.Utility.closeProgressIndicator();
        }
        grid.refresh();
    }
    catch (error) {
        await showError(error);
    }
}
export async function getLocalizedText(key, ...args) {
    var _a;
    const context = Xrm.Utility.getGlobalContext();
    const resxWebResourceName = `pc_/Resource.${context.userSettings.languageId}.resx`;
    const resxWebResource = await XrmQuery.retrieveMultiple(x => x.webresourceset)
        .filter(wr => Filter.equals(wr.name, resxWebResourceName))
        .select(wr => [wr.contentjson])
        .promiseFirst();
    const resource = JSON.parse(resxWebResource.contentjson);
    const formatString = (_a = resource[key]) !== null && _a !== void 0 ? _a : key;
    const formattedString = format(formatString, args);
    return formattedString;
}
function format(format, args) {
    const formattedString = format.replace(/{(\d+)}/g, (_, position) => args[position]);
    return formattedString;
}
//# sourceMappingURL=common.js.map