import { sleep } from "./lib/common";

let form: Form.pc_bankaccount.Main.Information;
let isFormLoaded = false;

export function onLoad(executionContext: Xrm.ExecutionContext<any, any>) {
    form = <Form.pc_bankaccount.Main.Information>executionContext.getFormContext();

    if (isFormLoaded) {
        return;
    }

    form.getAttribute("pc_transactionimportfile").addOnChange(onTransactionImportFileChange);

    isFormLoaded = true;
}

async function onTransactionImportFileChange() {
    if (!form.getAttribute("pc_transactionimportfile").getValue()) {
        return;
    }

    while (true) {
        await sleep(5000);

        if (!form.data.getIsDirty()) {
            await form.data.refresh();
        }

        const transactionImportStatus = form.getAttribute("pc_transactionimportstatus").getValue();

        if (transactionImportStatus != pc_transactionimportstatus.Pending && transactionImportStatus != pc_transactionimportstatus.InProgress) {
            return;
        }
    }
}
