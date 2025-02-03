import PropTypes from 'prop-types';
import classes from './button.module.css';

export default function Button({
  type,
  text,
  onClick,
  color,
  backgroundColor,
  fontSize,
  width,
  height,
  ariaLabel,
  variant,
  loading,
}) {
  const buttonClass = `${classes.button} ${classes[variant] || ''}`;

  return (
    <div className={classes.container}>
      <button
        className={buttonClass}
        style={{
          '--button-color': color,
          '--button-background': backgroundColor,
          '--button-font-size': fontSize,
          '--button-width': width,
          '--button-height': height,
        }}
        type={type}
        onClick={!loading ? onClick : null}
        aria-label={ariaLabel || text}
        disabled={loading}
      >
        {loading ? 'Loading...' : text}
      </button>
    </div>
  );
}

Button.defaultProps = {
  type: 'button',
  text: 'Submit',
  variant: 'primary',
  loading: false,
  backgroundColor: 'red', // Default to red
  color: 'white', // Default text color
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  text: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  ariaLabel: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
  loading: PropTypes.bool,
};
