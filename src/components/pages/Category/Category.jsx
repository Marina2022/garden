import s from './Category.module.scss';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {APIRoutes, BASE_URL} from "../../../consts";
import ProductCard from "../../sharedComponents/ProductCard/ProductCard";
import SectionTitle from "../../sharedComponents/SectionTitle/SectionTitle";
import Filters from "../../sharedComponents/Filters/Filters";
import {useSelector} from "react-redux";

const Category = () => {

  const {id} = useParams()
  const [products, setProducts] = useState(null);
  const [title, setTitle] = useState('');
  const {withSale, sort, priceFrom, priceTo} = useSelector(state => state.filters)

  useEffect(() => {
    const getProductByCat = async (id) => {
      const data = await axios(BASE_URL + APIRoutes.category + id)
      setTitle(data.data.category.title)
      setProducts(data.data.data)
    }
    getProductByCat(id)
    window.scrollTo(0, 0);
  }, [])

  let productsToShow = products
  if (withSale) productsToShow = productsToShow.filter((product) => product.discont_price)
  if (priceFrom) productsToShow = productsToShow.filter((product) => product.price >= priceFrom)
  if (priceTo) productsToShow = productsToShow.filter((product) => product.price <= priceTo)

  if (productsToShow) {
    switch (sort) {
      case 0:
        productsToShow = [...productsToShow].sort((a, b) => {
          if (a.discont_price) {
            if (b.discont_price) {
              return a.discont_price / a.price - b.discont_price / b.price
            } else return -1
          }
        })
        break
      case 1:
        productsToShow = productsToShow.slice().sort((a, b) => a.price - b.price)
        break
      case 2:
        productsToShow = productsToShow.slice().sort((a, b) => b.price - a.price)
        break
      default:
        productsToShow = productsToShow.slice().sort((a, b) => a.price - b.price)
    }
  }

  if (!products) return <div className="container">Loading...</div>

  return (
    <div className={s.category}>
      <div className="container">
        <SectionTitle classname={s.title}>
          {title}
        </SectionTitle>
        <Filters/>
        <ul className={s.productsList}>
          {
            productsToShow.map((product) => <ProductCard {...product} key={product.id}/>)
          }
        </ul>
      </div>
    </div>
  );
};

export default Category;
