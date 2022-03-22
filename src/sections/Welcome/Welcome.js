import Image from 'next/image';
import React from 'react';

const Welcome = ({ data, children }) => {
    // console.log(data);
    return (
        <>
            {data.properties.imgUrl && (
                <Image
                    className={'z-0 ' + data.properties.imgFilter}
                    src={data.properties.imgUrl}
                    objectFit='cover'
                    priority
                    layout={'fill'}
                />
            )}
            {children}
        </>
    );
};

export default Welcome;
