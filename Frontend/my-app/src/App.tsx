import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookDemo from './pages/BookDemo';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/book-demo" element={<BookDemo />} />
    </Routes>
  )
}

export default App
