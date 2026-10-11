// Turns text like "Developer & *automation* builder" into normal words
// plus slanted fancy words (the ones inside *stars*). A new line in the text = a line break.
export default function Fancy({ text }) {
  return text.split("\n").map((line, li) => (
    <span key={li} style={{ display: "block" }}>
      {line.split(/(\*[^*]+\*)/).map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? <em key={i}>{part.slice(1, -1)}</em> : part
      )}
    </span>
  ));
}
