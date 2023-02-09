import React, { useEffect } from 'react';
 import {StatusBar} from 'react-native';
 import { Provider } from 'react-redux';
 import NavigationStack from './app/navigation/'
//  import store from './app/store';
 import SplashScreen from "react-native-splash-screen";
 
 const App = () => {
  // SQLite.enablePromise(true);
   useEffect(() => {
     SplashScreen.hide(); //hides the splash screen on app load.
   }, []);
   return (
     < >
       <StatusBar translucent={false} barStyle={'light-content'} />
       <NavigationStack/>
     </>
   );
 };
 
 export default App;
 
