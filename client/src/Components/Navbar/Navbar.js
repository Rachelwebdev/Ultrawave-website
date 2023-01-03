import navbarStyle from "./Navbar.module.css";
import hamburgerMenuStyle from "./Nav.module.css";
// import DehazeIcon from '@mui/icons-material/Dehaze';
// import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from "react";

const Navbar = () => { 
  //const [open,setOpen] = useState(false)

  const [active,setActive] = useState(false)
  const [scroll,setScroll] = useState(false)

  const handleScroll= () => {
    if(window.scrollY > 100 ){
      setScroll(true)
    }else {setScroll(false)}
  }


  const handleMenu =()=>{
    setActive(!active);

  }

 

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    
  })

  




  // return (
  //   <div className={navbarStyle.header} >
  //     <nav className={navbarStyle.headerContainer} style={{ backgroundColor:scroll  && 'white'}}>
  //       <h1 className={navbarStyle.logoText}>ULTRAWAVE</h1>
  //       <div className={navbarStyle.navLinks} style={{ color:scroll && 'black'}}>
  //         <ul>
  //           <li>ABOUT</li>
  //           <li>SERVICES</li>
  //           <li>PROJECTS</li>
  //           <li>OUR TEAM</li>
  //           <li>REVIEWS</li>
  //         </ul>
  //       </div>
  //       <button className={navbarStyle.btnContact}>CONTACT US</button>
  //       <div className={navbarStyle.hamburger} onClick={()=>setOpen(!open)}>
  //       {open ? <ClearIcon/>: <DehazeIcon/>}
  //       </div>
        
  //     </nav>
  //       {open && <div className={navbarStyle.menu}>
  //           <ul>
  //             <li>ABOUT</li>
  //             <li>SERVICES</li>
  //             <li>PROJECTS</li>
  //             <li>OUR TEAM</li>
  //             <li>REVIEWS</li>
  //           </ul>
  //           <hr />
  //           <button className={navbarStyle.menuContact}>CONTACT US</button>
  //       </div>}
  //   </div>
  // );

  return(
    <header className={hamburgerMenuStyle.header}>
    <nav className={hamburgerMenuStyle.navbar} style={{ backgroundColor:scroll  && 'white',color:scroll && "black"}}>
        <h1 className={hamburgerMenuStyle.navLogo}>ULTRAWAVE</h1>
        <ul className={active?`${hamburgerMenuStyle.navMenu} ${hamburgerMenuStyle.active}`:hamburgerMenuStyle.navMenu}>
            <li className={hamburgerMenuStyle.navItem} onClick={handleMenu}>
                About
            </li>
            <li className={hamburgerMenuStyle.navItem} onClick={handleMenu}>
                Services
            </li>
            <li className={hamburgerMenuStyle.navItem} onClick={handleMenu}>
               Projects
            </li>
            <li className={hamburgerMenuStyle.navItem} onClick={handleMenu}>
                Our Team
            </li>

            <li className={hamburgerMenuStyle.navItem} onClick={handleMenu}>
                Review
            </li>

            <li className={hamburgerMenuStyle.navItem} onClick={handleMenu}>
             <button className={navbarStyle.menuContact}>CONTACT US</button>
            </li>
        </ul>
        <div className={active?`${hamburgerMenuStyle.hamburger} ${hamburgerMenuStyle.active}`:hamburgerMenuStyle.hamburger} onClick={handleMenu}>
            <span className={hamburgerMenuStyle.bar}></span>
            <span className={hamburgerMenuStyle.bar}></span>
            <span className={hamburgerMenuStyle.bar}></span>
        </div>
    </nav>
  </header>
  )

};

export default Navbar;
