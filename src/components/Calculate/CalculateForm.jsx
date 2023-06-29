import css from './CalculateForm.module.css';

const CalculateForm = () => {
  return (
    <>
      <h1 className={css.title}>
        Calculate your daily calorie intake right now
      </h1>
      <form className={css.calculateForm}>
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
          </div>
        </div>

        <button className={css.submitBtn} type="submit">
          Start losing weight
        </button>
      </form>
    </>
  );
};

export default CalculateForm;
