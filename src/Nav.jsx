import './Nav.css'
import GoogleLogin from './GoogleLogin'

function Nav({setPage}){
    return (
        <nav>
            <ul id = "Navbar">
                <li onClick = {() => setPage("home")}>Home</li>
                <li onClick = {() => setPage("about")}>About</li>
                <li onClick = {() => setPage("contact")}>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav