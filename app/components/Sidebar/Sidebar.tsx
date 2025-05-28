'use client'

import { FooterItem, MenuItem, SideBar, Skeleton } from '@/app/BJComponents'
import { initializeCSRF, serverAPI } from '@/app/utils/axios'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Sidebar = () => {
	const [userData, setUserData] = useState<any>()
	const router = useRouter()
	const path = usePathname()

	const getUserData = async () => {
		serverAPI
			.get('/getUser', {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(e => {
				setUserData(e.data.message)
			})
			.catch(e => {
				if (e.response.status == 401) {
					localStorage.removeItem('token')
					router.push('/')
				}
			})
	}

	const logout = async () => {
		serverAPI.get('/logout', {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
		localStorage.removeItem('token')
		router.push('/')
	}

	useEffect(() => {
		initializeCSRF()
		getUserData()
	}, [])

	const studentMenuItems = [
		<MenuItem
			title='Главная'
			logo='/icons/main.svg'
			onClick={() => router.push('/main')}
			isActive={path === '/main'}
		/>,
		<MenuItem
			title='Успеваемость'
			logo='/icons/grade.svg'
			onClick={() => router.push('/grade')}
			isActive={path.split('/')[1] == 'grade'}
		/>,
		// <MenuItem
		// 	title='Зачетная книжка'
		// 	logo='/icons/main.svg'
		// 	onClick={() => router.push('/gradebook')}
		// 	isActive={path.split('/')[1] == 'gradebook'}
		// />,
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
			logo='/icons/groups.svg'
			onClick={() => router.push('/mygroups')}
			isActive={path.split('/')[1] == 'mygroups'}
		/>,
		<MenuItem
			title='Журналы'
			logo='/icons/journal.svg'
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
			logo='/icons/news.svg'
			onClick={() => router.push('/news')}
			isActive={path.split('/')[1] == 'news'}
		/>,
		<MenuItem
			title='Пользователи'
			logo='/icons/user.svg'
			onClick={() => router.push('/users')}
			isActive={path.split('/')[1] == 'users'}
		/>,
		<MenuItem
			title='Специальности'
			logo='/icons/document.svg'
			onClick={() => router.push('/speciality')}
			isActive={path.split('/')[1] == 'speciality'}
		/>,
		<MenuItem
			title='Группы'
			logo='/icons/groups.svg'
			onClick={() => router.push('/groups')}
			isActive={path.split('/')[1] == 'groups'}
		/>,
		<MenuItem
			title='Предметы'
			logo='/icons/grade.svg'
			onClick={() => router.push('/subjects')}
			isActive={path.split('/')[1] == 'subjects'}
		/>,
		<MenuItem
			title='Предметы у групп'
			logo='/icons/subjectgroup.svg'
			onClick={() => router.push('/subjectsForGroups')}
			isActive={path.split('/')[1] == 'subjectsForGroups'}
		/>,
	]
	const role = [
		{
			name: 'Гл. администратор',
			menu: adminMenuItems,
		},
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
			menuItems={
				userData
					? role[userData.role_id - 1].menu
					: [
							<Skeleton className='w-full h-[34px] px-[10px] py-[5px] mb-[5px]' />,
							<Skeleton className='w-full h-[34px] px-[10px] py-[5px] mb-[5px]' />,
							<Skeleton className='w-full h-[34px] px-[10px] py-[5px] mb-[5px]' />,
							<Skeleton className='w-full h-[34px] px-[10px] py-[5px] mb-[5px]' />,
					  ]
			}
			footerItem={
				userData ? (
					<FooterItem
						avatar='/icons/avatar.png'
						name={`${userData.surname} ${userData.name[0]}. ${
							userData.patronymic ? `${userData.patronymic[0]}.` : ''
						}`}
						role={role[userData.role_id - 1].name}
						onClick={logout}
					/>
				) : (
					<div className='w-full border-t-1 border-white w-full p-[15px]'>
						<Skeleton className='w-full h-[42px] ' />
					</div>
				)
			}
		/>
	)
}

export default Sidebar
