import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
    return (
    <div className="app">
      <Sidebar />
      <div className='middle-container'>
        <Header />
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
          </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
