import './header.css'
import { Link,NavLink } from 'react-router-dom';
export default function Header() {
        
            return (
               <header>
                    <nav>
                        <ul>
                           
                            <li>
                                <NavLink to="home">Home</NavLink>

                               </li>
                            <li> <NavLink to="about">About</NavLink></li>
                            <li>three</li>
                            <li>four</li>
                           
                        </ul>
                    </nav>
               </header>
            );
        }
