import { Fragment } from 'react';
import './App.css';
import MainPage from './pages/mainPages/MainPage';
import {Route, Routes} from "react-router-dom"
import Home from './pages/home/Home';
import CreateCases from './components/createCases/CreateCases';
import PageNotFound from './pages/pageNotFound/PageNotFound';
// import { useSelector } from 'react-redux';

function App() {
  // const {isLogoin} = useSelector((state)=> state.userSlice)
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        {/* <Route path={isLogoin ? "/home" : "/"} element={<Home/>}/> */}
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/:id' element={<CreateCases/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      
    </Fragment>
  );
}

export default App;

