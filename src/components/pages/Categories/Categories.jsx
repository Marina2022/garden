import s from './Categories.module.scss';
import SectionTitle from "../../sharedComponents/SectionTitle/SectionTitle";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCategories, selectCategories} from "../../../store/catalogSlice";
import CategoryCard from "../../sharedComponents/CategoryCard/CategoryCard";


const Categories = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const isLoading = useSelector(state => state.catalog.categoriesAreLoading)

  const categories = useSelector(selectCategories)

  if (isLoading) return <div className="container" style={{'marginTop': 100, 'marginBottom': 100}}>Loading...</div>
  return (
    <div className={s.cats}>
      <div className="container">
        <SectionTitle classname={s.title}>Categories</SectionTitle>

        <ul className={s.catList}>
          {
            categories.map((cat) => {
              return (
                <li className={s.item} key={cat.id}>
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

export default Categories;
