import s from './Product.module.scss';
import {useEffect, useState} from "react";
import axios from "axios";
import {APIRoutes, BASE_URL} from "../../../consts";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addProduct} from "../../../store/cartSlice";

const Product = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductById = async (id) => {
      const data = await axios(BASE_URL + APIRoutes.product + id)
      setProduct(data.data[0])
    }
    getProductById(id)
    window.scrollTo(0, 0);
  }, [])

  const dispatch = useDispatch()

  const onBtnClick = () => {
    dispatch(addProduct(product))
  }

  if (!product) return <div className="container">Loading...</div>

  const discount = Math.trunc((product.price - product.discont_price) / product.price * 100)
  return (
    <div className={s.product}>
      <div className="container">
        <h1 className={s.title}>
          {product.title}
        </h1>
        <div className={s.wrapper}>
          <img className={s.img} src={BASE_URL + product.image} alt="product"/>
          <div className={s.description}>
            <div className={s.priceWrapper}>
              <div className={s.actualPrice}> {product.discont_price ? product.discont_price : product.price}<span
                className={s.dollar}>$</span>
              </div>
              {product.discont_price && <div className={s.oldPrice}>{product.price}$</div>}
              {product.discont_price && <div className={s.discount}>-{discount}%</div>}
            </div>
            <button onClick={onBtnClick} className={s.cartBtn}>
              To cart
            </button>
            <div className={s.line}></div>
            <div className={s.desc}>
              <h2 className={s.subtitle}>Description</h2>
              <p className={s.text}>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
