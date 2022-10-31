import React from 'react';
import { isPropertySignature } from 'typescript';

type GreetProps = {
    name: string;
    //optional props
    messageCount?: number;
    isLoggedIn: boolean;
};


                                          //message count is optional with a default value
const Greet: React.FC<GreetProps> = ({name, messageCount=0, isLoggedIn}) => {

    
    return (
        <div>
            <h2>
              { isLoggedIn ?
               `Welcome ${name}! You have ${messageCount} new messages!`
            : 'Welcome Guest!'}
            </h2>
        </div>
    );
};

export default Greet;
