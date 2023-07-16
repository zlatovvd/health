import { useDispatch } from 'react-redux';
import css from './DiaryProductsList.module.css';
import { removeDiary } from 'redux/diary/diarySlice';

const DiaryProductsListItem = ({ diary }) => {
  const { id, product, grams, calories } = diary;

  const dispatch = useDispatch();

  const handleClickDel = id => {
    dispatch(removeDiary(id));
  };

  return (
    <li className={css.diaryProductsListItem}>
      <span className={css.product}>{product}</span>
      <span className={css.grams}>{grams} g</span>
      <span className={css.calories}>{calories} kcal</span>
      <button
        className={css.closeBtn}
        onClick={() => handleClickDel(id)}
      ></button>
    </li>
  );
};

export default DiaryProductsListItem;
