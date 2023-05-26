import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = obj => {
    let count = 0;
    for (let key in obj) {
      count += obj[key];
    }
    return count;
  };
  const countPositiveFeedbackPercentage = (count, good) => {
    if (count > 0) {
      return Math.round((good / count) * 100);
    }
  };
  const total = countTotalFeedback({ good, neutral, bad });

  const prosent = countPositiveFeedbackPercentage(total, good);

  return (
    <>
      {total > 0 ? (
        <div className={css.spanSection}>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total: {total}</span>
          <span>Positive feedback {prosent}%</span>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
