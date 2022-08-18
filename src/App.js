
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlesPage from './pages/ArticlePage';
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
            <Route path="/ArticlesList" element={<ArticlesList />} />
            <Route path="/Article" element={<ArticlesPage />} />
          </Routes>
        </div>

      </div>

    </Router>

  );
}

export default App;
