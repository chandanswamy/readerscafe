import {Routes, Route} from 'react-router-dom' 

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Profile from './components/Profile';

import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import Book from './components/Book';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={ <SignUp /> } />        
        <Route exact path='/' element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path={`/dashboard`} element={<Dashboard />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path="/volumes/:id" element={ <Book /> } />
        </Route>        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
