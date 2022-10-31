import React from 'react';
import {Name} from './Person.types'

// array type
type PersonProps = {
    //reusing types
    names: Name[]
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


