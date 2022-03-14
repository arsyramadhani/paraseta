import { useMemo, useState } from 'react';
import { createEditor, Node, Text } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

export default function TextEditor({
    className,
    onChange = e => {
        return e;
    },
    value = ''
}) {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [stateValue, setStateValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: value ? value : '' }]
        }
    ]);

    return (
        <Slate
            editor={editor}
            value={stateValue}
            onChange={newValue => {
                setStateValue(newValue);
                onChange(serialize(newValue));
            }}>
            <Editable className={className} />
        </Slate>
    );
}

const serialize = nodes => {
    return nodes.map(n => Node.string(n)).join('\n');
};
