import { useDispatch, useSelector } from 'react-redux';
import css from './UserInfo.module.css';
import { selectUser } from 'redux/auth/authSelector';
import { authLogoutThunk } from 'redux/auth/authThunk';

const UserInfo = () => {

  const {name} = useSelector(selectUser);
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authLogoutThunk());
  };

  return (
    <div className={css.userInfo}>
      <span className={css.userName}>{name}</span>
      <button className={css.exitBtn} type="button" onClick={handleClick}>
       Exit
      </button>
    </div>
  );
};

export default UserInfo;
