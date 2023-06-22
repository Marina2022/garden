import s from './ProductCard.module.scss';
import {BASE_URL} from "../../../consts";
import {Link} from "react-router-dom";

const ProductCard = ({title, price, discont_price, image, id}) => {
  const discount = Math.trunc((price - discont_price) / price * 100)
  return (
    <li className={s.listItem}>
      <div className={s.productCard}>
        <img className={s.image} src={BASE_URL + image} alt="product"/>
        <div className={s.priceWrapper}>
          <div className={s.actualPrice}> {discont_price ? discont_price : price}<span className={s.dollar}>$</span>
          </div>
          {discont_price && <div className={s.oldPrice}>{price}$</div>}
          {discont_price &&  <div className={s.discount}>-{discount}%</div>}
        </div>
        <Link to={`/product/${id}`} className={s.link}><h3 className={s.title}>{title}</h3></Link>
      </div>
    </li>
  );
};

export default ProductCard;
