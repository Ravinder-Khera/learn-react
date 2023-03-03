import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './common/header';
import Login from './components/login';
import Profile from './components/profile'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
