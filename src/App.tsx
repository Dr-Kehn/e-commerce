// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add other routes like /cart, /product/:id, etc. */}
    </Routes>
  );
}

export default App;
