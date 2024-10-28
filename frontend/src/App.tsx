import Navbar from './layouts/Navbar';
import { Routes, Route } from 'react-router-dom';
import ArticleDetail from './pages/ArticleDetail';
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // Or a proper loading component
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/topics" element={<TopicsPage />} />
      </Routes>
    </div>
  );
}

export default App;
