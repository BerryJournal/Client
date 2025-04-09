'use client'

import { FooterItem, MenuItem, SideBar } from '@/app/BJComponents'
import { usePathname, useRouter } from 'next/navigation'

const Sidebar = () => {
	const router = useRouter()
	const path = usePathname()
	let role = 2
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
			isActive={path.split('/')[1] == 'grade'}
		/>,
		<MenuItem
			title='Зачетная книжка'
			logo='/icons/main.svg'
			onClick={() => router.push('/gradebook')}
			isActive={path.split('/')[1] == 'gradebook'}
		/>,
	]

	const teacherMenuItems = [
		<MenuItem
			title='Главная'
			logo='/icons/main.svg'
			onClick={() => router.push('/main')}
			isActive={path === '/main'}
		/>,
		<MenuItem
			title='Мои группы'
			logo='/icons/main.svg'
			onClick={() => router.push('/mygroups')}
			isActive={path.split('/')[1] == 'mygroups'}
		/>,
		<MenuItem
			title='Журналы'
			logo='/icons/main.svg'
			onClick={() => router.push('/journals')}
			isActive={path.split('/')[1] == 'journals'}
		/>,
	]

	return (
		<SideBar
			header='BerryJournal'
			logo='/logo.svg'
			menuItems={
				role == 1
					? studentMenuItems
					: role == 2
					? teacherMenuItems
					: teacherMenuItems
			}
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
