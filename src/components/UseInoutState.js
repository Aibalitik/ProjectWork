import { useState } from 'react';

export default function State (){
    const [value, setValue] = useState('');

    return {
        value,
        onChange: event => {
            setValue(event.target.value);
        },
        reset: () => setValue('')
    };
};