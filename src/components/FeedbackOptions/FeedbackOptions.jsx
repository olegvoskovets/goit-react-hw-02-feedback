import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={css.buttonSection}>
        {options.map(option => (
          <button
            key={option}
            name={option}
            className={css.button}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
        {/* <button name="addGood" type="button" onClick={onLeaveFeedback}>
          Good
        </button>
        <button name="addNeutral" type="button" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button name="addBud" type="button" onClick={onLeaveFeedback}>
          Bud
        </button> */}
      </div>
    </>
  );
};
