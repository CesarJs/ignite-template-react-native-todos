import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

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
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}
