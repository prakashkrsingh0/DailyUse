import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './NavigationService';
import {PortalProvider} from '@gorhom/portal';
import BottomTab from './BottomNavigation';

const FinalStack = createNativeStackNavigator();

const NavigationStack: React.FC = () => {
  return (
    <PortalProvider>
      <NavigationContainer ref={navigationRef}>
        <FinalStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <FinalStack.Screen name="BottomTab" component={BottomTab} />
        </FinalStack.Navigator>
      </NavigationContainer>
    </PortalProvider>
  );
};

export default NavigationStack;
