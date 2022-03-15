import { useEffect, useState } from 'react';

function useTailwindClass(data) {
    const [style, setStyle] = useState(' ');

    useEffect(() => {
        setStyle(arrayToClass(data).join(' '));
    }, [data]);

    const arrayToClass = data => {
        return Object.keys(data || []).map(val => data[val]);
    };

    return style;
}

export default useTailwindClass;
