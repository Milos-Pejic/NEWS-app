import { Link } from "react-router-dom"
import StyledNav from "./StyledNav"

const Nav = () => {
    return (
        <>
        <StyledNav>
            <div className="container">
                <nav className="nav">
                    <div className="nav-logo">
                        <Link to="/"> <p>Nova S</p></Link>
                    </div>
                    <ul className="nav-links">
                       <li> <Link to="/health">Health</Link></li>
                       <li> <Link to="/bussines">Bussines</Link></li>
                        <li><Link to="/sport">Sport</Link></li>
                        <li><Link to="/tehnology">Technology</Link></li>
                    </ul>
                </nav>
            </div>
            </StyledNav>
        </>
    )
}
export default Nav