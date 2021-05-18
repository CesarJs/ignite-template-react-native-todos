import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

import { light, dark } from '../styles/themes';

function FlatListHeaderComponent({ darkTheme } : boolean) {
  return (
    <View>
      <Text style={darkTheme ? styles.headerDark : styles.header}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
		darkTheme: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress, darkTheme }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
						onPress={()=>onPress(item.id)}
						onLongPress={()=>onLongPress(item.id)}
						style={item.done ? (darkTheme ? styles.taskButtonDoneDark : styles.taskButtonDone) : (darkTheme ? styles.taskButtonDark : styles.taskButton)}
          >
            <View
              testID={`marker-${index}`}
							style={item.done ? (darkTheme ? styles.taskMarkerDoneDark : styles.taskMarkerDone) : (darkTheme ? styles.taskMarkerDark : styles.taskMarker)}
            />
            <Text
							style={item.done ? (darkTheme ? styles.taskTextDoneDark : styles.taskTextDone) : (darkTheme ? styles.taskTextDark : styles.taskText)}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent darkTheme={darkTheme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: light.taskHeaderColor,
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: light.taskBorderColor,
    marginRight: 10
  },
  taskText: {
    color: light.taskTextColor,
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: light.taskButtonDone,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: light.background,
    marginRight: 10
  },
  taskTextDone: {
    color: light.taskTextDone,
    textDecorationLine: 'line-through'
  },
	 header: {
    color: light.taskTextColor,
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: light.taskBorderColor,
    marginRight: 10
  },
  taskText: {
    color: light.taskTextColor,
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: light.taskButtonDone,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: light.background,
    marginRight: 10
  },
  taskTextDone: {
    color: light.taskTextDone,
    textDecorationLine: 'line-through'
  },

	headerDark: {
    color: dark.taskHeaderColor,
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  taskButtonDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: dark.taskBorderColor,
    marginRight: 10
  },
  taskTextDark: {
    color: dark.taskTextColor,
  },
  taskButtonDoneDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: dark.taskButtonDone,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDoneDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: dark.backgroundTaksMark,
    marginRight: 10
  },
  taskTextDoneDark: {
    color: dark.taskTextDone,
    textDecorationLine: 'line-through'
  },
	 headerDark: {
    color: dark.taskTextColor,
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  taskButtonDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: dark.taskBorderColor,
    marginRight: 10
  },
  taskTextDark: {
    color: dark.taskTextColor,
  },
  taskButtonDoneDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: dark.taskButtonDone,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDoneDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: dark.backgroundTaksMark,
    marginRight: 10
  },
  taskTextDoneDark: {
    color: dark.taskTextDone,
    textDecorationLine: 'line-through'
  }
})
