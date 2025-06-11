/** Primitive Interfaces*/

/** Library Interfaces*/

export interface SidebarProps {
  [key: string]:
    | Record<"primary" | "secondary" | "default", unknown>[]
    | Object;
}

/** Component Interfaces*/

/** Module Interfaces*/

/** Utils Interfaces*/

/** Service Interfaces */

/** Providers Interfaces*/

export interface RootProviderProps {
  children: React.ReactNode;
}

export interface SidebarProviderProps {
  children: React.ReactNode;
}

export interface StoreProviderProps {
  children: React.ReactNode;
}

/** Redux Interfaces*/

export interface CookieSlice {
  layoutPadding: number;
  theme: "default" | "red" | "orange" | "green" | "blue" | "yellow" | "violet";
  scrollbarActive: boolean;
}

/** Hooks Interfaces*/

/** API interfaces */
