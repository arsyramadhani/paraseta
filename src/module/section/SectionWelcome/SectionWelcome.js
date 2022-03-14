import classNames from 'classnames';
import { useEffect, useState } from 'react';
import useTailwindClass from '../../../../utils/useTailwindClass';

export default function SectionWelcome({ data }) {
    const style = useTailwindClass(data.properties.style);
    console.log(style);
    return <div className={style}>xxasdadsd</div>;
}
