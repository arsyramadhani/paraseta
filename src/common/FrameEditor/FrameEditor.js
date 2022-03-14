import dynamic from 'next/dynamic';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentWorkspace } from '../../../store/appStateReducer';

const CONSTANT = {
    WELCOME: 'WELCOME',
    PERSON: 'PERSON'
};

const sectionType = {
    WELCOME: dynamic(() =>
        import('../../module/section/SectionWelcome/SectionWelcome')
    )
};

const FilterSectionType = ({ key, data }) => {
    switch (data.type) {
        case CONSTANT.WELCOME:
            return <sectionType.WELCOME key={key} data={data} />;
        default:
            break;
    }
};

export default function FrameEditor({ workspaceId }) {
    const { currentWorkspace } = useSelector(state => state.appstate);
    const sections = useSelector(state => state.sections);
    const dispatch = useDispatch();

    useEffect(() => {
        !currentWorkspace &&
            workspaceId &&
            dispatch(setCurrentWorkspace(workspaceId));
    }, [currentWorkspace, workspaceId]);

    if (sections.length === 0) {
        return (
            <div className='h-full flex flex-col justify-center'>
                Data Tidak Tersedia
            </div>
        );
    }
    // console.log(sections);
    return (
        <div className='w-80'>
            <Suspense fallback={<FallbackComponents />}>
                {sections.map(data => {
                    // let styles = Object.keys(data.properties.style || []).map(
                    //     val => data.properties.style[val]
                    // );
                    return FilterSectionType({ key: data.id, data });
                })}
            </Suspense>
        </div>
    );
}

const FallbackComponents = () => {
    return (
        <div className='h-full flex flex-col justify-center'>
            Loading Components
        </div>
    );
};
// <div className={containerClass}>
//     <TextEditor
//         value={value}
//         onChange={e => {
//             console.log(e);
//             setValue(e);
//         className='text-red-500'
//     />
// </div>

/* {data.sections.map(n => {
                let styles = Object.keys(n.properties.style || []).map(
                    val => n.properties.style[val]
                );
                return (
                    <div key={n.id} className={classNames(styles)}>
                        {data.widgets.map(w => {
                            return (
                                w.sectionId === n.id && (
                                    <div key={w.sectionId}>{n.id}</div>
                                )
                            );
                        })}
                    </div>
                );
            })} */
