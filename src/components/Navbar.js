import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

  return (
	<>
    <nav className='navbar'>
			<div className='navbar-container'>
				<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
				 	<img src='./images/NSF_logo.png' alt='NSF Logo'></img>
					SLU Wireless Testbed
				</Link>
				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className='nav-item'>
						<Link to='/' className='nav-links' onClick={closeMobileMenu}>
							Home
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/publications' className='nav-links' onClick={closeMobileMenu}>
							Publications
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/team' className='nav-links' onClick={closeMobileMenu}>
							Team
						</Link>
					</li>
				</ul>
			</div>
		</nav>
		</>
	);
}

export default Navbar;