import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options }) => {
  return (
    <>
      <div className={css.buttonSection}>
        <button name="addGood" type="button" onClick={options}>
          Good
        </button>
        <button name="addNeutral" type="button" onClick={options}>
          Neutral
        </button>
        <button name="addBud" type="button" onClick={options}>
          Bud
        </button>
      </div>
    </>
  );
};
