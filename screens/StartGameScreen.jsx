import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const StartGameScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start A New Game</Text>
			<View style={styles.inputContainer}>
				<Text>Select A Number</Text>
				<TextInput />
				<View style={styles.buttonContainer}>
					<Button title='RESET' onPress={() => {}} />
					<Button title='CONFIRM' onPress={() => {}} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	title: {
		fontSize: 20,
		marginVertical: 10
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
		// Shadow Properties Only Work On IOS
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		// Shadow Properties Only Work On IOS
		elevation: 8,
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15
	}
});

export default StartGameScreen;
