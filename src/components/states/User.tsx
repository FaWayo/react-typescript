import React, { useState } from 'react';

type AuthUser = {
   
        name: string,
        email: string
    
};

const Auth = () => {
  //initial value type is different to the future value type
  // for type asertion, instead of null use {} as AuthUser and no user?
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: 'Fatima Wayo',
            email: 'fatimawayo@example.com'
        })
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogin}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User name is {user?.email}</div>
            
        </div>
    );
};

export default Auth;
