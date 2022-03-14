const styleToText = data => {
    return Object.keys(data || [])
        .map(val => data[val])
        .join(' ');
};

export default styleToText;
