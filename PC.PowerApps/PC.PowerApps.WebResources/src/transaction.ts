import { formatGuid, performActionFromForm, performActionFromGrid } from "./lib/common";

export async function processFromForm(form: Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>) {
    await performActionFromForm(form, process, "Processing the transaction...");
}

export async function processFromGrid(grid: Xrm.SubGridControl<any>, selectedIds: string[]) {
    await performActionFromGrid(grid, selectedIds, process, i => `Processing ${i} of ${selectedIds.length} transactions...`);
}

async function process(id: string) {
    await XrmQuery.promiseRequest("POST", `pc_transactions(${formatGuid(id)})/Microsoft.Dynamics.CRM.pc_ProcessTransaction`, null);
}

export async function markAsNonPaymentFromForm(form: Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>) {
    await performActionFromForm(form, markAsNonPayment, "Marking the transaction as non-payment...");
}

export async function markAsNonPaymentFromGrid(grid: Xrm.SubGridControl<any>, selectedIds: string[]) {
    await performActionFromGrid(grid, selectedIds, markAsNonPayment, i => `Marking ${i} of ${selectedIds.length} transactions as non-payment...`);
}

async function markAsNonPayment(id: string) {
    await XrmQuery.promiseRequest("POST", `pc_transactions(${formatGuid(id)})/Microsoft.Dynamics.CRM.pc_MarkTransactionAsNonPayment`, null);
}
