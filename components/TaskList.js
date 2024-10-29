export default function TaskList({ tasks, onDeleteTask }) {
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 p-2 border border-gray-300 rounded flex justify-between items-center">
            <div>
              <p><strong>Utilisateur:</strong> {task.user}</p>
              <p><strong>Pays:</strong> {task.country}</p>
              <p><strong>Description:</strong> {task.description}</p>
            </div>
            <button
              onClick={() => onDeleteTask(index)}
              className="text-red-500 hover:text-red-700"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    );
  }
  