export * from "react/jsx-runtime";

import { jsx as reactJsx, jsxs as reactJsxs } from "react/jsx-runtime";
import type { ReactElement } from "react";
import { boldify } from "./boldify";

function boldifyProps(
  type: unknown,
  props: Record<string, unknown> | null
): Record<string, unknown> | null {
  if (
    props != null &&
    (props as { children?: unknown }).children !== undefined &&
    typeof type === "string" &&
    type !== "script" &&
    type !== "style"
  ) {
    return {
      ...props,
      children: boldify((props as { children: never }).children),
    };
  }
  return props;
}

export const jsx = (
  type: unknown,
  props: Record<string, unknown> | null,
  key?: unknown
): ReactElement => reactJsx(type as never, boldifyProps(type, props) as never, key as never);

export const jsxs = (
  type: unknown,
  props: Record<string, unknown> | null,
  key?: unknown
): ReactElement => reactJsxs(type as never, boldifyProps(type, props) as never, key as never);
