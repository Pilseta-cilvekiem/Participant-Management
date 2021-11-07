import { formatGuid, getLocalizedText, performActionFromForm, performActionFromGrid } from "./lib/common";
export async function processFromForm(form) {
    await performActionFromForm(form, process, "ProcessingTransaction");
}
export async function processFromGrid(grid, selectedIds) {
    await performActionFromGrid(grid, selectedIds, process, async (i) => await getLocalizedText("ProcessingTransactions", i, selectedIds.length));
}
async function process(id) {
    await XrmQuery.promiseRequest("POST", `pc_transactions(${formatGuid(id)})/Microsoft.Dynamics.CRM.pc_ProcessTransaction`, null);
}
export async function markAsNonPaymentFromForm(form) {
    await performActionFromForm(form, markAsNonPayment, "MarkingTransactionAsNonPayment");
}
export async function markAsNonPaymentFromGrid(grid, selectedIds) {
    await performActionFromGrid(grid, selectedIds, markAsNonPayment, async (i) => await getLocalizedText("MarkingTransactionsAsNonPayment", i, selectedIds.length));
}
async function markAsNonPayment(id) {
    await XrmQuery.promiseRequest("POST", `pc_transactions(${formatGuid(id)})/Microsoft.Dynamics.CRM.pc_MarkTransactionAsNonPayment`, null);
}
//# sourceMappingURL=transaction.js.map