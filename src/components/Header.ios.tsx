import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import { light, dark } from '../styles/themes';
interface HeaderProps {
  setDarkTheme: (darkTheme: boolean) => void;
	darkTheme: boolean;
}

export function Header({ setDarkTheme , darkTheme}: HeaderProps) {
  return (
    <SafeAreaView style={darkTheme ? styles.containerDark :styles.container}>
      <View style={darkTheme ? styles.headerDark :styles.header}>
				<TouchableOpacity
					onPress={() => setDarkTheme(oldState => !oldState)}
					style={darkTheme ? styles.buttonDark : styles.button}
				>
					<Text style={styles.textButton}> Tema </Text>
				</TouchableOpacity>
        <Text style={darkTheme ? styles.headerTextDark :styles.headerText}>to.</Text>
        <Text style={[darkTheme ? styles.headerTextDark :styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: light.background,
  },
  header: {
    paddingBottom: 44,
    backgroundColor: light.background,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: light.primary,
    fontFamily: 'Poppins-Regular',
  },
	containerDark: {
    backgroundColor: dark.background,
  },
  headerDark: {
    paddingBottom: 44,
    backgroundColor: dark.background,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerTextDark: {
    fontSize: 24,
    color: dark.primary,
    fontFamily: 'Poppins-Regular',
  },
	button:{
		position: 'absolute',
		right:5,
		top: 0,
		backgroundColor: dark.background,
		padding:1,
		borderRadius: 5
	},
	buttonDark:{
		position: 'absolute',
		right:5,
		top: 0,
		backgroundColor: light.background,
		padding:1,
		borderRadius: 5
	},
	textButton: {
		color: light.primary,
		fontFamily: 'Poppins-Regular',
	}
});
