import React from 'react';

type ButtonProps = {

    //function with parameters
   handleClick : (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button: React.FC<ButtonProps> = ({ handleClick}) => {
    return (
        <button onClick={(event) => handleClick(event, 1)}>
            Click
        </button>
    );
};

export default Button;
