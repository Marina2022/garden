import s from './SortList.module.scss';
import {setSort} from "../../../../store/filterSlice";
import {useDispatch} from "react-redux";

const sortTypes = ['By discount', 'Cheap first', 'Expensive first']

const SortList = ({isSortListShown, setIsSortListShown, setSortInputValue}) => {

  const dispatch = useDispatch()

  const onSortClick =(index) => {
    setIsSortListShown(false)
    setSortInputValue(sortTypes[index])
    dispatch(setSort(index))
  }

  return (
    isSortListShown && <div className={s.sortList}>
      <ul>
        {
          sortTypes.map((sortType, index)=>{
            return (
              <li key={index} onClick={()=>onSortClick(index)} className={s.sortItem}><span>{sortType}</span></li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default SortList;
