import s from './DiscountForm.module.scss';
import gnome from '../../../../assets/gnome.png'
import {useState} from "react";
import {sendDiscountOrder} from "../../../../store/formSlice";
import {useDispatch, useSelector} from "react-redux";

const DiscountForm = () => {

  const [value, setValue] = useState('+45')

  const dispatch = useDispatch();

  const isSubmitting = useSelector (state => state.forms.isDiscountOrderSubmitting)

  const onsubmitClick = (e) => {
    e.preventDefault();
    const formData = {
      phone: value
    }
    dispatch(sendDiscountOrder(formData))
  }

  const onInputChange = (e) => {
    const onlyNumbersValue = '+45' + e.target.value.slice(3).replace(/\D+/, '')
    const shortValue = onlyNumbersValue.slice(0, 13)
    setValue(shortValue)
  }

  return (
    <div className={s.discountForm}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.imgWrapper}>
            <img src={gnome} alt="gnome"/>
          </div>
          <div className={s.content}>
            <p className={s.title}> 5% off</p>
            <p className={s.text}> on the first order</p>
            <form>
              <input className={s.input} onChange={onInputChange} type="text" value={value}/>
              <button className={s.submitBtn} onClick={onsubmitClick} disabled={isSubmitting}>Get a discount</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;
