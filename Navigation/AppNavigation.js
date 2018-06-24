import React, { Component } from 'react';
import { Image, Platform, TouchableOpacity, View } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom, HeaderBackButton } from 'react-navigation'
import styles from './Styles/NavigationStyles';
import images from '../Themes/Images';
import colors from '../Themes/Colors';
// Load pages in here
import LoginScreen from '../Screens/Auth/login.js';
import HomePage from '../Screens/MainApp/home.js';
import CreateAccount from '../Screens/Auth/createAccount.js';
import UserDash from '../Screens/MainApp/userDash.js';

// Navigation options shared between the Auth and Assessment stacks.
// Can't be shared with the AppStack, because the 'headerRight: <View />' hack
// will prevent the '+' icons in AppStack headers from showing.
const commonNavigationOptions = ({navigation}) => {
 return {
	headerTitleStyle: {
		flex: 1,
		textAlign: 'center',
		alignSelf: 'center',
		fontWeight: '200'
	},
  headerStyle: styles.commonHeaderStylesLight,
  //headerLeft: <HeaderBackIcon navigation={navigation} />,
  // This empty headerRight View is required to get the header text centered.
  // See: https://github.com/react-navigation/react-navigation/issues/544#issuecomment-298618209
  headerRight: <View />,
  headerTintColor: colors.white,
 }
};
 
// Eventually all four of the main screens that appear on the tabs should be
// their own stack, as only the dashboard is here, so that they can contain
// subscreens of their own.
const DashboardStack = StackNavigator({
  UserDash: { screen: HomePage },
}, {
	headerMode: 'none',
  initialRouteName: 'UserDash',
  navigationOptions: {
  headerStyle: styles.commonHeaderStyles
  }
})

const AuthStack = StackNavigator({
	Welcome: { screen: LoginScreen },
	CreateAccount: { screen: CreateAccount },
	// LostPasswordLogin & ForgotPassword seem to be duplicates?
	// One should be deleted. Not sure which one should be kept.
	// LostPasswordLogin: { screen: LostPasswordLogin }
}, {
 initialRouteName: 'Welcome', // Welcome
 navigationOptions: commonNavigationOptions
});
 
 
const AppTabNavigator = TabNavigator({
	UserDash: { screen: HomePage },
	SecondTab: { screen: UserDash }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  initialRouteName: 'UserDash',
  tabBarOptions: {
    style: styles.tabBar,
    activeTintColor: colors.brightSkyBlue,
    inactiveTintColor: colors.gray
	},
});
 
 
// The TabNavigator has to be wrapped in a StackNavigator with a single screen
// in order to have both tabs and headers be displayed.
// see: https://github.com/react-navigation/react-navigation/issues/741
const AppStack = StackNavigator({
	AppTab: {
	 screen: AppTabNavigator,
	 headerTintColor: colors.white,
	 navigationOptions: ({navigation}) => ({
		headerTitleStyle :{
		 textAlign: 'center',
		 alignSelf:'center',
		 fontWeight: '300'
		},
		 headerStyle: styles.commonHeaderStyles,
		//  headerLeft: <HeaderBackIcon navigation={navigation} />,
		 headerTintColor: colors.white,
		 headerTitleStyle: {
			flex: 1,
			textAlign: 'center',
			alignSelf: 'center',
			fontWeight: '200'
		 },
	 })
	}
 });
	
 const PrimaryNav = StackNavigator(
	 {
	 // Should probably make a splash screen to show, while waiting to see
	 // whether the user is already logged on, and redirect from there to either
	 // the AuthStack or the AppStack, depending.
		 // AuthLoading: {screen: AuthLoadingScreen},
		App: { screen: AppStack },
		Auth: { screen: AuthStack },
	 },{
		initialRouteName: 'Auth',
	 	headerMode: 'none'
	 },
 );
	
 export default PrimaryNav
