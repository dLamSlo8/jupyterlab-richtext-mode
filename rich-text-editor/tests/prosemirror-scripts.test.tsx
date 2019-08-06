// import * as scripts from "../src/prosemirror/prosemirror-scripts";
import { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";
import { schema } from "../src/prosemirror/prosemirror-schema";

import RichTextMenu from "../src/RichTextMenu";
import React from 'react';


const view = new EditorView(
    document.body.appendChild(document.createElement("div")), 
    {
        state: EditorState.create({
            schema,
        })
    }
);
let newState = view.state.apply(view.state.tr.insertText("this is test text"));
console.log(newState.selection.from);
// beforeEach( () => {
//     console.log("test");
//     view = new EditorView(
//         document.body.appendChild(document.createElement("div")), 
//         {
//             state: EditorState.create({
//                 schema,
//             })
//         }
//     );
//     let state = view.state;
//     view.dispatch(state.tr.insertText("this is test text"));
    
// });

test('view created', () => {
    expect(view).not.toBeNull();
});

test('view text is correct', () => {
    expect(newState.doc.textContent).toBe("this is test text");
})

// describe("test getMarksForSelection", () => {
//     let selection;
//     beforeEach( () => {
//         selection = newState.selection;
//     });

//     test('move selection', () => {
//         newState.tr.setSelection(new Selection)
//     })

// });