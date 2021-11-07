import { formatGuid, getLocalizedText, performActionFromForm, performActionFromGrid } from "./lib/common";

export async function sendDebtReminderFromForm(form: Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>) {
    await performActionFromForm(form, sendDebtReminder, "SendingDebtReminderToContact");
}

export async function sendDebtReminderFromGrid(grid: Xrm.SubGridControl<any>, selectedIds: string[]) {
    await performActionFromGrid(grid, selectedIds, sendDebtReminder, async i => await getLocalizedText("SendingDebtRemindersToContacts", i, selectedIds.length));
}

async function sendDebtReminder(id: string) {
    await XrmQuery.promiseRequest("POST", `contacts(${formatGuid(id)})/Microsoft.Dynamics.CRM.pc_SendDebtReminderToContact`, null);
}
