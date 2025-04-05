import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Image src={'/logo.svg'} alt='Логотип' width={38} height={30} />
				<p>BerryJournal</p>
			</div>

			<nav>
				<Link href={'/tariffs'}>Тарифы</Link>
				<Link href={'/contacts'}>Контакты</Link>
			</nav>
		</header>
	)
}

export default Header
