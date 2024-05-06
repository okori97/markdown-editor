import { DocumentHeading } from "./DocumentHeading";
import { useAppContext } from "../Context/state";
import type { MDFile } from "types";

export function Editor() {
  const { activeFile, setActiveFile } = useAppContext();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    console.log(target.value);

    setActiveFile((prev): MDFile => {
      return { ...prev, content: target.value };
    });
  };

  return (
    <div className="h-lvh w-1/2 border-r ">
      <DocumentHeading text="MARKDOWN" isPreview={false} />
      <div className=" h-full  overflow-y-auto">
        <textarea
          className=" text-primary-150 font-regular   h-full  w-full  bg-white p-4 text-sm focus:outline-none"
          value={activeFile?.content ?? ""}
          onChange={handleChange}
          placeholder="# Welcome to Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

## How to use this?

1. Write markdown in the markdown editor window
2. See the rendered markdown in the preview window

### Features

- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists
- Name and save the document to access again later
- Choose between Light or Dark mode depending on your preference

> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).

#### Headings

To create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.

##### Lists

You can see examples of ordered and unordered lists above.

###### Code Blocks

This markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:

```
<main>
  <h1>This is a larger code block</h1>
</main>
```"
        ></textarea>
      </div>
    </div>
  );
}
