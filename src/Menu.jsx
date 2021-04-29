import React from 'react';
import {NavLink} from 'react-router-dom';



//instead of href and a we use Link,not to reload. or more better is NavLink just bcz we can know which link is used
const Menu=()=>{
    return <>
    <div className="menu_style">
            <NavLink exact activeClassName="active_class" to="/">About Us</NavLink>
    <NavLink exact 
    activeClassName="active_class" to="/contact">Contact US</NavLink>

    <br/>
    <NavLink exact 
    activeClassName="active_class" to="/service">Services</NavLink>
    <br/>



    {/* //User for useParam() Hook */}
    <NavLink exact 
    activeClassName="active_class" to="/user/user_main/user_sub">User</NavLink>
    {/* //gave /anything after  coz if one clicks on user without writing any subdomain by default this is shown. */}
  </div>
    </>

}
export default Menu;