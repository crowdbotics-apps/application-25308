import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen49219778Navigator from '../features/BlankScreen49219778/navigator';
import Maps219103Navigator from '../features/Maps219103/navigator';
import Additem219102Navigator from '../features/Additem219102/navigator';
import Maps219098Navigator from '../features/Maps219098/navigator';
import UserProfile219094Navigator from '../features/UserProfile219094/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
BlankScreen49219778: { screen: BlankScreen49219778Navigator },
Maps219103: { screen: Maps219103Navigator },
Additem219102: { screen: Additem219102Navigator },
Maps219098: { screen: Maps219098Navigator },
UserProfile219094: { screen: UserProfile219094Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
