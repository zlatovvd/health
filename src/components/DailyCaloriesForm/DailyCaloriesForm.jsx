import { useToggle } from 'hooks/useToggle';
import css from './DailyCaloriesForm.module.css';
import Modal from 'components/Modal/Modal';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPersonInfo } from 'redux/intake/intakeSlice';

const DailyCaloriesForm = () => {
  const { isOpen, toggle } = useToggle();
  const [typeblood, setTypeBlood] = useState('1');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [cWeight, setCWeight] = useState('');
  const [dWeight, setDWeight] = useState('');

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
    //toggle();
  };

  return (
    <>
      <h1 className={css.title}>
        Calculate your daily calorie intake right now
      </h1>
      <form className={css.calculateForm} onSubmit={onSubmit}>
        <div className={css.inputWrapper}>
          <input
            className={css.formInput}
            type="text"
            name="height"
            placeholder="Height *"
            onChange={handleChange}
            value={height}
            pattern="^[0-9]{2,3}"
            required
          />
          <input
            className={css.formInput}
            type="text"
            name="age"
            placeholder="Age *"
            onChange={handleChange}
            value={age}
            pattern="^[0-9]{2,3}"
            required
          />
          <input
            className={css.formInput}
            type="text"
            name="cweight"
            placeholder="Current weight *"
            onChange={handleChange}
            value={cWeight}
            pattern="^[0-9]{2,3}"
            required
          />
          <input
            className={css.formInput}
            type="text"
            name="dweight"
            placeholder="Desired weight *"
            onChange={handleChange}
            value={dWeight}
            pattern="^[0-9]{2,3}"
            required
          />

          <div>
            <p className={css.bloodTitle}>Blood type *</p>
            <div className={css.row}>
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

      {/* {isOpen && (
        <Modal close={toggle}>
          <DailyCalorieIntake />
        </Modal>
      )} */}
    </>
  );
};

export default DailyCaloriesForm;
