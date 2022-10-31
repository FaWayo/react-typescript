import React from 'react';


//advanced props
type StatusProps = {
    status: 'loading' | 'error' | 'success';
};

const Status: React.FC<StatusProps> = ({status}) => {
    let message 
    if (status === 'loading') {
        message = 'Loading...'
    } else if (status === 'success') {
        message = 'Data fetched successfully'
    } else if (status === 'error') {
        message = 'Error fetching data'
    }
    return (
        <div>
            <h2>Status = {message} </h2>
        </div>
            
    );
};

export default Status;
