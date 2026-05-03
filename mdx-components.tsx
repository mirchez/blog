import type { MDXComponents } from "mdx/types";
import { A } from "@/app/(post)/components/a";
import { P } from "@/app/(post)/components/p";
import { H1, H2, H3 } from "@/app/(post)/components/headings";
import { InlineCode, CodeBlock } from "@/app/(post)/components/code";
import { UL, OL, LI } from "@/app/(post)/components/list";
import { Blockquote } from "@/app/(post)/components/blockquote";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: A,
    p: P,
    h1: H1,
    h2: H2,
    h3: H3,
    code: InlineCode,
    pre: CodeBlock,
    ul: UL,
    ol: OL,
    li: LI,
    blockquote: Blockquote,
  };
}
