import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductCart from './components/ProductCart';
import Footer from './components/Footer';
import ItemList from './components/ItemList';


function App() {

  return (
      
      <BrowserRouter>

        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/drink/:idCategory' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element= {<ProductCart/>}/>
          <Route path='/item' element={<ItemList/>}/>
        </Routes>
        <Footer/>

      </BrowserRouter>

      


  );
}

export default App;
