import React from "react";
import { marked } from 'marked';

function Previewer (props) {
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        breaks: true
    });

    return(
        <div>
            <div id="preview"
            dangerouslySetInnerHTML={{__html: marked(props.markdown)}} ></div>
        </div>
    );
}

export default Previewer
