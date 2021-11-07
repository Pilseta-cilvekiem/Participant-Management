import { formatGuid, getLocalizedText, performActionFromForm, performActionFromGrid } from "./lib/common";
export async function sendDebtReminderFromForm(form) {
    await performActionFromForm(form, sendDebtReminder, "SendingDebtReminderToContact");
}
export async function sendDebtReminderFromGrid(grid, selectedIds) {
    await performActionFromGrid(grid, selectedIds, sendDebtReminder, async (i) => await getLocalizedText("SendingDebtRemindersToContacts", i, selectedIds.length));
}
async function sendDebtReminder(id) {
    await XrmQuery.promiseRequest("POST", `contacts(${formatGuid(id)})/Microsoft.Dynamics.CRM.pc_SendDebtReminderToContact`, null);
}
//# sourceMappingURL=contact.js.map