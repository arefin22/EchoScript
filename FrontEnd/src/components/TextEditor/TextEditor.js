'use client'

import EditorJS from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";

import { useEffect, useRef } from "react";

const TextEditor = () => {
    const ejInstance = useRef();
    const initEditor = () => {
        const editor = new EditorJS({
          holder: "editorjs",
          onReady: () => {
            ejInstance.current = editor;
          },
          autofocus: true,
          onChange: async () => {
            let content = await editor.saver.save();

            console.log(content);
          },
            tools: {
                paragraph: {
                    class: Paragraph,
                    inlineToolbar: true,
                },
                header: {
                    class: Header,
                    shortcut: "CMD+SHIFT+H",
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: "unordered",
                    },
                },
                quote: {
                    class: Quote,
                    inlineToolbar: true,
                    shortcut: "CMD+SHIFT+O",
                    config: {
                        quotePlaceholder: "Enter a quote",
                        captionPlaceholder: "Quote's author",
                    },
                },
               
          },
        });
    }

    useEffect(() => {
        if (ejInstance.current === null) {
            initEditor();
        }
        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        }
    }, []);

  return (
    <div id="editorjs" className="border-solid border-2 border-gray-500 w-3/4 mx-auto p-10"></div>
  );
};

export default TextEditor;
