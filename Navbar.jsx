import React, { useEffect, useRef } from 'react'
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from '../../firebase';


// function Navbar() {

//   const navRef = useRef()

//   useEffect(() => {
//     const handleScroll = () => {
//       // if (window.scrollY >= 80) {
//       //   navRef.current?.classList.add('nav-dark');
//       // } else {
//       //   navRef.current?.classList.remove('nav-dark');
//       // }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);


//   return (
//     <div className={styles.navbar} ref={navRef}>
//         <div className={styles.navbar-left}>
//           <img src={logo} alt="Netflix-logo" />

//           <ul>
//             <li>Home</li>
//             <li>TV Shows</li>
//             <li>Movies</li>
//             <li>New & Popular</li>
//             <li>Browser by Languages</li>
//           </ul>
//         </div>
//         <div className="navbar-right">
//           <img src={search} alt="icons" className='icons'/>
//           <p>Childern</p>
//           <img src={bell_icon} alt="icons" className='icons'/>
//           <div className="navbar-profile">
//             <img className='profile' src={profile} alt="" />
//             <img src={caret_icon} alt="" />
//             <div className="dropdown">
//               <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar












function Navbar() {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        navRef.current?.classList.add(styles.navDark);
      } else {
        navRef.current?.classList.remove(styles.navDark);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.navbar} ref={navRef}>
      <div className={styles.navbarLeft}>
        <img src={logo} alt="Netflix-logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className={styles.navbarRight}>
        <img src={search} alt="search" className={styles.icons} />
        <span>Children</span>
        <img src={bell_icon} alt="notifications" className={styles.icons} />
        <div className={styles.navbarProfile}>
          <img src={profile} alt="profile" className={styles.profile} />
          <img src={caret_icon} alt="dropdown" />
          <div className={styles.dropdown}>
            <p onClick={() =>{logout()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
