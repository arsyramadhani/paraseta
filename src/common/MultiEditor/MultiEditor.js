import { Plate } from '@udecode/plate';
import React from 'react';

export default function MultiEditor() {
    // const initialValues = createMultiEditors();

    const WithPlate = ({ initialValues, id }) => (
        <Plate
            id={id}
            editableProps={{ ...editableProps }}
            initialValue={initialValues}
        />
    );

    return <div>MultiEditor</div>;
}
