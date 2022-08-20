
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlesPage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
function App() {
  return (

    <Router>
      <div className="App">

        <NavBar />

        <div id="page-body">
          <Routes >
            <Route path="/" element={<HomePage />} exact />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/ArticlesList" element={<ArticlesListPage />} />
            <Route path="/Article/:name" element={<ArticlesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

      </div>

    </Router>

  );
}

export default App;
