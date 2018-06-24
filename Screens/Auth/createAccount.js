import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { module as userModule} from '../../Store/user.js';
import { connectStore } from 'redux-box';

@connectStore({
	user: userModule, // receives user as a prop
})
class CreateAccount extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Create Account Page</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    }
})

export default CreateAccount