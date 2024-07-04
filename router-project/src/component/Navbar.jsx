import './navbar.css'
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div className="navbar">
        <div className="containt">
           <NavLink>ManojVaishnav</NavLink>     
        </div>
        <div className="links">
            <ul>
                <NavLink className={(e)=>{return e.isActive?"yellow":""}} to='/' ><li>Home</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?"yellow":""}} to='/about' ><li>About</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?"yellow":""}} to='/contact' ><li>Contact</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?"yellow":""}} to='/services' ><li>Services</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?"yellow":""}} to='/login' ><li>Login</li></NavLink>
                <NavLink className={(e)=>{return e.isActive?"yellow":""}} to='/signup' ><li>Signup</li></NavLink>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar