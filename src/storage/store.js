import { writable, readable } from "svelte/store";

export const testStore = writable('Pakito')

export const reloadBook = writable(false);