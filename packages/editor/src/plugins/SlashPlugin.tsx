import { $createSlashNode, SlashNode } from "@/nodes/SlashNode";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createTextNode, $insertNodes, TextNode } from "lexical";
import { useEffect } from "react";

const SlashPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerNodeTransform(TextNode, (node) => {
      const textContent = node.getTextContent();
      if (textContent.endsWith("/")) {
        node.setTextContent(textContent.slice(0, -1));
        $insertNodes([$createSlashNode()]);
      }
    });
  }, []);

  useEffect(() => {
    return editor.registerNodeTransform(SlashNode, (node) => {
      const nextSibling = node.getNextSibling();
      if (nextSibling) {
        node.replace($createTextNode("/"));
      }
    });
  }, []);

  return <></>;
};

export default SlashPlugin;
