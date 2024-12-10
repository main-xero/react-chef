import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import huggingLogo from "../assets/hugging.svg";

export default function Header() {
  return (
    <>
      <div className="stack">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://huggingface.co" target="_blank">
          <img
            src={huggingLogo}
            className="logo face"
            alt="Hugging Face logo"
          />
        </a>
      </div>
      <header className="header">
        <h1>🍲 The Saucy Chef</h1>
        <p>web application</p>
      </header>
    </>
  );
}
