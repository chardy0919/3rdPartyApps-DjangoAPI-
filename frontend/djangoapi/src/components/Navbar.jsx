import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <>
        <Row>
            <Link to="/">Cats</Link>
            <Link to="/dogs">Dogs</Link>
            <Link to="/fox">Foxes</Link>
        </Row>
        </>
    )
}