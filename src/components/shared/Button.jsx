import PropTypes from "prop-types"

const Button = ({ children, version, type, isDisabled }) => {
    return (
        <button
            type={type}
            disabled={isDisabled}
            className={`btn btn-${version}`}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: "button",
    version: "primary",
    isDisabled: false,
}

Button.propTypes = {
    type: PropTypes.string,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default Button
