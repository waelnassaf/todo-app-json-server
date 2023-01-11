import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Header = ({ text, bgColor, textColor, fWeight }) => {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }
    return (
        <header style={headerStyles}>
            <div className="container-fluid">
                <Link to="/">
                    <h2 style={{ fontWeight: fWeight }}>{text}</h2>
                </Link>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: "Todo App",
    bgColor: "#180404",
    textColor: "#0099de",
    fWeight: 700,
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    fWeight: PropTypes.number,
}

export default Header
