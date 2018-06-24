import React, { Component } from 'react';
import {
    StyleSheet,
    Text, 
    View,
    Dimensions,
    Image
} from 'react-native';
import HomePage from '../MainApp/home.js';
import ApplicationStyles from '../../Themes/ApplicationStyles.js';
import { customText } from '../../Themes/Fonts.js';
import images from '../../Themes/Images.js';
//import { module as userModule} from "../../store.js";
//import { connectStore } from 'redux-box';


const { height, width } = Dimensions.get("window");

// @connectStore({
// 	user: userModule, // receives user as a prop
// })
class UserDash extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Second Tab',
        headerLeft: (
        <Text>Test</Text>
    ),
        tabBarIcon: ({ focused }) => (
            <Image source={focused ? images.secondTabFocused : images.secondTabGray} />
        )
    });
    constructor(props) {
		super(props);
		this.state = {
			email: 'Email',
			password: 'Password'
		}
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>User Dashboard</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ...ApplicationStyles,
    ...customText,
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default UserDash;