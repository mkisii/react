// import { PropTypes } from "prop-types";
// import { ReactPropTypes } from "react";
import Button from "./Button";

const  Header = ({title, onAdd, showAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color= {showAdd ? 'red' :'green'}text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
 
        </header>
    )
}
Header.defaultProps = {
    title:"Day Task Tracker"
}
// Header.ReactPropTypes= {
//     title:ReactPropTypes.string.isRequired
// }


export default Header;
