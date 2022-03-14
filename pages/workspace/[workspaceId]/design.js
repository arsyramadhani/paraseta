import { useRouter } from 'next/router';
import { useEffect } from 'react';
import FrameEditor from '../../../src/common/FrameEditor/FrameEditor';
import RightNav from '../../../src/common/RightNav/RightNav';
import WorkspaceLayout from '../../../src/layouts/WorkspaceLayout';

export default function Design() {
    const { workspaceId } = useRouter().query;
    return (
        <WorkspaceLayout navbar='workspace' currentPage='design'>
            <div className='w-full h-full  flex'>
                <div className='flex-1 '>
                    <div className=' h-full w-full py-8  flex'>
                        <div className='flex-1 flex justify-center shadow-2xl   pt-4  h-full overflow-y-scroll scrollbar bg-zinc-50  '>
                            {workspaceId ? (
                                <FrameEditor workspaceId={workspaceId} />
                            ) : null}
                        </div>
                        <div className='w-4/12 flex flex-col gap-2  pl-8 h-full  '>
                            <div className='w-full h-full px-4 py-4 bg-zinc-50 border-zinc-300 border'>
                                {workspaceId ? (
                                    <RightNav workspaceId={workspaceId} />
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WorkspaceLayout>
    );
}

function NoDataFound() {
    return (
        <div className='h-full flex flex-col items-center justify-center'>
            Data Tidak Tersedia
        </div>
    );
}
