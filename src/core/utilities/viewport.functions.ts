export function getViewportHeight(): number {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

export function getViewportWidth(): number {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}