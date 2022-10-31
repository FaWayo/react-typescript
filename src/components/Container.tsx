import React from 'react';

type ContainerProps = {
    styles: React.CSSProperties;
};

const Container: React.FC<ContainerProps> = ({ styles}) => {
    return (
        <div style={styles}> 
            Text content goes here
        </div>
    );
};

export default Container;




//tips related to props and types 
//1. destructure props when defining the components
//2. exporting types. large components with multiple types. export types from another folder and import them where necessary
//3. reusing types