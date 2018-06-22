import React, { Component } from 'react';
import {
    StyleSheet,
    Text, 
    View,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';
import HomePage from '../MainApp/home.js';
import ApplicationStyles from '../../Themes/ApplicationStyles.js';
import { customText } from '../../Themes/Fonts.js';
import colors from '../../Themes/Colors'
//import { module as userModule} from "../../store.js";
//import { connectStore } from 'redux-box';


const { height, width } = Dimensions.get("window");

// @connectStore({
// 	user: userModule, // receives user as a prop
// })
class LoginScreen extends Component {
    static navigationOptions = {
		title: 'Log In',
		};
    constructor(props) {
		super(props);
		this.state = {
			username: 'Email',
			password: 'Password'
		}
    }
    
    toAppStack(){
        this.props.navigation.navigate('UserDash');
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Login Screen</Text>
                <View style={styles.forgotPassword}>
                <TextInput
                    placeholder={"Username"}
                    value={this.state.username}/>
					<TouchableOpacity onPress={() => this.toAppStack()}>
						<Text>FORGOT PASSWORD?</Text>
					</TouchableOpacity>
				</View>
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
        backgroundColor: colors.slate
    }
})

export default LoginScreen;