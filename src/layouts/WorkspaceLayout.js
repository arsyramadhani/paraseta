import { Provider } from 'react-redux';
import store from '@store/index';
import NavbarWorkspace from '@components/NavbarWorkspace/NavbarWorkspace';

export default function WorkspaceLayout({
    navbar = 'default',
    currentPage = '',
    children
}) {
    return (
        <Provider store={store}>
            <div className='w-screen h-screen min-h-screen bg-zinc-100 overflow-x-hidden flex flex-col'>
                <NavbarWorkspace type={navbar} currentPage={currentPage} />
                <div className='w-full flex-1 overflow-x-hidden px-10 lg:px-40'>
                    {children}
                </div>
            </div>
        </Provider>
    );
}
