import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchWorkspace } from '../services/api';
import MainLayout from '@layouts/MainLayout';

export default function Home() {
    const [workspaces, setWorkspaces] = useState([]);

    useEffect(() => {
        let mounted = true;
        fetchWorkspace().then(data => {
            mounted && setWorkspaces(data);
            console.log(data);
        });
        return () => {
            mounted = false;
        };
    }, []);

    // console.log({ workspaces: workspaces });
    return (
        <MainLayout currentPage='workspace'>
            <div className='flex flex-col gap-4 w-full h-full '>
                <div className='w-full mt-4 mb-4 h-16 bg-zinc-800 p-8 flex  items-center justify-between'>
                    <h1 className='text-zinc-50 font-medium text-md'>
                        Explore our brand new editor, more versatile.
                    </h1>
                    <h1 className='text-zinc-50 font-medium text-lg'>x</h1>
                </div>
                <div className='w-full   mb-0   flex   justify-between items-center '>
                    <div>
                        <h1 className='text-2xl font-bold text-zinc-800'>
                            My Workspace ({workspaces.length || 0})
                        </h1>
                    </div>
                    <div>
                        <input
                            type='text'
                            name='search'
                            className='h-12 px-6 bg-transparent border  text-sm border-zinc-200 mr-2'
                            id='search'
                            placeholder='Search Workspace'
                        />
                        <button className='h-12 px-6 text-center text-sm  bg-zinc-800 text-white font-semibold  '>
                            Create Workspace
                        </button>
                    </div>
                </div>
                {!workspaces ? (
                    <div className='w-full p-6 gap-8 flex justify-center  bg-white border border-gray-200 items-center'>
                        <h1 className='text-zinc-400 font-normal text-lg'>
                            Data Tidak Tersedia
                        </h1>
                    </div>
                ) : (
                    workspaces.map(val => (
                        <WorkspaceList key={val.id} item={val} />
                    ))
                )}
            </div>
        </MainLayout>
    );
}

function WorkspaceList({ item }) {
    return (
        <div className='w-full p-6 gap-8 flex justify-between  bg-white border border-gray-200 '>
            <div className='min-h-full w-52 bg-zinc-200'></div>
            <div className='flex-1 flex flex-col'>
                <Link
                    href={`/workspace/${encodeURIComponent(item.id)}/overview`}>
                    <a className='font-bold text-lg '>{item.title}</a>
                </Link>
                <p className='font-medium text-sm text-zinc-400'>{item.path}</p>
                <div className='flex text-sm mt-4 gap-12'>
                    <div>
                        <p className='font-bold text-zinc-800'>Date</p>
                        <p className='text-zinc-400'>{item.date}</p>
                    </div>
                    <div>
                        <p className='font-bold text-zinc-800'>Status</p>
                        <p className='text-zinc-400'>{item.status}</p>
                    </div>
                    <div>
                        <p className='font-bold text-zinc-800'>Viewed</p>
                        <p className='text-zinc-400'>{item.viewed}</p>
                    </div>
                    <div>
                        <p className='font-bold text-zinc-800'>Guests</p>
                        <p className='text-zinc-400'>{item.guests}</p>
                    </div>
                    <div>
                        <p className='font-bold text-zinc-800'>Attending</p>
                        <p className='text-zinc-400'>{item.attending}</p>
                    </div>
                    <div>
                        <p className='font-bold text-zinc-800'>Rejects</p>
                        <p className='text-zinc-400'>{item.rejects}</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-2'>
                <Link href={`/workspace/${encodeURIComponent(item.id)}/design`}>
                    <a className='h-10 px-4 flex flex-col  justify-center text-center    text-sm font-medium   bg-zinc-800 text-white '>
                        Edit Design
                    </a>
                </Link>
                <button className='h-10 px-4 text-sm text-center   text-zinc-500 font-medium border border-zinc-800 '>
                    ...
                </button>
            </div>
        </div>
    );
}
