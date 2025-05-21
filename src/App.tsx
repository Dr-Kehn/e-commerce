// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    <TopNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      {/* Add other routes like /cart, /product/:id, etc. */}
    </Routes>
    </>
  );
}

export default App;
