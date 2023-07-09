import { useToggle } from 'hooks/useToggle';
import css from './DailyCaloriesForm.module.css';
import Modal from 'components/Modal/Modal';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { Radio, Stack } from 'components/Radio/Radio';
import { useDebugValue, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDailyCalories } from 'redux/products/intakeSlice';
import { selectProducts } from 'redux/products/selectors';

const DailyCaloriesForm = () => {
  const { isOpen, toggle } = useToggle();
  const [typeblood, setTypeBlood] = useState('1');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [cWeight, setCWeight] = useState('');
  const [dWeight, setDWeight] = useState('');

  const products = useSelector(selectProducts);
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
    dispatch(addDailyCalories({ height, age, cWeight, dWeight, typeblood }));
    toggle();
  };

  return (
    <>
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

            {/* <Stack direction="row">
              <Radio value="1" name="typeblood">
                1
              </Radio>
              <Radio value="2" name="typeblood">
                2
              </Radio>
              <Radio value="3" name="typeblood">
                3
              </Radio>
              <Radio value="4" name="typeblood">
                4
              </Radio>
            </Stack> */}
          </div>
        </div>
         
        <button className={css.submitBtn} type="submit">
          Start losing weight
        </button>
      </form>

      {isOpen && (
        <Modal close={toggle}>
          <DailyCalorieIntake />
        </Modal>
      )}
    </>
  );
};

export default DailyCaloriesForm;
