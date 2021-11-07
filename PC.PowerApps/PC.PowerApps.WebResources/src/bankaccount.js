import { sleep } from "./lib/common";
let form;
let isLoaded = false;
export async function onLoad(executionContext) {
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
//# sourceMappingURL=bankaccount.js.map