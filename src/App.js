import './App.css';
import AddUser from './pages/AddUser/AddUser';
import EditUser from './pages/EditUser/EditUser';
import UserList from './pages/User/UserList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <h1 className='title'>CRUD Redux</h1>
      <Routes>
        <Route path='/' element={<UserList />}/>
        <Route path='/add-user' element={<AddUser />}/>
        <Route path='/edit-user/:id' element={<EditUser />}/>
      </Routes>
    </div>
  );
}

export default App;
