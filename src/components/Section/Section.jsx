import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h3 className={css.title}>{title}</h3>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
