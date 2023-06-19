import s from './Catalog.module.scss';
import SectionTitle from "../../../sharedComponents/SectionTitle/SectionTitle";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, selectCategories} from "../../../store/catalogSlice";
import CategoryCard from "../../../sharedComponents/CategoryCard/CategoryCard";
import {Link} from "react-router-dom";


const Catalog = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const cats = useSelector(selectCategories)
  const catsToShow = cats.slice(0, 4)
  return (
    <div className={s.catalog}>
      <div className="container">
        <Link to='/categories' className={s.allCatsLink}>All categories</Link>

        <SectionTitle classname={s.title}>Catalog</SectionTitle>
        <ul className={s.catList}>
          {
            catsToShow.map((cat) => {
              return (
                <li key={cat.id}>
                  <CategoryCard title={cat.title} image={cat.image} id={cat.id}/>
                </li>
              )
            })
          }
        </ul>


      </div>
    </div>
  );
};

export default Catalog;
