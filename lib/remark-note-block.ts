import { h } from "hastscript";
import { visit } from "unist-util-visit";

// 自定义提示块
//
// :::tip
// 这是一个提示
// :::
//
// :::warning
// 这是一个警告
// :::
//
// :::danger
// 这是一个危险警告
// :::

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export default function remarkNoteBlock() {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === "containerDirective") {
        if (!["tip", "warning", "danger"].includes(node.name)) return;

        // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
        const data = node.data || (node.data = {});
        const tagName = "aside";

        data.hName = tagName;
        data.hProperties = h(tagName, {
          class: `note ${node.name}`,
        }).properties;
      }
    });
  };
}
