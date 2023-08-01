import './App.css';

//importamos componentes
import CompShowBlogs from './blog/ShowBlog.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowBlogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
