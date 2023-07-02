import css from './DiaryAddProductForm.module.css';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

const DiaryAddProductForm = () => {
  return (
    <>
      <Input
        className={css.input}
        variant="flushed"
        placeholder="Enter product name"
      />
      <Input className={css.input} variant="flushed" placeholder="Grams" />
      <Button
        bgColor="#FC842D"
        width={176}
        height={44}
        borderRadius={30}
        border="transparent"
        color='#FFFFFF'
        boxShadow='0px 4px 10px 0px #FC842D80'
      >
        Add
      </Button>
    </>
  );
};

export default DiaryAddProductForm;
