export default function ToggleDarkMode({ darkMode, toggleDarkMode }) {
    return (
      <button onClick={toggleDarkMode} className="mb-4 p-2 bg-blue-500 text-white rounded">
        {darkMode? 'Mode clair' : 'Mode sombre'}
      </button>
    );
  }
  