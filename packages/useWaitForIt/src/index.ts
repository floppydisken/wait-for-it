import { useMemo } from "react";
import { waitForIt, WaitForItOptions } from "wait-for-it";

export function useWaitForIt(
  selector: string,
  onExists: (elem: Element) => void,
  options?: WaitForItOptions
) {
  return useMemo(() => waitForIt(selector, options).then(onExists), [selector]);
}
