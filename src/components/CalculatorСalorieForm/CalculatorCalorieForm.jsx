import css from './CalculatorCalorieForm.module.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPersonInfo } from "redux/intake/intakeSlice";
import { selectPersonInfo } from 'redux/products/selectors';

const CalculatorCalorieForm = () => {
  const personInfo = useSelector(selectPersonInfo);

  const [typeblood, setTypeBlood] = useState(personInfo.typeblood || '1');
  const [height, setHeight] = useState(personInfo.height);
  const [age, setAge] = useState(personInfo.age);
  const [cWeight, setCWeight] = useState(personInfo.cWeight);
  const [dWeight, setDWeight] = useState(personInfo.dWeight);

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'typeblood':
        setTypeBlood(value);
        break;
      case 'height':
        setHeight(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'cweight':
        setCWeight(value);
        break;
      case 'dweight':
        setDWeight(value);
        break;
      default:
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    dispatch(addPersonInfo({ height, age, cWeight, dWeight, typeblood }));
  };

  return (
    <form className={css.calculateForm} onSubmit={onSubmit}>
      <h1 className={css.title}>
        Calculate your daily calorie intake right now
      </h1>
      <div className={css.inputWrapper}>
        <label className={css.inputLabel}>
          Height *
          <input
            className={css.formInput}
            type="text"
            name="height"
            onChange={handleChange}
            value={height}
            pattern="^[0-9]{2,3}"
            required
          />
        </label>
        <label className={css.inputLabel}>
          Age *
          <input
            className={css.formInput}
            type="text"
            name="age"
            onChange={handleChange}
            value={age}
            pattern="^[0-9]{2,3}"
            required
          />
        </label>

        <label className={css.inputLabel}>
          Current weight *
          <input
            className={css.formInput}
            type="text"
            name="cweight"
            onChange={handleChange}
            value={cWeight}
            pattern="^[0-9]{2,3}"
            required
          />
        </label>
        <label className={css.inputLabel}>
          Desired weight *
          <input
            className={css.formInput}
            type="text"
            name="dweight"
            onChange={handleChange}
            value={dWeight}
            pattern="^[0-9]{2,3}"
            required
          />
        </label>
        <div>
          <p className={css.bloodTitle}>Blood type *</p>
          <div className={css.radioRow}>
            <label className={css.radioLabel}>
              <input
                type="radio"
                name="typeblood"
                checked={typeblood === '1'}
                className={css.inputRadio}
                value="1"
                onChange={handleChange}
              />
              <span className={css.radio}></span>
              <span className={css.radioMessage}>1</span>
            </label>
            <label className={css.radioLabel}>
              <input
                type="radio"
                checked={typeblood === '2'}
                name="typeblood"
                className={css.inputRadio}
                value="2"
                onChange={handleChange}
              />
              <span className={css.radio}></span>
              <span className={css.radioMessage}>2</span>
            </label>
            <label className={css.radioLabel}>
              <input
                type="radio"
                checked={typeblood === '3'}
                name="typeblood"
                className={css.inputRadio}
                value="3"
                onChange={handleChange}
              />
              <span className={css.radio}></span>
              <span className={css.radioMessage}>3</span>
            </label>
            <label className={css.radioLabel}>
              <input
                type="radio"
                checked={typeblood === '4'}
                name="typeblood"
                className={css.inputRadio}
                value="4"
                onChange={handleChange}
              />
              <span className={css.radio}></span>
              <span className={css.radioMessage}>4</span>
            </label>
          </div>
        </div>
      </div>
       
      <button className={css.submitBtn} type="submit">
        Start losing weight
      </button>
    </form>
  );
};

export default CalculatorCalorieForm;