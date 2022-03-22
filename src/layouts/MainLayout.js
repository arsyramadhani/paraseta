import Navbar from '@components/Navbar/Navbar';

export default function MainLayout({
    navbar = 'default',
    currentPage = '',
    children
}) {
    return (
        <div className='w-screen h-screen min-h-screen bg-white overflow-x-hidden flex flex-col'>
            <Navbar type={navbar} currentPage={currentPage} />
            <div className='w-full flex-1 overflow-x-hidden px-40'>
                {children}
            </div>
        </div>
    );
}
