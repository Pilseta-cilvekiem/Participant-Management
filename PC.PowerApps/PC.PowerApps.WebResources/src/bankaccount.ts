import { sleep } from "./lib/common";

let form: Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>;
let isLoaded = false;

export async function onLoad(executionContext: Xrm.ExecutionContext<any, any>) {
    if (isLoaded) {
        return;
    }

    isLoaded = true;

    form = executionContext.getFormContext();

    while (true) {
        await sleep(5000);
        await form.data.refresh();
    }
}
