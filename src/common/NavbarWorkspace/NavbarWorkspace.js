import Link from 'next/link';
import { BiChevronLeft, BiShow } from 'react-icons/bi';

export default function NavbarWorkspace({ type, currentPage }) {
    return (
        <div className='w-full gap-2 px-10 lg:px-40 h-16 bg-white flex items-center border-b border-gray-200'>
            <Link href='/'>
                <a className='text-2xl flex items-center font-bold  h-full'>
                    M.
                </a>
            </Link>
            <Link href='/'>
                <a className='h-10  px-4 flex items-center text-center font-semibold text-sm    text-zinc-800 '>
                    <span className='text-2xl'>
                        <BiChevronLeft />
                    </span>
                    Back
                </a>
            </Link>
            <ul
                className={`flex-1 h-full justify-end items-center flex mr-4 gap-6`}>
                {editorMenu.map(val => (
                    <NavItems
                        key={val.title}
                        item={val}
                        href={`/workspace/213153134/${val.title.toLowerCase()}`}
                        isActive={
                            currentPage === val.title.toLowerCase()
                                ? true
                                : false
                        }
                    />
                ))}
            </ul>
            <button className='h-10 px-4 text-center  flex items-center   font-medium   bg-zinc-800 text-white '>
                <BiShow className='mr-1' />
                Preview
            </button>
            <button className='h-10 px-4 text-center  flex items-center   font-medium   bg-zinc-800 text-white '>
                Save
            </button>
        </div>
    );
}

function NavItems({ item, isActive, href }) {
    return (
        <li className='h-full flex  items-center relative text-zinc-900'>
            <Link href={href}>
                <a className='font-bold text-sm flex items-center h-full '>
                    {item.title}
                </a>
            </Link>
            {isActive && (
                <div className='h-[3px] bg-zinc-600 w-full absolute bottom-0'></div>
            )}
        </li>
    );
}

const editorMenu = [
    {
        title: 'Overview'
    },
    {
        title: 'Design'
    },
    {
        title: 'Guests'
    },
    {
        title: 'Privacy'
    },
    {
        title: 'Settings'
    }
];
