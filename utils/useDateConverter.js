import { useEffect, useState } from 'react';

const DATESTYLE = {
    date1: 'date1',
    date2: 'date2',
    date3: 'date3',
    date4: 'date4',
    date5: 'date5'
};

export default function useDateConverter({ date, type }) {
    const [value, setValue] = useState(date);

    let current = new Date(date);

    switch (type) {
        case DATESTYLE.date1:
            // setValue(current.getFullYear());
            break;

        default:
            break;
    }

    return current.toDateString();
}
