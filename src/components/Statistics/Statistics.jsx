import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({ total, prosent, state }) => {
  return (
    <>
      {total > 0 ? (
        <div className={css.spanSection}>
          {Object.keys(state).map(title => (
            <span key={title}>
              {title}: {state[title]}
            </span>
          ))}

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
  total: PropTypes.number,
  prosent: PropTypes.number,
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
