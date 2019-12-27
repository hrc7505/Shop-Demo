import React from 'react';
import { View, StatusBar } from "react-native";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import Shop from '../views/Shop';
import colors from '../configs/colors';
import NavBottom from '../components/common/NavBottom';
import UnderConstruction from '../components/common/UnderConstruction';

const CouponStack = createStackNavigator({
  Coupons: Shop,
  UnderConstruction: UnderConstruction,
}, { headerMode: "none" });

CouponStack.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index > 0 ? false : true,
});

const TabBar = createBottomTabNavigator({
  Favourite: UnderConstruction,
  Featured: UnderConstruction,
  Coupons: CouponStack,
  Categories: UnderConstruction,
  More: UnderConstruction,
},
  {
    initialRouteName: 'Coupons',
    headerMode: 'none',
    tabBarComponent: NavBottom,
    safeAreaInset: { bottom: 'always' },
    resetOnBlur: true,
  });

const RootNavigator = createAppContainer(
  createSwitchNavigator(
    {
      TabBar: TabBar,
    },
    {
      initialRouteName: 'TabBar',
      defaultNavigationOptions: { header: null },
    },
  ),
);

const AppNavigator = () => (
  <View style={{ flex: 1 }}>
    <StatusBar backgroundColor={colors.themeColor} barStyle="light-content" />
    <RootNavigator />
  </View>
);

export default AppNavigator;