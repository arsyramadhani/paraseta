import Link from 'next/link';

export default function Navbar({ type, currentPage }) {
    return (
        <div className='w-full gap-8 px-40 h-16 bg-white flex items-center border-b border-gray-200'>
            <Link href='/'>
                <a className='text-2xl flex items-center font-bold  h-full'>
                    Menanti.
                </a>
            </Link>
            <ul
                className={`flex-1 h-full ${
                    type === 'workspace' && 'justify-end'
                } items-center flex gap-6`}>
                {defaultMenu.map(val => (
                    <NavItems
                        key={val.title}
                        item={val}
                        href={`/${
                            val.title.toLowerCase() !== 'workspace'
                                ? val.title.toLowerCase()
                                : ''
                        }`}
                        isActive={
                            currentPage === val.title.toLowerCase()
                                ? true
                                : false
                        }
                    />
                ))}
            </ul>
            {
                <div className='flex items-center gap-4 relative w-fit'>
                    <div className='font-semibold text-zinc-500'>Account</div>
                </div>
            }
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

function NavDefault({ currentPage, menuItem }) {
    return (
        <>
            <ul className={`flex-1 h-full items-center flex gap-6`}>
                {menuItem.map(val => (
                    <NavItems
                        key={val.title}
                        item={val}
                        href={`/${
                            val.title.toLowerCase() !== 'workspace'
                                ? val.title.toLowerCase()
                                : ''
                        }`}
                        isActive={
                            currentPage === val.title.toLowerCase()
                                ? true
                                : false
                        }
                    />
                ))}
            </ul>
        </>
    );
}

const defaultMenu = [
    {
        title: 'Workspace'
    },
    {
        title: 'Explore'
    },
    {
        title: 'Help'
    }
];
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
