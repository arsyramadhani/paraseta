import {
    createPlateUI,
    ELEMENT_H1,
    ELEMENT_H2,
    ELEMENT_H3,
    ELEMENT_H4,
    ELEMENT_H5,
    ELEMENT_H6,
    ELEMENT_PARAGRAPH
} from '@udecode/plate';

export const CONFIG = {
    editableProps: {
        spellCheck: false,
        autoFocus: false,
        placeholder: 'Type…'
    },
    components: createPlateUI({
        // [ELEMENT_CODE_BLOCK]: withProps(CodeBlockElement, {
        //     styles: {
        //         root: [
        //             css`
        //                 background-color: #111827;
        //                 code {
        //                     color: white;
        //                 }
        //             `
        //<p>sadasgrayrfsd</p>
        //         ]
        //     }
        // })
    }),
    align: {
        inject: {
            props: {
                validTypes: [
                    ELEMENT_PARAGRAPH,
                    ELEMENT_H1,
                    ELEMENT_H2,
                    ELEMENT_H3,
                    ELEMENT_H4,
                    ELEMENT_H5,
                    ELEMENT_H6
                ]
            }
        }
    }
};
