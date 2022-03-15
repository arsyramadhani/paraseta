import dynamic from 'next/dynamic';
import useTailwindClass from '../../../../utils/useTailwindClass';

const TextEditor = dynamic(() =>
    import('../../../common/TextEditor/TextEditor')
);

export default function SectionWelcome({ data, style, widgets }) {
    // const style = useTailwindClass(data.properties.style);
    return (
        <div className={style}>
            {widgets.map(widget => ComponentsSelector(widget))}
        </div>
    );
}

function ComponentsSelector(widget) {
    console.log(widget);
    switch (widget.type) {
        case 'text':
            return (
                <TextEditor
                    key={widget.id}
                    value={widget.properties.title}
                    className={useTailwindClass(widget.properties.style)}
                    onChange={e => {}}
                />
            );

        default:
            return <div>No Component Provided</div>;
    }
}

// <div className={containerClass}>
//     <TextEditor
//         value={value}
//         onChange={e => {
//             console.log(e);
//             setValue(e);
//         className='text-red-500'
//     />
// </div>
