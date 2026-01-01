import { useState } from "react";
// import { marked } from 'marked';
import reactLogo from "./assets/react.svg";
import Previewer from "./components/Previewer";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState(`
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine){
  if(firstLine == '\`\`\`' && lastLine == '\`\`\`'){
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out ~~.

There's also [links]()

>Block Quotes:

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------|--------------|----------------
Your content can | be here, and it | can be here...
And here. | Okay. | I think we get it.

-And of course there are lists.
  -Some are bulleted.
    -With different indentation levels.
      -That look like this.

1. And there are numbered lists too
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo](./src/assets/react.svg)

`);
  return (
    <div>
      <h1 className="heading text-center">Markdown Previewer</h1>
      <div id="main">
        <div className="edit-container">
          <div className="edit-header">
            <h5>Editor</h5>
          </div>
          <textarea
            id="editor"
            onChange={(e) => setMarkdown(e.target.value)}
            value={markdown}
          ></textarea>
        </div>

        <div id="preview">
          <div className="preview-header">
            <h5>Previewer</h5>
          </div>
          <Previewer markdown={markdown} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
