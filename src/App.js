import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <main className='main'>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news/" element={<News />} />
            <Route path="/users/" element={<UsersContainer />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
