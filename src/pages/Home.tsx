import React, { useState } from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

import { light, dark } from '../styles/themes';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
	const [darkTheme, setDarkTheme] = useState(false);
  function handleAddTask(newTaskTitle: string) {
		if(newTaskTitle === ''){
			return false;
		}
		let newTask:Task= {
			id: new Date().getTime(),
			title: newTaskTitle,
			done: false
		}
		setTasks(oldState => [...oldState, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(oldState => oldState.map((task) => {
			let taskTemp = {...task};
			if(task.id === id){
				taskTemp.done = !taskTemp.done;
			}
			return taskTemp;
		}));
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState =>
				oldState.filter(task => task.id !== id)
			);
  }

  return (
    <View style={{
			backgroundColor: darkTheme ? dark.background_secondary : light.background_secondary,
			flex: 1
		}}>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>

      <TodoInput addTask={handleAddTask} darkTheme={darkTheme} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
				darkTheme={darkTheme}
      />
    </View>
  )
}
