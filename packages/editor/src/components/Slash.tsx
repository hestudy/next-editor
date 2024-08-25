import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection } from "lexical";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const Slash = () => {
  const [editor] = useLexicalComposerContext();

  return (
    <Popover
      defaultOpen
      onOpenChange={(open) => {
        if (!open) {
          editor.getEditorState().read(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
              const node = selection
                .getNodes()
                .find((node) => node.getType() === "slash");
              if (node) {
                editor.update(() => {
                  node.remove();
                });
              }
            }
          });
        }
      }}
    >
      <PopoverTrigger className="bg-gray-100 rounded p-1 text-sm">
        /
      </PopoverTrigger>
      <PopoverContent
        onCloseAutoFocus={(e) => {
          e.preventDefault();
          editor.focus();
        }}
      >
        demo
      </PopoverContent>
    </Popover>
  );
};
