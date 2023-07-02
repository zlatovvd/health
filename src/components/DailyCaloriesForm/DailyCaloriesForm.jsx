import css from './DailyCaloriesForm.module.css';

const DailyCaloriesForm = () => {
  return (
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
          <div className={css.bloodWrapper}>
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
      </div>
        
      <button className={css.submitBtn} type="submit">
        Start losing weight
      </button>

  <input type="radio" id="html" name="fav_language" value="HTML"/>
  <label for="html">HTML</label>
  <input type="radio" id="css" name="fav_language" value="CSS"/>
  <label for="css">CSS</label>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
  <label for="javascript">JavaScript</label>



    </form>
  );
};

export default DailyCaloriesForm;
