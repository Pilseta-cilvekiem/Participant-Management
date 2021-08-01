import { sleep } from "./lib/common";

let form: Form.pc_bankaccount.Main.Information;

export async function onLoad(executionContext: Xrm.ExecutionContext<any, any>) {
    form = <Form.pc_bankaccount.Main.Information>executionContext.getFormContext();

    while (true) {
        await sleep(15000);
        await form.data.refresh();
    }
}
