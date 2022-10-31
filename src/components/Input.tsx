import React from 'react';

interface InputProps {
    value: string;
    //passing event as a prop
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ value, handleChange }) => {
    //designing the event within the prop
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
       console.log(event)
    }

    return (
        <input type='text' value={value} onChange={handleChange}/>
    );
};

export default Input;
