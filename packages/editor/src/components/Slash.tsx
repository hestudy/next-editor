import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const Slash = () => {
  const [editor] = useLexicalComposerContext();

  return (
    <Popover defaultOpen>
      <PopoverTrigger className="bg-gray-100 rounded p-1 text-sm">
        /
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        demo
      </PopoverContent>
    </Popover>
  );
};
