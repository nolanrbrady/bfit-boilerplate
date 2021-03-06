import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import images from '../../Themes/Images.js';
import { module as userModule} from '../../Store/user.js';
import { connectStore } from 'redux-box';

@connectStore({
	user: userModule, // receives user as a prop
})
class HomePage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'User Dash',
        tabBarIcon: ({ focused }) => (
            <Image source={focused ? images.dashBlue : images.dashGray} />
        )
    });
    constructor(props){
        super(props);
        this.state = {
            placeholder: '',
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Home Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomePage;