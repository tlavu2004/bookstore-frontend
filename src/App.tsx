import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'; // Kiểm tra lại nếu bạn cần import thêm `tailwind.css`

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-center space-x-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo h-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8">Vite + React</h1>
      <div className="card bg-white p-6 rounded-lg shadow-lg text-center">
        <button 
          onClick={() => setCount((count) => count + 1)} 
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-700">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center text-blue-500 mt-6">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
