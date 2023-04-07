import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/screens/Login/Login';
import Signup from './src/screens/Signup/Signup';
import Home from './src/screens/Home/Home';
import Cart from './src/screens/Cart/Cart';
import ProductDetails from './src/screens/ProductDetails/ProductDetails';
import { HomeIcon, CartIcon } from './src/assets/icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const ProductStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home"
      component={Home}
      options={{
        headerShown: false,
        title: 'Home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}

    />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{
        title: 'Details',
        headerTitleStyle: {
          fontWeight: 'semibold',
          fontSize: 26
        },
      }}
    />
  </Stack.Navigator>
);

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFA800',
        tabBarInactiveTintColor: '#C7C5CD',
      }}>
      <Tab.Screen name="ProductStack"
        component={ProductStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <CartIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
