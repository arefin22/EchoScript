'use client'

import { useEffect, useRef } from "react";
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
// import ImageTool from "@editorjs/image";
import CodeTool from "@editorjs/code";


const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        level: 1,
        text: "Hello EchoScript",
      },
    },
  ],
};

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
          config: {
            placeholder: "Enter a Paragraph",
          },
        },
        header: {
          class: Header,
          config: {
            placeholder: "Enter a header",
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 3,
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
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        code: CodeTool,
        // image: {
        //   class: ImageTool,
        //   config: {
        //     uploader: {
        //       async uploadByFile(file) {
        //         const formData = new FormData();
        //         formData.append("file", file);

        //         const response = await axios.post(
        //           `http://localhost:4001/api/uploadImage/create`,
        //           formData,
        //           {
        //             headers: {
        //               "Content-Type": "multipart/form-data",
        //             },
        //             withCredentials: false,
        //           }
        //         );

        //         if (response.data.success === 1) {
        //           return response.data;
        //         }
        //       },
        //       async uploadByUrl(url) {
        //         const response = await axios.post(
        //           `http://localhost:4001/api/uploadImage/createByUrl`,
        //           {
        //             url,
        //           }
        //         );

        //         if (response.data.success === 1) {
        //           return response.data;
        //         }
        //       },
        //     },
        //     inlineToolbar: true,
        //   },
        // },
      },
      // data: DEFAULT_INITIAL_DATA,
    });
  };
    

    useEffect(() => {
      if (ejInstance.current === null) {
        initEditor();
      }

      return () => {
        ejInstance?.current?.destroy();
        ejInstance.current = null;
      };
    }, []);

  return (
    <>
      <div class="content">
        <div
          id="editorjs"
          className="border-solid border-2 border-gray-500 w-3/4 mx-auto p-10"
        ></div>
      </div>
    </>
  );
};

export default TextEditor;
