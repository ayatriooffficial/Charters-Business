import type { ReactNode } from "react";
import { Fragment } from "react";

function splitBold(text: string): ReactNode {
  if (!text.includes("**")) return text;

  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  const re = /\*\*(.+?)\*\*/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(<strong key={key++}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export function boldify(children: ReactNode): ReactNode {
  if (typeof children === "string") {
    return splitBold(children);
  }

  if (Array.isArray(children)) {
    return children.map((child, i) => (
      <Fragment key={i}>{boldify(child)}</Fragment>
    ));
  }

  return children;
}
