import { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import ToggleDarkMode from '../components/ToggleDarkMode';
import useLocalStorage from '../hooks/useLocalStorage';
import fetchCountries from '../utils/fetchCountries';

export default function Home() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const [countries, setCountries] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false); 

  useEffect(() => {
    fetchCountries().then(setCountries);
    setIsHydrated(true); 
  }, []);

  const handleAddTask = (task) => setTasks([...tasks, task]);
  const handleDeleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-800 min-h-screen p-4 text-gray-800 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center mb-4">Liste des tâches</h1>
        {isHydrated && (
          <ToggleDarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        )}
        <TaskForm onAddTask={handleAddTask} countries={countries} />
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}