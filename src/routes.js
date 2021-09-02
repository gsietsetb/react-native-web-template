import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import C from 'consistencss';
import { observer } from 'mobx-react-lite';
import React, { useRef } from 'react';
import { Image } from 'react-native';
import { vImgs } from './design/vStyles';
import { Folio } from './screens/Folio';

import { Reminder } from './screens/Reminder';


const Stack = createStackNavigator();
export const signedIn = {
  VetLanding: {
    icon: vImgs.home,
    Comp: Folio,
    name: 'Veterinaries',
    title: 'Para profesionales',
  },
};

export const signedOut = {
  Splash: { icon: vImgs.profile, Comp: Reminder, name: 'Splash' },
};
export const headerNav = [
  signedIn.VetLanding,
  /*signedIn.Profile,*/
];

const linking = {
  prefixes: [
    /* your linking prefixes */
    ['https://planetmoji.com', 'https://www.planetmoji.com', 'planetmoji://'],
  ],
  config: {
    /* configuration for matching screens with paths */
    screens: {
      Home: 'Home',
      Chat: 'Chat',
      Reminder: 'Reminder',
      Profile: 'Perfil',
      NotFound: '*',
    },
  },
};

const screensMap = Object.values(signedIn).map(
  ({ name, icon, badge, Comp }, index) => (
    <Stack.Screen
      key={name}
      name={name}
      icon={icon}
      options={{
        title: name,
        tabBarIcon: ({ color, size }) => (
          <Image
            source={icon}
            name={name}
            style={[C.w6, C.h6, { tintColor: color }]}
          />
        ),
      }}
      component={Comp}
    />
  ),
);
export const WebNavigator = observer(() => {
  const navigationRef = useRef();
  const routeNameRef = useRef();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={signedIn.VetLanding.name}
        screenOptions={{ headerShown: false }}>
        {screensMap}
      </Stack.Navigator>
    </NavigationContainer>
  );
});
