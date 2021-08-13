import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthContext from './src/Context/AuthContext'
import AppNavigator from './src/Navigation/AppNavigator';
import AuthNavigator from './src/Navigation/AuthNavigator';


export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await Storage.getData();
    if (user) setUser(user);
  };
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
