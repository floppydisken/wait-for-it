export interface WaitForItOptions {
  root?: Element;
  timeout?: number;
}
export function waitForIt(selector: string, options?: WaitForItOptions): Promise<Element> {
  return new Promise((resolve, reject) => {
    const { root, timeout } = { root: options?.root ? options?.root : document.body, timeout: options?.timeout };
    const element = root.querySelector(selector);

    if (element) return resolve(element);

    const observer = new MutationObserver(() => {
      const element = root.querySelector(selector);
      if (element) {
        resolve(root.querySelector(selector)!);
        observer.disconnect();
      }
    });
    if (timeout && timeout > 0) {
      setTimeout(() => {
        reject(new Error(`Could not find element with id "${selector}" within timeout limit of ${timeout}`))
        observer.disconnect();
      }, timeout);
    }

    observer.observe(root, {
      childList: true,
      subtree: true
    });
  });
}