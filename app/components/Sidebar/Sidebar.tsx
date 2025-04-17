'use client'

import { FooterItem, MenuItem, SideBar } from '@/app/BJComponents'
import { usePathname, useRouter } from 'next/navigation'

const Sidebar = () => {
	const router = useRouter()
	const path = usePathname()
	let currentRole = 1
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

	const adminMenuItems = [
		<MenuItem
			title='Главная'
			logo='/icons/main.svg'
			onClick={() => router.push('/main')}
			isActive={path === '/main'}
		/>,
		<MenuItem
			title='Новости'
			logo='/icons/main.svg'
			onClick={() => router.push('/news')}
			isActive={path.split('/')[1] == 'news'}
		/>,
		<MenuItem
			title='Пользователи'
			logo='/icons/main.svg'
			onClick={() => router.push('/users')}
			isActive={path.split('/')[1] == 'users'}
		/>,
		<MenuItem
			title='Специальности'
			logo='/icons/main.svg'
			onClick={() => router.push('/speciality')}
			isActive={path.split('/')[1] == 'speciality'}
		/>,
		<MenuItem
			title='Группы'
			logo='/icons/main.svg'
			onClick={() => router.push('/groups')}
			isActive={path.split('/')[1] == 'groups'}
		/>,
		<MenuItem
			title='Предметы'
			logo='/icons/main.svg'
			onClick={() => router.push('/subjects')}
			isActive={path.split('/')[1] == 'subjects'}
		/>,
	]
	const role = [
		{
			name: 'Администратор',
			menu: adminMenuItems,
		},
		{
			name: 'Преподаватель',
			menu: teacherMenuItems,
		},
		{
			name: 'Студент',
			menu: studentMenuItems,
		},
	]

	return (
		<SideBar
			header='BerryJournal'
			logo='/logo.svg'
			menuItems={role[currentRole - 1].menu}
			footerItem={
				<FooterItem
					avatar='/icons/avatar.png'
					name='Иванов И. И.'
					role={role[currentRole - 1].name}
					onClick={() => router.push('/')}
				/>
			}
		/>
	)
}

export default Sidebar
