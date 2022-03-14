import {
    createHeadingPlugin,
    createPlateUI,
    createPlugins,
    createSingleLinePlugin
} from '@udecode/plate';

const basicElements = [createHeadingPlugin(), createSingleLinePlugin()];

let components = createPlateUI({});

const PLUGINS = createPlugins([...basicElements], {
    components
});

export { PLUGINS };
