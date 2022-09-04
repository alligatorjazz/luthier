import { JSX } from "preact";

export type RNode = JSX.Element | JSX.Element[] | null | undefined;
export type NavPage = { route: string, displayName: string };
export type DynamicStyles = { [property: string]: number | string | undefined} | JSX.CSSProperties;