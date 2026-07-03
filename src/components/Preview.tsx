interface PreviewProps {
  html: string;
}

export default function Preview({ html }: PreviewProps) {
  return (
    <div className="preview-container">
      <h2>Preview</h2>

      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}