import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <div className={css.wrap_button}>
      <button className={css.button} onClick={onClick} type="button">
        Load more
      </button>
    </div>
  );
};
export default Button;
