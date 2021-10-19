import { useState } from 'react';

export default function  (){
    const [value, setValue] = useState('');

    return {
        value,
        onChange: event => {
            setValue(event.target.value);
        },
        reset: () => setValue('')
    };
};