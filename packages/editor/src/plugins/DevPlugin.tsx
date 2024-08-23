import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TreeView } from "@lexical/react/LexicalTreeView";

const DevPlugin = () => {
  const [editor] = useLexicalComposerContext();

  return (
    <TreeView
      editor={editor}
      timeTravelButtonClassName=""
      timeTravelPanelButtonClassName=""
      timeTravelPanelClassName=""
      timeTravelPanelSliderClassName=""
      treeTypeButtonClassName=""
      viewClassName=""
    ></TreeView>
  );
};

export default DevPlugin;
