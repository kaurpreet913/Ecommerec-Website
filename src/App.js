
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './pages/Contactus';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ItemDetails from './components/Item/ItemDetails';
import Items from './components/Items/Items';
import ShowCart from './pages/ShowCart';
import ConfirmOrder from './components/ConfirmOrder/ConfirmOrder';
import MyOrder from './pages/MyOrder';
import ChangePassword from './pages/ChangePassword';
import Search from './pages/Search';


function App() {
  
  return (
    <div>
      <BrowserRouter>
       <Navbar/>   
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='Contactus' element={<Contact />} />
         <Route path='About' element={<About />} />
         <Route path='Signup' element={<Signup />} />
         <Route path='Login' element={<Login />} />
         <Route path='changepassword' element={<ChangePassword />} />
         <Route path='Items' element={<Items />} />
         <Route path='items/:id' element={<ItemDetails />} />
         <Route path='cart' element={<ShowCart />} />
         <Route path='confirm-order' element={<ConfirmOrder />} />
         <Route path='my-order' element={<MyOrder />} />
         <Route path='search' element={<Search />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
