import React from 'react';



//component with another component as a child prop
type OscarProps = {
    children: React.ReactNode
}

const Oscar = (props: OscarProps) => {
    return (
        <div>
           {props.children}
        </div>
    );
};

export default Oscar;
