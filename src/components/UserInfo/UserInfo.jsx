import css from './UserInfo.module.css';

const UserInfo = () => {
  const handleClick = event => {};

  return (
    <div className={css.userWrapper}>
      <span className={css.userName}>Nic</span>
      <button className={css.exitBtn} type="button" onClick={handleClick}>
        Exit
      </button>
    </div>
  );
};

export default UserInfo;
