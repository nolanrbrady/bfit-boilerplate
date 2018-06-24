import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image,
				 TouchableOpacity } from 'react-native'
import images from '../Themes/Images';

export default HeaderBackIcon = ({navigation}) => {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
	return (
		<TouchableOpacity style={styles.container}
			onPress={() => navigation.goBack(null)}>
			<Image source={images.chevronLeft} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
  container: {
		marginLeft: 15
  }
})
