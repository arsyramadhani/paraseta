import { useEffect, useMemo, useRef, useState } from 'react';
import { createEditor, Node, Text, Transforms } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

export default function TextEditor({
    className,
    onChange = e => {
        return e;
    },
    value = '',
    readOnly = false
}) {
    const editor = useMemo(() => withReact(createEditor()), []);

    const [stateValue, setStateValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: value }]
        }
    ]);

    useEffect(() => {
        console.log('changed');
        Transforms.removeNodes(editor, {
            at: [0, 0]
        });
        Transforms.insertNodes(
            editor,
            {
                text: value
            },
            {
                at: [0, 0]
            }
        );
    }, [value]);

    return (
        <Slate
            editor={editor}
            children={stateValue}
            value={stateValue}
            onChange={val => {
                setStateValue(val);
                onChange(serialize(val));
            }}>
            <Editable readOnly={readOnly} className={'w-full ' + className} />
        </Slate>
    );
}

const serialize = nodes => {
    return nodes.map(n => Node.string(n)).join('\n');
};
