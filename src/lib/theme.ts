"use client";

import { useEffect, useSyncExternalStore } from "react";
import { THEME_COLORS, THEME_STORAGE_KEY, type Theme } from "@/lib/theme-script";

const DARK_QUERY = "(prefers-color-scheme: dark)";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

export function useTheme() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function systemTheme(): Theme {
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
}

let transitionTimer: ReturnType<typeof setTimeout> | undefined;

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    root.classList.add("theme-transition");
    clearTimeout(transitionTimer);
    transitionTimer = setTimeout(() => root.classList.remove("theme-transition"), 500);
  }
  root.setAttribute("data-theme", theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
}

// The visitor's pick overrides the device setting. Picking the same theme as the
// device clears the override, so the site goes back to following the device.
export function setTheme(theme: Theme) {
  applyTheme(theme);
  try {
    if (theme === systemTheme()) localStorage.removeItem(THEME_STORAGE_KEY);
    else localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode); the toggle still works for this visit.
  }
}

// Keeps the page in step with the device's light/dark setting (e.g. an automatic
// switch at sunset) for as long as the visitor hasn't picked a theme themselves.
export function useFollowSystemTheme() {
  useEffect(() => {
    const query = window.matchMedia(DARK_QUERY);
    const onChange = () => {
      if (!storedTheme()) applyTheme(systemTheme());
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
}
