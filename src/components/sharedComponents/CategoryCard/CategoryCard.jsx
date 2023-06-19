import s from './CategoryCard.module.scss';
import {BASE_URL} from "../../../consts";
import {Link} from "react-router-dom";

const CategoryCard = ({id, title, image}) => {

  return (
    <div className={s.card}>
      <img className={s.image} src={BASE_URL + image} alt="category"/>
      <Link to={`/category/${id}`} className={s.link}><h3 className={s.title}>{title}</h3></Link>
    </div>
  );
};

export default CategoryCard;
