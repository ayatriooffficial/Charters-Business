export * from "react/jsx-dev-runtime";

import { jsxDEV as reactJsxDEV } from "react/jsx-dev-runtime";
import type { ReactElement } from "react";
import { boldify } from "./boldify";

export const jsxDEV = (
  type: unknown,
  props: Record<string, unknown> | null,
  key?: unknown,
  isStatic?: boolean
): ReactElement => {
  if (
    props != null &&
    (props as { children?: unknown }).children !== undefined &&
    typeof type === "string" &&
    type !== "script" &&
    type !== "style"
  ) {
    return reactJsxDEV(
      type as never,
      {
        ...props,
        children: boldify((props as { children: never }).children),
      } as never,
      key as never,
      isStatic as boolean
    );
  }

  return reactJsxDEV(type as never, props as never, key as never, isStatic as boolean);
};
