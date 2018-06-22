import { Platform } from 'react-native'
import colors from '../Themes/Colors';

export const customText = {
	dashLabel: {
    fontSize: 12,
    paddingLeft: 10,
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.lightGrey,
	},
	dataFont: {
    fontSize: 18,
    color: 'white',
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    paddingLeft: 5,
	},
	dataLabel: {
    //fontFamily: "Barlow",
    fontSize: 10,
    marginBottom: 5,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: 0,
    color: colors.lightGrey,
		// paddingLeft: 5,
    // textAlign: 'left',
  },
  bigButton: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
  },
	sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    marginBottom: 5,
    lineHeight: 22,
    letterSpacing: 0,
    color: 'white',
    alignContent: 'flex-start',
	},
	genericText: {
    color: 'white',
    fontSize: 12,
    // textAlign: 'center',
    fontWeight: "300",
    fontStyle: "normal",
    letterSpacing: 0.4,
  },
  cancelText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0.4,
  },
  listText: {
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal',
    color: colors.white,
    letterSpacing: 0.43,
    textAlign: 'left',
  },
  text24: {
    fontSize: 24,
    color: colors.white,
    textAlign: 'center',
    fontStyle: 'normal',
    letterSpacing: 0,
  },
	text20: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '200',
    fontStyle: "normal",
    letterSpacing: 0.4,
    //fontFamily: 'BarlowBlack',
    color: '#fff'
  },
	text14: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '200',
    fontStyle: "normal",
    letterSpacing: 0.4,
    //fontFamily: 'BarlowBlack',
    color: '#fff'
  },
  text12: {
    textAlign: 'center',
    fontSize: 12,
    fontStyle: 'normal',
    color: '#96A5B9',
  },
}

const type = {
  base: (Platform.OS === 'ios' ? 'Avenir-Book' : 'sans-serif'),
  bold: (Platform.OS === 'ios' ? 'Avenir-Black' : 'sans-serif-condensed'),
  emphasis: (Platform.OS === 'ios' ? 'HelveticaNeue-Italic' : 'sans-serif')
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
}

if (Platform.OS !== 'ios') {
  style.h3.fontStyle = 'italic'
  style.h6.fontStyle = 'italic'
}

export default {
  type,
  size,
  style,
}
