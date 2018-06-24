import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

import {
	Dimensions,
} from 'react-native';
// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const { height, width } = Dimensions.get('window');

const ApplicationStyles = {
	mainContainer: {
		flex: 1,
		//backgroundColor: Colors.dark
	},
	backgroundImage: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	},
	flex: {
		flex: 1
	},
	flexRow: {
		flex: 1,
		flexDirection: 'row'
	},
	headerIcon: {
		width: 15,
		height: 15,
		marginRight: 10,
	},
	darkOverlay: {
		//position: 'absolute',
		// resizeMode: 'cover',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: Colors.dark, //darkGreyBackground
	},
	splitFlexRow: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	flexColumn: {
		flex: 1,
		flexDirection: 'column'
	},
	splitFlexColumn: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	icon: {
		width: 16,
		height: 16,
	},
	container: {
		flex: 1,
		paddingTop: Metrics.baseMargin,
		backgroundColor: Colors.transparent
	},
	section: {
		margin: Metrics.section,
		padding: Metrics.baseMargin
	},
	sectionText: {
		...Fonts.style.normal,
		paddingVertical: Metrics.doubleBaseMargin,
		color: Colors.snow,
		marginVertical: Metrics.smallMargin,
		textAlign: 'center'
	},
	subtitle: {
		color: Colors.snow,
		padding: Metrics.smallMargin,
		marginBottom: Metrics.smallMargin,
		marginHorizontal: Metrics.smallMargin
	},
	titleText: {
		...Fonts.style.h2,
		fontSize: 14,
		color: Colors.text
	},
	input: {
		width: .75 * width,
		height: 44,
		paddingLeft: 20,
		marginTop: 20,
		borderRadius: 44.5,
		fontSize: 16,
		color: 'white',
		backgroundColor: Colors.textInput,
	},
	inputNarrow: {
		width: .3 * .75 * width,
		height: 44,
		marginTop: 20,
		borderRadius: 44.5,
		fontSize: 16,
		color: 'white',
		backgroundColor: Colors.textInput,
		textAlign: 'center'
	},
	nutritionTextInput: {
		backgroundColor: Colors.textInput,
		width: width * .85,
		height: 36,
		paddingLeft: 15,
		marginTop: 5,
		fontSize: 16,
		color: 'white',
		borderRadius: 17.5,
	},
	flatList: {
		padding: 5,
	},
	flatlistText: {
		color: 'white',
	},
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  // UI Elements
  inlineButton: {
	width: .40 * width,
	height: 40,
	margin: 4,
	marginTop: 10,
    borderRadius: 44.5,
    backgroundColor: "white",
    justifyContent: 'center',	  
  },
  inlineBtnText: {
	textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent',
    fontSize: 17,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#2d5d85"
  },
  button: {
    width: .75 * width,
    height: 44,
    marginTop: 5,
    borderRadius: 44.5,
    backgroundColor: "white",
	justifyContent: 'center',
	marginTop: 20
},
btnText: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent',
    fontSize: 17,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#2d5d85"
},
ghostBtnText: {
    color: 'white',
    fontSize: 16,
	fontWeight: "600",
	fontStyle: "normal",
	letterSpacing: 0,
	textAlign: "center",
},
ghostText: {
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: 'center',
    color: "#ffffff"
},
customFlatList: {
	borderWidth: 1,
	borderBottomColor: Colors.dark,
	borderTopColor: Colors.dark,
	minHeight: 60,
	justifyContent: 'center',
	alignContent: 'flex-start',
	width: width,
	backgroundColor: Colors.darkGreyBlue, 
},
flatListIcon: {
	height: 15.5,
	width: 8,
	alignContent: 'flex-end',
	paddingRight: 15,
	borderWidth: 1,
	borderColor: 'red',
},
workoutIcon: {
	height: 15,
	width: 15,
	alignContent: 'flex-start',
},
left50: {
	paddingLeft: 10,
	alignContent: 'flex-start',
	width: width * .48,
},
right50: {
	paddingRight: 10,
	alignItems: 'flex-end',
	width: width * .48,
},
workoutDropDown: {
	borderWidth: 1,
	borderColor: Colors.dark,
	backgroundColor: Colors.darkGreyBlue,
	flexDirection: 'row',
	flexWrap: 'wrap',
	width: width,
	height: 'auto',
	alignItems: 'center',
	minHeight: 55,
	paddingTop: 5,
},
stepsInfo: {
	flexDirection: 'row',
	backgroundColor: Colors.darkGreyBlue,
	flexWrap: 'wrap',
	paddingTop: 20,
	paddingBottom: 10,
	marginTop: -1,
	//display: 'none'
},
swipeEdit: {
	backgroundColor: '#5b6c83',
	justifyContent: 'center',
	alignContent: 'center',
	alignItems: 'center',
	height: 54,
},
swipeDelete: {
	backgroundColor: '#d0021b',
	justifyContent: 'center',
	alignContent: 'center',
	alignItems: 'center',
	height: 54,
},
swipeText: {
	fontSize: 10,
	fontWeight: "500",
	fontStyle: "normal",
	lineHeight: 16,
	letterSpacing: 0,
	textAlign: "center",
	color: Colors.white
},
ghostFlatList: {
	borderWidth: 1,
	minHeight: 52,
	width: width,
	borderBottomColor: Colors.darkGreyBlue,
	borderTopColor: Colors.darkGreyBlue,
	backgroundColor: 'transparent',
	justifyContent: 'space-around',
	alignContent: 'center',
	alignItems: 'center',

},
}

export default ApplicationStyles
