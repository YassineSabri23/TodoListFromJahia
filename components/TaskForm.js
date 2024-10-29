import { useState } from 'react';

export default function TaskForm({ onAddTask, countries }) {
  const [newTask, setNewTask] = useState({ user: '', country: '', description: '' });

  const handleAddTask = () => {
    if (!newTask.description || newTask.description.length > 120) {
      alert('La description est obligatoire et doit être inférieure à 120 caractères.');
      return;
    }
    onAddTask(newTask);
    setNewTask({ user: '', country: '', description: '' });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Utilisateur assigné"
        value={newTask.user}
        onChange={(e) => setNewTask({ ...newTask, user: e.target.value })}
        className="p-2 border border-gray-300 rounded w-full mb-2"
      />
      <select
        value={newTask.country}
        onChange={(e) => setNewTask({ ...newTask, country: e.target.value })}
        className="p-2 border border-gray-300 rounded w-full mb-2"
      >
        <option value="">Sélectionner un pays</option>
        {countries.map((country, idx) => (
          <option key={idx} value={country}>
            {country}
          </option>
        ))}
      </select>
      <textarea
        placeholder="Description (max 120 caractères)"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        maxLength={120}
        className="p-2 border border-gray-300 rounded w-full mb-2"
      />
      <button onClick={handleAddTask} className="bg-green-500 text-white p-2 rounded w-full">
        Ajouter une tâche
      </button>
    </div>
  );
}
