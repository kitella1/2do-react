import { createContext, type ActionDispatch } from "react";
import type { ListItemInterface } from "../types/listItems";
import type { ActionsInterface } from "./listReducer";

export const ListContext = createContext<ListItemInterface[]>(null);
export const ListDispatchContext =
	createContext<ActionDispatch<[action: ActionsInterface]>>(null);
