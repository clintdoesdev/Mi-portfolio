export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

// Browser UI colour (address bar on mobile) for each theme.
export const THEME_COLORS: Record<Theme, string> = { light: "#f5f4f0", dark: "#0e0e10" };

// Runs in <head> before first paint. A saved choice wins; otherwise the device's
// light/dark setting is used, so the page never flashes the wrong theme.
export const themeInitScript = `(function(){var d=document.documentElement,s=null;try{s=localStorage.getItem("${THEME_STORAGE_KEY}")}catch(e){}var dark=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);d.setAttribute("data-theme",dark?"dark":"light");var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",dark?"${THEME_COLORS.dark}":"${THEME_COLORS.light}")})()`;
