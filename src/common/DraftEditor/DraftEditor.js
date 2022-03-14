import {
    createParagraphPlugin,
    createPlateEditor,
    createPlateUI,
    createPlugins,
    ELEMENT_PARAGRAPH,
    Plate,
    serializeHtml,
    withProps,
    getPluginType,
    ELEMENT_DEFAULT,
    createHeadingPlugin,
    createPluginFactory
} from '@udecode/plate';
import { useState } from 'react';
import { CONFIG } from './config/config';
import { PLUGINS } from './config/plugins';

const initialValue = [
    { type: 'p', children: [{ text: '🧱 Elementssssasd' }], id: 10020 }
];

const plugins = createPlugins([createParagraphPlugin()], {
    components: createPlateUI()
});
// let editor = createPlateEditor({
//     plugins: plugins,
//     components: components
// });
// const html = serializeHtml(editor, {
//     nodes: initialValue
// });

function DraftEditor({ id = 1 }) {
    const [value, setValue] = useState([{ text: '🧱 Elementssssasd' }]);

    return (
        <>
            <Plate
                id={id}
                className={'text-center'}
                initialValue={initialValue}
                plugins={plugins}></Plate>
        </>
    );
}

export default DraftEditor;
