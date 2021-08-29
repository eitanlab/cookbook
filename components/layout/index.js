import styles from './Layout.module.css';

const Layout = ({children}) => {
	return (
		<div className={styles.layout}>
			<div className={styles.container}>
				{children}
			</div>
		</div>
	)
}

export default Layout;