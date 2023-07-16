import css from './DiaryPage.module.css';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateСalendar from 'components/DiaryDateСalendar/DiaryDateСalendar';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import RightSideBar from 'components/RightSideBar/RightSideBar';

const DiaryPage = () => {

  return (
    <div className={css.diaryPage}>
      <DiaryDateСalendar/>
      <DiaryAddProductForm />
      <DiaryProductsList/>
      <RightSideBar/>
    </div>
  );
};

export default DiaryPage;
