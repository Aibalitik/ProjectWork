import { useState } from 'react';

export default function useFormFieldsState (){
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');


    return {
        value,
        onChangeValue: event => {
            setValue(event.target.value);
        },
        date,
        onChangeDate: event => {
            setDate(event);
        },
        reset: () => {
            setValue('')
            setDate(null);
        },
    };
};
