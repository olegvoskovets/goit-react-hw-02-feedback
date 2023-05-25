import PropType from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return <span>{message}</span>;
};

Notification.propTypes = {
  message: PropType.string,
};
