import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import { light, dark } from '../styles/themes';

interface HeaderProps {
  setDarkTheme: (darkTheme: boolean) => void;
	darkTheme: boolean;
}

export function Header({ setDarkTheme , darkTheme}: HeaderProps) {
  return (
    <View style={darhTheme ? styles.headerDark : styles.header}>
      <Text style={darhTheme ? styles.headerTextDark : styles.headerText}>to.</Text>
      <Text style={[darhTheme ? styles.headerTextDark : styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: light.background,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
	headerDark: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: dark.backgorund,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerTextDark: {
    fontSize: 24,
    color: light.primary,
    fontFamily: 'Poppins-Regular',
  },
});
