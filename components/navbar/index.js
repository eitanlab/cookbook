import Link from 'next/link';

import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.Navbar}>
			<Link href='/'><a>Home</a></Link>
		</nav>
	)
}

export default Navbar;