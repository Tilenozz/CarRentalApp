import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

// screens
import {Dashboard} from '../screens/dashboard';
import {DrawerScreen} from '../screens/drawer';
import {Myrides} from '../screens/rides';
import {SettingScreen} from '../screens/settings';

export class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator
        openByDefault={false}
        drawerContent={(props) => <DrawerScreen {...props} />}>
        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        <Drawer.Screen name="Myrides" component={Myrides} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
      </Drawer.Navigator>
    );
  }
}
