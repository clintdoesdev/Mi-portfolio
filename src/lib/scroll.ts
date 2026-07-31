export function smoothScrollToHash(hash: string) {
  if (!hash.startsWith("#")) return;
  const target = document.querySelector(hash);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  history.pushState(null, "", hash);
}
