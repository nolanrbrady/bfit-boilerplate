import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'
import { Platform } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.darkGreyBackground
  },
	tabBar: {
		backgroundColor: Colors.darkGreyBackground
	},
	commonHeaderStylesLight: {
		// Lighter header background color for Assessement.
		backgroundColor: Colors.headerDarkGreyBlue,
		borderColor: Colors.slate,
		borderBottomWidth: 1,
		// Prevents the transparent status bar on android from
		// overlapping the header.
		...Platform.OS === 'android'
			? { paddingTop: Expo.Constants.statusBarHeight }
		: {},
	},
	commonHeaderStyles: {
		backgroundColor: Colors.darkGreyBackground,
		borderColor: Colors.slate,
		borderBottomWidth: 1,
		// Prevents the transparent status bar on android from
		// overlapping the header.
		...Platform.OS === 'android'
			? { paddingTop: Expo.Constants.statusBarHeight }
		: {},
	},
})
