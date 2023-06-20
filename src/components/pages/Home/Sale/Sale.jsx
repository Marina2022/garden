import s from './Sale.module.scss';
import SectionTitle from "../../../sharedComponents/SectionTitle/SectionTitle";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getProducts, selectCategories, selectProducts} from "../../../../store/catalogSlice";
import ProductCard from "../../../sharedComponents/ProductCard/ProductCard";

const Sale = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const isLoading = useSelector(state => state.catalog.productsAreLoading)

  const products = useSelector(selectProducts)

  const productsToShow = products.filter((product)=>product.discont_price).slice(0, 3)
  if (isLoading) return <div className="container" style={{'marginTop': 100, 'marginBottom': 100}}>Loading...</div>
  return (
    <div className={s.sale}>
      <div className="container">
        <SectionTitle classname={s.title}>Sale</SectionTitle>
        <ul className={s.productsList}>
          {
            productsToShow.map((product)=><ProductCard {...product} key={product.id} />)
          }
        </ul>
      </div>
    </div>
  );
};

export default Sale;
