import { sleep } from "./lib/common";

let form: Form.pc_bankaccount.Main.Information;
let isLoaded = false;

export async function onLoad(executionContext: Xrm.ExecutionContext<any, any>) {
    if (isLoaded) {
        return;
    }

    isLoaded = true;

    form = <Form.pc_bankaccount.Main.Information>executionContext.getFormContext();

    while (true) {
        await sleep(5000);
        await form.data.refresh();
    }
}
