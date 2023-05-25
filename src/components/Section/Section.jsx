import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
