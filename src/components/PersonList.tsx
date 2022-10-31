import React from 'react';


// array type
type PersonProps = {
    names: {
        first: string;
        last: string
    }[]
};

export const PersonList: React.FC<PersonProps> = ({ names }) => {
    return (
        <div>
            {names.map((name) => {
                return (
                    <h2 key={name.first}>
                        {name.first} {name.last}
                    </h2>
                )
            })
            }
        </div>
    );
};


