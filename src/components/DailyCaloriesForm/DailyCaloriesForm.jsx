import { useToggle } from 'hooks/useToggle';
import css from './DailyCaloriesForm.module.css';
import Modal from 'components/Modal/Modal';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { Radio, Stack } from 'components/Radio/Radio';
import { useState } from 'react';

const DailyCaloriesForm = () => {
  const { isOpen, toggle } = useToggle();
  const [radioValue, setRadioValue] = useState('1');

  const onSubmit = event => {
    event.preventDefault();
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
          />
          <input
            className={css.formInput}
            type="text"
            name="age"
            placeholder="Age *"
          />
          <input
            className={css.formInput}
            type="text"
            name="cweight"
            placeholder="Current weight *"
          />
          <input
            className={css.formInput}
            type="text"
            name="dweight"
            placeholder="Desired weight *"
          />
          <div>
            <h2 className={css.bloodTitle}>Blood type *</h2>
            {/* <div className={css.bloodWrapper}>
              <label className={css.bloodTypeLabel}>
                <input
                  className={css.bloodTypeRadio}
                  type="radio"
                  name="bloodtype"
                  value="1"
                />
                1
              </label>
              <label className={css.bloodTypeLabel}>
                <input
                  className={css.bloodTypeRadio}
                  type="radio"
                  name="bloodtype"
                  value="2"
                />
                2
              </label>
              <label className={css.bloodTypeLabel}>
                <input
                  className={css.bloodTypeRadio}
                  type="radio"
                  name="bloodtype"
                  value="3"
                />
                3
              </label>
              <label className={css.bloodTypeLabel}>
                <input
                  className={css.bloodTypeRadio}
                  type="radio"
                  name="bloodtype"
                  value="4"
                />
                4
              </label>
            </div> */}

            {/* <RadioGroup onChange={setRadioValue} value={radioValue}> */}
              <Stack direction='row'>
                <Radio size='sm' value='1' colorScheme='orange' defaultChecked>1</Radio>
                <Radio value='2'>2</Radio>
                <Radio value='3'>3</Radio>
                <Radio value='4'>4</Radio>
              </Stack>
            {/* </RadioGroup> */}

          </div>
        </div>
         
        <button className={css.submitBtn} type="submit">
          Start losing weight
        </button>
      </form>

      {isOpen && <Modal close={toggle}>
        <DailyCalorieIntake/>
      </Modal>}
    </>
  );
};

export default DailyCaloriesForm;
