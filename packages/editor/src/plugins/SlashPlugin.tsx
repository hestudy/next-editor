import { $createSlashNode } from "@/nodes/SlashNode";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TextNode } from "lexical";
import { useEffect } from "react";

const SlashPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerNodeTransform(TextNode, (node) => {
      if (node.getTextContent() === "/") {
        node.replace($createSlashNode(node.getTextContent()));
      }
    });
  }, []);

  return <></>;
};

export default SlashPlugin;
