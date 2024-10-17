import Navbar from './layouts/Navbar';
import { Routes, Route } from 'react-router-dom';
import ArticleDetail from './pages/ArticleDetail';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
