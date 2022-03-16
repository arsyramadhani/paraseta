import dynamic from 'next/dynamic';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentWorkspace } from '../../../store/appStateReducer';
import useTailwindClass from '../../../utils/useTailwindClass';
const CONSTANT = {
    WELCOME: 'WELCOME',
    PERSON: 'PERSON'
};

const sectionType = {
    WELCOME: dynamic(() =>
        import('../../module/section/SectionWelcome/SectionWelcome')
    ),
    PERSON: dynamic(() =>
        import('../../module/section/SectionPerson/SectionPerson')
    )
};

const FilterSectionType = ({ key, data, widgets }) => {
    switch (data.type) {
        case CONSTANT.WELCOME:
            return (
                <sectionType.WELCOME
                    key={key}
                    data={data}
                    style={useTailwindClass(data.properties.style)}
                    widgets={widgets}
                />
            );
        case CONSTANT.PERSON:
            return (
                <sectionType.PERSON
                    key={key}
                    data={data}
                    style={useTailwindClass(data.properties.style)}
                    widgets={widgets}
                />
            );
        default:
            break;
    }
};

export default function FrameEditor({ workspaceId }) {
    const { currentWorkspace } = useSelector(state => state.appstate);
    const sections = useSelector(state => state.sections);
    const widgets = useSelector(state => state.widgets);
    const dispatch = useDispatch();

    useEffect(() => {
        !currentWorkspace &&
            workspaceId &&
            dispatch(setCurrentWorkspace(workspaceId));
    }, [currentWorkspace, workspaceId]);

    if (sections.length === 0) {
        return (
            <div className='h-full flex flex-col justify-center '>
                Data Tidak Tersedia
            </div>
        );
    }
    return (
        <div className='w-[414px] '>
            <Suspense fallback={<FallbackComponents />}>
                {sections.map(data =>
                    FilterSectionType({
                        key: data.id,
                        data,
                        widgets: widgets.filter(id => data.id === id.sectionId)
                    })
                )}
            </Suspense>
        </div>
    );
}

const FallbackComponents = () => {
    return <div className='h-full flex flex-col justify-center'>Loading</div>;
};
