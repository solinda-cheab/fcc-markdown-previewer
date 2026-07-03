import { useState } from "react";
import { marked } from "marked";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import defaultMarkdown from "./data/defaultMarkdown";
import "./App.css";

// Enable line breaks (optional FCC bonus)
marked.setOptions({
  breaks: true,
});

export default function App() {
  const [markdown, setMarkdown] = useState<string>(defaultMarkdown);

  return (
    <div className="app">
      <h1 className="title">Markdown Previewer</h1>

      <div className="container">
        <Editor
          markdown={markdown}
          setMarkdown={setMarkdown}
        />

        <Preview
          html={marked.parse(markdown) as string}
        />
      </div>
    </div>
  );
}