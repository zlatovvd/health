import css from './DiaryProductsList.module.css';
import { useSelector } from 'react-redux';
import { selectDiary } from 'redux/diary/diarySelector';
import DiaryProductsListItem from './DiaryProductsListItem';

const DiaryProductsList = () => {
  const diary = useSelector(selectDiary);
  
  const handleAddClick = () => {
    
  }

  return (
    <>
      <ul className={css.diaryProductsList}>
        {diary.map(item => (
          <DiaryProductsListItem key={item.id} diary={item} />
        ))}
      </ul>
      <button type='button' onClick={handleAddClick}>Add</button>
    </>
  );
};

export default DiaryProductsList;
