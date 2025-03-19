import { useState } from 'react';
import JoinCreateChat from './components/JoinCreateChat';

// Access environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const APP_NAME = import.meta.env.VITE_APP_NAME;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to {APP_NAME}</h1>
      {import.meta.env.MODE === 'development' && (
      <p>Backend API: {import.meta.env.VITE_API_BASE_URL}</p>
      )}
      <JoinCreateChat />
    </div>
  );
}

export default App;
