import {
  EditorConfig,
  LexicalEditor,
  LexicalNode,
  SerializedTextNode,
  TextNode,
} from "lexical";

export class SlashNode extends TextNode {
  static getType(): string {
    return "slash";
  }

  static clone(node: SlashNode): SlashNode {
    return new SlashNode(node.__key);
  }

  constructor(key?: string) {
    super(key || "");
  }

  createDOM(config: EditorConfig, editor?: LexicalEditor): HTMLElement {
    const span = document.createElement("span");
    span.textContent = this.__key;
    return span;
  }

  static importJSON(serializedNode: SerializedTextNode): TextNode {
    return $createSlashNode();
  }

  exportJSON(): SerializedTextNode {
    return {
      ...super.exportJSON(),
      type: "slash",
    };
  }
}

export const $createSlashNode = (key?: string) => {
  return new SlashNode(key);
};

export const $isSlashNode = (node?: LexicalNode | null): node is SlashNode => {
  return node instanceof SlashNode;
};
