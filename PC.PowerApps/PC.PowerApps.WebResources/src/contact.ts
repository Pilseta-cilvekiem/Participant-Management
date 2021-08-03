import { formatGuid, performActionFromForm, performActionFromGrid } from "./lib/common";

export async function sendDebtReminderFromForm(form: Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>) {
    await performActionFromForm(form, sendDebtReminder, "Sending a debt reminder to the contact...");
}

export async function sendDebtReminderFromGrid(grid: Xrm.SubGridControl<any>, selectedIds: string[]) {
    await performActionFromGrid(grid, selectedIds, sendDebtReminder, i => `Sending a debt reminder to ${i} of ${selectedIds.length} contacts...`);
}

async function sendDebtReminder(id: string) {
    await XrmQuery.promiseRequest("POST", `contacts(${formatGuid(id)})/Microsoft.Dynamics.CRM.pc_SendDebtReminderToContact`, null);
}
