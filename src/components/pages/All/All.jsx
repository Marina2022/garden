import s from './All.module.scss';
import SectionTitle from "../../sharedComponents/SectionTitle/SectionTitle";
import Filters from "../../sharedComponents/Filters/Filters";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts, selectProducts} from "../../../store/catalogSlice";
import ProductCard from "../../sharedComponents/ProductCard/ProductCard";

const All = () => {

  const {withSale, sort, priceFrom, priceTo} = useSelector(state => state.filters)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const isLoading = useSelector(state => state.catalog.productsAreLoading)

  const products = useSelector(selectProducts)

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

  if (isLoading) return <div className="container" style={{'marginTop': 100, 'marginBottom': 100}}>Loading...</div>

  return (
    <div className={s.allProducts}>
      <div className="container">
        <SectionTitle classname={s.title}>
          All products
        </SectionTitle>
        <Filters/>
        <ul className={s.productsList}>
          {
            productsToShow.map((product)=><ProductCard {...product} key={product.id} />)
          }
        </ul>
      </div>
    </div>
  );
};

export default All;
