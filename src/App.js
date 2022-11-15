import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import News from './components/News/News';

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar state={props.state.sidebar} />
        <main className='main'>
          <Routes>
            <Route path="/profile" element={<Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />} />
            <Route path="/news/" element={<News />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
