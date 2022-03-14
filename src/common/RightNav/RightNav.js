import { BiPlus } from 'react-icons/bi';
export default function RightNav() {
    return (
        <>
            <div className='flex w-full  justify-between items-center'>
                <p className='font-bold text-pxl'>Section</p>
                <button className='h-10 px-4 text-center  flex items-center   font-medium   border-zinc-800  border text-zinc-800 '>
                    <BiPlus />
                </button>
            </div>
            <hr className='mt-2' />
        </>
    );
}
