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
