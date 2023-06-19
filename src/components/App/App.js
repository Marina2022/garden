import './App.scss';
import './normalize.scss';

import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import NotFound from "../pages/NotFound/NotFound";
import Categories from "../pages/Categories/Categories";
import Sale from "../pages/Sale/Sale";
import All from "../pages/All/All";
import Category from "../pages/Category/Category";


function Cart() {
  return null;
}

function App() {
  return (
    <div className="App">
        <Routes>
          <Route element={<Layout/>} path={'/'}>
            <Route element={<Home/>} path={''} />
            <Route element={<Sale/>} path={'/sale'} />
            <Route element={<All/>} path={'/all'} />
            <Route element={<Categories/>} path={'/categories'} />
            <Route element={<Category/>} path={'/categories/:id'} />
            <Route element={<Product/>} path={'/product/:id'} />
            <Route element={<Cart/>} path={'cart'} />
            <Route element={<NotFound/>} path={'*'}/>
          </Route>
        </Routes>
      </div>
      )
}

export default App;
