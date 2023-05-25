import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ addBud, addGood, addNeutral }) => {
  return (
    <>
      <div className={css.buttonSection}>
        <button type="button" onClick={addGood}>
          Good
        </button>
        <button type="button" onClick={addNeutral}>
          Neutral
        </button>
        <button type="button" onClick={addBud}>
          Bud
        </button>
      </div>
    </>
  );
};
