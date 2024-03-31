import '../styles/header.css'
import logo from '../images/logo.png'
function Header() {
    console.log(logo)
    return (

        <header className="header">

            <img src={logo} alt="Company Logo" className="logo" /> 

            <a href="/" className="headerTitel" >Axolotl Alliance for Preservation</a>
            <a href="/mitglied">Als Mitglied beitreten</a>
            <a href="/Informationen">Informationen</a>
            <a href="/shop">Shop</a>
            <div></div>



        </header>

    );

}

export default Header

