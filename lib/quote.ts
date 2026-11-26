"use client";
// Quote list ("cart" without prices). Lives in the visitor's browser (localStorage) so it survives reloads.
import { useSyncExternalStore } from "react";
export type QuoteItem = { key: string; slug: string; name: string; code?: string; img?: string; finish?: string; size?: string; qty: number; kind: "product" | "package"; href?: string };
const KEY = "smartstorey-quote-v1";
const EVT = "smartstorey-quote";
let cache: QuoteItem[] | null = null;
const EMPTY: QuoteItem[] = [];
function read(): QuoteItem[] {
  if (cache) return cache;
  try { const v = JSON.parse(localStorage.getItem(KEY) || "[]"); cache = Array.isArray(v) ? v : []; } catch { cache = []; }
  return cache!;
}
function write(items: QuoteItem[]) {
  cache = items;
  try { localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* private mode: keep in memory */ }
  window.dispatchEvent(new Event(EVT));
}
function subscribe(cb: () => void) {
  const onStorage = (e: StorageEvent) => { if (e.key === KEY) { cache = null; cb(); } };
  window.addEventListener(EVT, cb); window.addEventListener("storage", onStorage);
  return () => { window.removeEventListener(EVT, cb); window.removeEventListener("storage", onStorage); };
}
export function useQuote() { return useSyncExternalStore(subscribe, read, () => EMPTY); }
export const itemKey = (slug: string, finish?: string, size?: string) => [slug, finish || "", size || ""].join("|");
export function addToQuote(it: Omit<QuoteItem, "key">) {
  const key = itemKey(it.slug, it.finish, it.size);
  const items = read(); const i = items.findIndex((x) => x.key === key);
  const next = i >= 0 ? items.map((x, j) => (j === i ? { ...x, qty: Math.min(9999, x.qty + it.qty) } : x)) : [...items, { ...it, key }];
  write(next);
  window.dispatchEvent(new CustomEvent("smartstorey-added", { detail: it.name }));
}
export function setQty(key: string, qty: number) { write(read().map((x) => (x.key === key ? { ...x, qty: Math.max(1, Math.min(9999, qty || 1)) } : x))); }
export function removeItem(key: string) { write(read().filter((x) => x.key !== key)); }
export function clearQuote() { write([]); }
export const totalPieces = (items: QuoteItem[]) => items.reduce((n, x) => n + x.qty, 0);
