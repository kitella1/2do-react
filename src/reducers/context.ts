import { createContext, type ActionDispatch } from "react";
import type { ListItemInterface } from "../types/listItems";
import type { ActionsInterface as ListActionsInterface } from "./listReducer";
import type { ActionsInterface as FilterActionsInterface } from "./filterReducer";

/* Contexts */
export const ListContext = createContext<ListItemInterface[]>(null);
export const FiltersContext = createContext<string[]>(null);

/* Dispatch Contexts */
export const ListDispatchContext =
	createContext<ActionDispatch<[action: ListActionsInterface]>>(null);
export const FiltersDispatchContext =
	createContext<ActionDispatch<[action: FilterActionsInterface]>>(null);
