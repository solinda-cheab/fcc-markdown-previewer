interface EditorProps {
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

export default function Editor({
  markdown,
  setMarkdown,
}: EditorProps) {
  return (
    <div className="editor-container">
      <h2>Editor</h2>

      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write Markdown here..."
      />
    </div>
  );
}
