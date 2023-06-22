import s from './Filters.module.scss';
import {useRef, useState} from "react";
import SortList from "./SortList/SortList";
import {useDispatch, useSelector} from "react-redux";
import {setPriceFrom, setPriceTo, setWithSale, setSort} from "../../../store/filterSlice";
import {useLocation} from "react-router-dom";

const Filters = () => {

  const [isSortListShown, setIsSortListShown] = useState(false)
  const [sortInputValue, setSortInputValue] = useState('')

  const dispatch = useDispatch()

  const {withSale, sort, priceFrom, priceTo} = useSelector(state => state.filters)

  const {pathname} = useLocation()

  const onCheck = (e) => {
    if (e.target.checked) {
      dispatch(setWithSale(true))
    } else {
      dispatch(setWithSale(false))
    }
  }

  const onFromChange = (e) => {
    dispatch(setPriceFrom(e.target.value.replace(/\D/, '')))
  }

  const onToChange = (e) => {
    dispatch(setPriceTo(e.target.value.replace(/\D/, '')))
  }

  const sortDivRef = useRef(null)

  const onSortWrapperClick = () => {
    setIsSortListShown(prev => !prev)

    const onDocClick = (e) => {
      const insideModal = sortDivRef.current && e.composedPath().includes(sortDivRef.current)
      if (!insideModal) {
        setIsSortListShown(false)
        document.removeEventListener('click', onDocClick)
      }
    }
    document.addEventListener('click', onDocClick)
  }

  return (
    <div className={s.filters}>
      <div className="container">
        <div className={s.wrapper}>
          <span>Price</span>
          <input value={priceFrom} onChange={onFromChange} className={s.input} type="text" placeholder="from"/>
          <input value={priceTo} onChange={onToChange} className={s.input} type="text" placeholder="to"/>
          {
            pathname !== '/sale' &&  <span>Discounted items</span>
          }
          {
            pathname !== '/sale' && <input onChange={onCheck} className={s.checkbox} type="checkbox" id="checkbox" checked={withSale}/>
          }
          {
            pathname !== '/sale' && <label className={s.checkboxLabel} htmlFor="checkbox" ></label>
          }


          <span className={s.sortSpan}>Sorted</span>
          <div className={s.selectWrapper}>
            <div className={s.select} onClick={onSortWrapperClick} ref={sortDivRef}>
              {sortInputValue ? sortInputValue : 'by default'}
            </div>
            <SortList isSortListShown={isSortListShown} setIsSortListShown={setIsSortListShown}/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Filters;
