import dynamic from 'next/dynamic';
import Image from 'next/image';
import useDateConverter from '../../../../utils/useDateConverter';
import useTailwindClass from '../../../../utils/useTailwindClass';

const TextEditor = dynamic(() =>
    import('../../../common/TextEditor/TextEditor')
);

export default function SectionWelcome({ data, style, widgets }) {
    return (
        <div className={style + ' relative '}>
            {data.properties.imgUrl && (
                <Image
                    className={
                        data.properties.imgFilter &&
                        'filter ' + data.properties.imgFilter
                    }
                    src={data.properties.imgUrl}
                    objectFit={'cover'}
                    layout={'fill'}
                    priority
                />
            )}
            {widgets.map(widget => (
                <WidgetWrapper key={widget.id} widget={widget} />
            ))}
        </div>
    );
}

function WidgetWrapper({ widget }) {
    console.log(widget.type);
    switch (widget.type) {
        case 'text':
            return (
                <TextEditor
                    key={widget.id}
                    value={widget.properties.value}
                    className={useTailwindClass(widget.properties.style)}
                    onChange={e => {}}
                />
            );
        case 'date':
            return (
                <div
                    className={
                        'z-10 ' + useTailwindClass(widget.properties.style)
                    }>
                    {useDateConverter({
                        date: widget.properties.value,
                        type: widget.properties.preset
                    })}
                </div>
            );
        default:
            return <div>Widget Erroxxr</div>;
    }
}
