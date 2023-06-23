import s from './DiscountForm.module.scss';
import gnome from '../../../../assets/gnome.png'
import {useState} from "react";
import {sendDiscountOrder} from "../../../../store/formSlice";
import {useDispatch, useSelector} from "react-redux";

const DiscountForm = () => {

  const [value, setValue] = useState('+49 ')
  const dispatch = useDispatch();
  const isSubmitting = useSelector (state => state.forms.isDiscountOrderSubmitting)

  const onSubmitClick = (e) => {
    e.preventDefault();
    const formData = {
      phone: value.replace(' ', '')
    }
    dispatch(sendDiscountOrder(formData))
  }

  const onInputChange = (e) => {
    const onlyNumbersValue = '+49 ' + e.target.value.slice(3).replace(/\D+/, '')
    const shortValue = onlyNumbersValue.slice(0, 14)
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
              <button className={s.submitBtn} onClick={onSubmitClick} disabled={isSubmitting}>Get a discount</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;
