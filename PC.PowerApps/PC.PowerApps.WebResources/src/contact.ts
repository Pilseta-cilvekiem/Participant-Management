import { formatGuid, getLocalizedText, performActionFromForm, performActionFromGrid } from "./lib/common";

export async function sendDebtReminderFromForm(form: Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>) {
    const confirmStrings = {
        text: await getLocalizedText("ShouldSendDebtReminderToContact"),
    };
    const confirmDialogResult = await Xrm.Navigation.openConfirmDialog(confirmStrings);
    if (!confirmDialogResult.confirmed) {
        return;
    }

    await performActionFromForm(form, sendDebtReminder, "SendingDebtReminderToContact");
}

export async function sendDebtReminderFromGrid(grid: Xrm.SubGridControl<any>, selectedIds: string[]) {
    const confirmStrings = {
        text: await getLocalizedText("ShouldSendDebtReminderToContacts", selectedIds.length),
    };
    const confirmDialogResult = await Xrm.Navigation.openConfirmDialog(confirmStrings);
    if (!confirmDialogResult.confirmed) {
        return;
    }

    await performActionFromGrid(grid, selectedIds, sendDebtReminder, async i => await getLocalizedText("SendingDebtRemindersToContacts", i, selectedIds.length));
}

async function sendDebtReminder(id: string) {
    await XrmQuery.promiseRequest("POST", `contacts(${formatGuid(id)})/Microsoft.Dynamics.CRM.pc_SendDebtReminderToContact`, null);
}
