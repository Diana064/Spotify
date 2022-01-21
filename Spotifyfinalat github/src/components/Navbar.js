
import React, { useEffecrt, useState } from 'react';
import {
    ArrowBackIosNew as ArrowBackIosNewIcon,
    ArrowForwardIos as ArrowForwardIosIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
    Notifications as NotificationsIcon,
    MoveToInbox as MoveToInboxIcon
    
} from '@mui/icons-material';

const Navbar = () => {
    const [userDropDown, setUserDropDown] = useState(false);

    const handleUserDropDown = () => {
        setUserDropDown(!userDropDown);
        };
 return (
<section className="header">

        <div class="arrow-icons">
            <button>
                <ArrowBackIosNewIcon className="btnABI"></ArrowBackIosNewIcon>
                </button>
             <button>   
                <ArrowForwardIosIcon className="btnAFI"></ArrowForwardIosIcon>
            </button>
        </div>

        <div className="search">
            <input type="text" placeholder="Search" />
        </div>

        <div className="user">
        
            <div className="user__info">
            <button>
                <NotificationsIcon className="btnNI"></NotificationsIcon>
                </button>
            <button>
                <MoveToInboxIcon className="btnNI"></MoveToInboxIcon>
                </button>
                <div class="user__info__img">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/adam_proPic.jpg" alt="Profile Picture" className="img-responsive" />
                </div>
                <div class="user__info__name">
                    <div class="first">Adam</div>
                    <div class="last">Lowenthal</div>
                    <button onClick={handleUserDropDown} >
                <KeyboardArrowDownIcon className="buttonDropDown"></KeyboardArrowDownIcon>
                </button>
                </div>
                <div className="user__actions">
               
                <div className="dropdown">
                    <ul  className={`dropdown-menu dropdown-menu-right ${((userDropDown) ? 'show' : '')}`} >
                        <li><a href="#">Private Session</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Log Out</a></li>
                    </ul>
                </div>
            </div>
            </div>        
        </div>
  </section>
  
 );
}
export default Navbar;