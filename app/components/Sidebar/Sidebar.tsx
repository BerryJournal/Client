'use client'

import { FooterItem, MenuItem, SideBar } from '@/app/BJComponents'
import { usePathname, useRouter } from 'next/navigation'

const Sidebar = () => {
	const router = useRouter()
	const path = usePathname()
	const role = 1
	const studentMenuItems = [
		<MenuItem
			title='Главная'
			logo='/icons/main.svg'
			onClick={() => router.push('/main')}
			isActive={path === '/main'}
		/>,
		<MenuItem
			title='Успеваемость'
			logo='/icons/main.svg'
			onClick={() => router.push('/grade')}
			isActive={path === '/grade'}
		/>,
	]

	return (
		<SideBar
			header='BerryJournal'
			logo='/logo.svg'
			menuItems={role == 1 ? studentMenuItems : studentMenuItems}
			footerItem={
				<FooterItem
					avatar='/icons/avatar.png'
					name='Иванов И. И.'
					role='Студент'
				/>
			}
		/>
	)
}

export default Sidebar
