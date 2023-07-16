import css from './DiaryAddProductForm.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiary, selectDiaryDate } from 'redux/diary/diarySelector';
import { addDiary } from 'redux/diary/diarySlice';
import { setFilter } from 'redux/products/productsSlice';
import {
  selectFilteredProducts,
  selectFoundProduct,
} from 'redux/products/selectors';

const DiaryAddProductForm = () => {
  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();
  const diary = useSelector(selectDiary);
  const filteredProducts = useSelector(selectFilteredProducts);
  const foundProduct = useSelector(selectFoundProduct);
  const diaryDate = useSelector(selectDiaryDate);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'product':
        dispatch(setFilter(value));
        setProduct(value);
        break;
      case 'grams':
        setGrams(value);
        break;
      default:
    }
  };

  const handlerClickItem = event => {
    dispatch(setFilter(event.target.textContent));
    setProduct(event.target.textContent);
    setIsOpen(!isOpen);
  };

  const handlerClickInput = () => {
    setIsOpen(true);
  };

  const onSubmit = event => {
    event.preventDefault();
    resetForm();
    const id = nanoid();
    const { calories, categories, groupBloodNotAllowed } = foundProduct;
    dispatch(addDiary({ id, product, grams, calories, diaryDate }));
  };

  const resetForm = () => {
    setProduct('');
    setGrams('');
  };

  return (
    <form onSubmit={onSubmit} className={css.form}>
      <input
        className={`${css.input} ${css.productInput}`}
        placeholder="Enter product name"
        name="product"
        value={product}
        onChange={handleChange}
        onClick={handlerClickInput}
        // pattern="^[a-zA-z]*"
        autoComplete="off"
        required
      />

      {product && isOpen ? (
        <ul className={css.autocomplete}>
          {filteredProducts.map(item => (
            <li
              className={css.autocompleteItem}
              key={item._id.$oid}
              onClick={handlerClickItem}
            >
              {item.title.ua}
            </li>
          ))}
        </ul>
      ) : null}

      <input
        className={`${css.input} ${css.gramsInput}`}
        placeholder="Grams"
        name="grams"
        value={grams}
        onChange={handleChange}
        pattern="^[0-9]*"
        required
      />

      <button className={css.addButton} type="submit" >
        <span className={css.srOnly}>Add</span>
      </button>
    </form>
  );
};

export default DiaryAddProductForm;
