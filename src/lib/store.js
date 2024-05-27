import { writable } from 'svelte/store';

export const panelInstanceCount = writable(-1); //Start at -1 so the first panel starts at 0
export const panelVisibility = writable({});