import './header.css'
import { Link,NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PeopleIcon from '@mui/icons-material/People';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoImg from './image.png'

export default function Header() {
        
            return (
                <div className="header">
               <header>
                <div className="logo">
                    <img src={LogoImg} alt="" className='logoimg'/>
                </div>
                <div className="search">
                    <SearchIcon className='icon'/>
                    <input type="text" className="searchbar"    placeholder='Search'/>
                </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink className='navlink' to=""><div className="icons">
                                <FeedIcon className='icon'/>
                                <span className='icon'>Feed</span>
                               
                                    </div></NavLink>
                               </li>
                            <li> <NavLink className='navlink' to="post"><div className="icons">
                                <AddCircleOutlineIcon className='icon'/>
                                <span className='icon'>Post</span>
                                </div></NavLink></li>
                            <li>
                                 <NavLink className='navlink' to="community">
                                     <div className="icons">
                                        <PeopleIcon className='icon'/>
                                        <span className='icon'>Community</span>
                                    </div>
                                </NavLink>
                            
                            </li>
                            <li> 
                                <NavLink className='navlink' to="profile">
                                    <div className="icons">
                                        <ManageAccountsIcon className='icon'/>
                                        <span className='icon'>Profile</span>
                                     </div>
                                </NavLink>
                            </li>
                           
                           
                        </ul>
                    </nav>
               </header>
               </div>
            );

        }
