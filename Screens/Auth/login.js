import React, { Component } from 'react';
import {
    StyleSheet,
    Text, 
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
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
			email: 'Email',
			password: 'Password'
		}
    }
    
    toAppStack(){
        this.props.navigation.navigate('UserDash');
    }

    render(){
        return(
            <View style={styles.container}>
                <KeyboardAvoidingView behavior='postion' enabled style={styles.forgotPassword}>
                    <TextInput
                        placeholder={"Username"}
                        onChangeText={(email) => this.setState({email})}
                        style={styles.input}/>
                        <TextInput
                            placeholder={"Password"}
                            onChangeText={(password) => this.setState({password})}
                            secureTextEntry={true}
                            style={styles.input}/>
                        <TouchableOpacity style={styles.button} onPress={() => this.toAppStack()}>
                            <Text style={styles.btnText}>LOGIN</Text>
                        </TouchableOpacity>
                </KeyboardAvoidingView>
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