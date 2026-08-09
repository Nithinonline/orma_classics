/** Safari < 14 only has addListener/removeListener on MediaQueryList. */
export function onMediaQueryChange(
  mq: MediaQueryList,
  listener: (event: MediaQueryListEvent) => void,
): () => void {
  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }

  mq.addListener(listener);
  return () => mq.removeListener(listener);
}
