import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onCHnageText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open)

  return (
    <div className="App">
      <input value={text} onChange={onCHnageText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open}/>
    </div>
  );
}
