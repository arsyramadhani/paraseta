import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentWorkspace } from '@store/appStateReducer';
import useTailwindClass from '@utils/useTailwindClass';

export default function FrameEditor({ workspaceId }) {
    const [currentSections, setCurrentSections] = useState([]);
    const { currentWorkspace, sectionConfig } = useSelector(
        state => state.appstate
    );
    const sections = useSelector(state => state.sections);
    const widgets = useSelector(state => state.widgets);
    const dispatch = useDispatch();

    useEffect(() => {
        !currentWorkspace &&
            workspaceId &&
            dispatch(setCurrentWorkspace(workspaceId));
    }, [currentWorkspace, workspaceId]);

    useEffect(() => {
        setCurrentSections(sections);
    }, [sections]);

    if (sections.length === 0 || widgets.length === 0) {
        return (
            <div className='h-full flex flex-col justify-center '>
                Data Tidak Tersedia
            </div>
        );
    }

    return (
        <div className='w-[350px] '>
            <Suspense fallback={<FallbackComponents />}>
                {sections.map(
                    val =>
                        // <RenderSection key={val.id} data={val} />
                        val.properties.isVisible && (
                            <div
                                key={val.id}
                                className={useTailwindClass(
                                    val.properties.style
                                )}>
                                <SectionSwitcher data={val}>
                                    {widgets
                                        .filter(
                                            item => item.sectionId === val.id
                                        )
                                        .map(m => (
                                            <WidgetSwitcher
                                                key={m.id}
                                                data={m}
                                            />
                                        ))}
                                </SectionSwitcher>
                            </div>
                        )
                )}
            </Suspense>
        </div>
    );
}

const sectionSelector = {
    WELCOME: dynamic(() => import('@sections/Welcome/Welcome')),
    COUPLES: dynamic(() => import('@sections/Couples/Couples')),
    PRAYER: dynamic(() => import('@sections/Prayer/Prayer'))
};

const widgetSelector = {
    WYSIWYG: dynamic(() => import('@components/TextEditor/TextEditor'))
};

const SectionSwitcher = ({ data, children }) => {
    switch (data.type) {
        case 'WELCOME':
            return <sectionSelector.WELCOME data={data} children={children} />;
        case 'COUPLES':
            return <sectionSelector.COUPLES />;
        default:
            return <></>;
    }
};

const WidgetSwitcher = ({ data }) => {
    // console.log(data);
    switch (data.components) {
        case 'WYSIWYG':
            return (
                <widgetSelector.WYSIWYG
                    value={data.properties.value}
                    className={useTailwindClass(data.properties.style)}
                />
            );

        default:
            return <></>;
    }
};

const FallbackComponents = () => {
    return <div className='h-full flex flex-col justify-center'>Loading</div>;
};
