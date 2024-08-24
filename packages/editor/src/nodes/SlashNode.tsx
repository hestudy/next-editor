import { Slash } from "@/components/Slash";
import { DecoratorNode, LexicalNode, NodeKey } from "lexical";
import { ReactNode } from "react";

export class SlashNode extends DecoratorNode<ReactNode> {
  static getType(): string {
    return "slash";
  }

  static clone(node: SlashNode): SlashNode {
    return new SlashNode(node.__key);
  }

  constructor(key?: NodeKey) {
    super(key);
  }

  createDOM(): HTMLElement {
    return document.createElement("span");
  }

  updateDOM(): false {
    return false;
  }

  decorate(): ReactNode {
    return <Slash></Slash>;
  }
}

export function $createSlashNode(): SlashNode {
  return new SlashNode();
}

export function $isSlashNode(
  node: LexicalNode | null | undefined
): node is SlashNode {
  return node instanceof SlashNode;
}
