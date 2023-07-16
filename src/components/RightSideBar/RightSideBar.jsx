import css from './RightSideBar.module.css';
import { useSelector } from 'react-redux';
import { selectDiaryDate, selectDiaryDateFormated } from 'redux/diary/diarySelector';

const RightSideBar = () => {
  const diaryDate = useSelector(selectDiaryDateFormated);

  return (
    <div className={css.rightSideBar}>
      <div className={css.container}>
        <div className={css.summaryLeftWrapper}>
          <h2 className={css.summaryTitle}>Summary for {diaryDate}</h2>
          <ul className={css.summaryList}>
            <li className={css.summaryListItem}>
              <span className={css.summaryText}>Left</span>
              <span className={css.summaryValue}>000 kcal</span>
            </li>
            <li className={css.summaryListItem}>
              <span className={css.summaryText}>Consumed</span>
              <span className={css.summaryValue}>000 kcal</span>
            </li>
            <li className={css.summaryListItem}>
              <span className={css.summaryText}>Daily rate</span>
              <span className={css.summaryValue}>000 kcal</span>
            </li>
            <li className={css.summaryListItem}>
              <span className={css.summaryText}>n% of normal</span>
              <span className={css.summaryValue}>000 kcal</span>
            </li>
          </ul>
        </div>
        <div className={css.summaryRightWrapper}>
          <h2 className={css.summaryTitle}>Food not recommended</h2>
          <span className={css.notRecommended}>Your diet will be displayed here</span>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
