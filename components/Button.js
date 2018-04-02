import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView, Label } from 'react-native';

const Button = ({label, disabled, onPress}) => (
	<TouchableHighlight style={[buttonStyles.button, (disabled ? buttonStyles.disabled : null), (label==="Reset" ? buttonStyles.buttonslarge : null)]} disabled={disabled} onPress={onPress}>
		<Text style={buttonStyles.buttonLabel}>{label}</Text>
	</TouchableHighlight> 
);

const buttonStyles = StyleSheet.create({
	button: {
		width: 50,
		height: 50,
	    backgroundColor: 'hsl(294, 39%, 30%)',
	    borderRadius: 5,
	    alignItems: 'center',
	    justifyContent: 'center',
	    marginHorizontal: 30,
	    marginTop: 5
	},
	disabled: {
		backgroundColor: 'grey',
	},
	buttonLabel: {
    color: 'white',
    fontSize: 30,
	},
	buttonslarge: {
	width: 100,
	}
});

export default Button;