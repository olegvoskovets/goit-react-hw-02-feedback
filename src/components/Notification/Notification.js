import PropType from 'prop-types';

export const Notification = ({ message }) => {
  return <span>{message}</span>;
};

Notification.propTypes = {
  message: PropType.string,
};
