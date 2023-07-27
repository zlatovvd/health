import css from './DiaryDateСalendar.module.css';
import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDiaryDate } from 'redux/diary/diarySelector';

const DiaryDateСalendar = () => {

  const day = useSelector(selectDiaryDate);

  const [diaryDate, setDiaryDate] = useState(day);
  
  //const dispatch = useDispatch(); 

    const handleChange = (event) => {
      console.log(event.target.value);
        setDiaryDate(event.target.value);
        //dispatch(setDiaryDate(diaryDate));
    }

  return (
    <Input
      placeholder="Select Date and Time"
      // size="lg"
      type="date"
      width="auto"
      fontFamily="Verdana"
      // fontSize={34}
      fontWeight={700}
      color="#212121"
      border="transparent"
      onChange={handleChange}
      value={diaryDate}
      className={css.inputDate}
    />
  );
};

export default DiaryDateСalendar;
