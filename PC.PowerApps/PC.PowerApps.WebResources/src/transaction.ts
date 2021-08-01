import { formatGuid, showError } from "./lib/common";

export async function processFromForm(form: Form.pc_transaction.Main.Information) {
    try {
        const id = form.data.entity.getId();

        try {
            Xrm.Utility.showProgressIndicator("Processing the transaction...");
            await process(id);
        } finally {
            Xrm.Utility.closeProgressIndicator();
        }

        await form.data.refresh();
    } catch (error) {
        await showError(error);
    }
}

export async function processFromGrid(grid: Xrm.SubGridControl<any>, selectedIds: string[]) {
    try {
        try {
            for (let i = 0; i < selectedIds.length; ++i) {
                const id = selectedIds[i];
                Xrm.Utility.showProgressIndicator(`Processing ${i + 1} of ${selectedIds.length} transactions...`);
                await process(id);
            }
        } finally {
            Xrm.Utility.closeProgressIndicator();
        }

        grid.refresh();
    } catch (error) {
        await showError(error);
    }
}

async function process(id: string) {
    await XrmQuery.promiseRequest("POST", `pc_transactions(${formatGuid(id)})/Microsoft.Dynamics.CRM.pc_ProcessTransaction`, null);
}

export async function markAsNonPaymentFromForm(form: Form.pc_transaction.Main.Information) {
    try {
        const id = form.data.entity.getId();

        try {
            Xrm.Utility.showProgressIndicator("Marking the transaction as non-payment...");
            await markAsNonPayment(id);
        } finally {
            Xrm.Utility.closeProgressIndicator();
        }

        await form.data.refresh();
    } catch (error) {
        await showError(error);
    }
}

export async function markAsNonPaymentFromGrid(grid: Xrm.SubGridControl<any>, selectedIds: string[]) {
    try {
        try {
            for (let i = 0; i < selectedIds.length; ++i) {
                const id = selectedIds[i];
                Xrm.Utility.showProgressIndicator(`Marking ${i + 1} of ${selectedIds.length} transactions as non-payment...`);
                await markAsNonPayment(id);
            }
        } finally {
            Xrm.Utility.closeProgressIndicator();
        }

        grid.refresh();
    } catch (error) {
        await showError(error);
    }
}

async function markAsNonPayment(id: string) {
    await XrmQuery.promiseRequest("POST", `pc_transactions(${formatGuid(id)})/Microsoft.Dynamics.CRM.pc_MarkTransactionAsNonPayment`, null);
}
