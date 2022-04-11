import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/NavBar';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartContextProvider } from './components/CartContext/CartContext';


function App() {
  return (
    <CartContextProvider>  
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/items/:id" element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;