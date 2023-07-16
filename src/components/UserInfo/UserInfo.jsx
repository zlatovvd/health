import { useDispatch, useSelector } from 'react-redux';
import css from './UserInfo.module.css';
import { authLogOut } from 'redux/auth/authSlice';
import { selectUser } from 'redux/auth/authSelector';

const UserInfo = () => {

  const {email} = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authLogOut());
  };

  return (
    <div className={css.userWrapper}>
      <span className={css.userName}>{email}</span>
      <button className={css.exitBtn} type="button" onClick={handleClick}>
        Exit
      </button>
    </div>
  );
};

export default UserInfo;
