import React from 'react';


//object type
type PersonProps = {
    name: {
        first: string;
        last: string
    }
};

const Person: React.FC<PersonProps> = ({ name }) => {
    return (
        <div>
            {name.first}{name.last}
        </div>
    );
};

export default Person;
