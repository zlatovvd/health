import css from './DiaryAddProductForm.module.css';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiary } from 'redux/diary/diarySelector';
import { addDiary } from 'redux/diary/diarySlice';

const DiaryAddProductForm = () => {
  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');

  const dispatch = useDispatch();
  const diary = useSelector(selectDiary);

  const handleChange = (event) => {
    const {name, value} = event.target;
    switch (name) {
      case 'product':
        setProduct(value);
        break;
      case 'grams':
        setGrams(value);
        break;
      default:
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const id =  nanoid();
    dispatch(addDiary({id, product, grams}));
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        className={css.input}
        variant="flushed"
        placeholder="Enter product name"
        name="product"
        value={product}
        onChange={handleChange}
        pattern="^[a-zA-z]*"
        required
      />
      <Input
        className={css.input}
        variant="flushed"
        placeholder="Grams"
        name="grams"
        value={grams}
        onChange={handleChange}
        pattern="^[0-9]*"
        required
      />
      <Button
        bgColor="#FC842D"
        width={176}
        height={44}
        borderRadius={30}
        border="transparent"
        color="#FFFFFF"
        boxShadow="0px 4px 10px 0px #FC842D80"
        type='submit'
      >
        Add
      </Button>

      <p>{diary}</p>
    </form>

  );
};

export default DiaryAddProductForm;
