import { Input } from '@chakra-ui/react';
import { useState } from 'react';

const DiaryDateСalendar = () => {
  const [diaryDate, setDiaryDate] = useState('');

    const handleChange = (event) => {
        setDiaryDate(event.target.value);
    }

  return (
    <Input
      placeholder="Select Date and Time"
      size="lg"
      type="date"
      width="auto"
      fontFamily="Verdana"
      fontSize={34}
      fontWeight={700}
      color="#212121"
      border="transparent"
      onChange={handleChange}
      value={diaryDate}
    />
  );
};

export default DiaryDateСalendar;
