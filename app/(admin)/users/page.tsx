'use client'

import { Button } from '@/app/BJComponents'
import CreateUser from '@/app/components/UsersSidebar/CreateUser'
import { serverAPI } from '@/app/utils/axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Users() {
	const [usersData, setUsersData] = useState<any>()

	const getUserData = () => {
		serverAPI
			.get('/admin/getAllUsers', {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(e => {
				setUsersData(e.data.message)
			})
	}

	useEffect(() => {
		getUserData()
	}, [])

	return (
		<>
			<div className='flex justify-between pb-[30px]'>
				<h2 className='text-[32px]'>Пользователи</h2>
				<Button size='m'>Добавить пользователя</Button>
			</div>
			<div className='w-full h-full max-h-full flex flex-col bg-[#232523] overflow-auto rounded-[10px]'>
				<div className='w-full px-[35px] py-[25px] border-b-[3px] border-[#1b1a17] flex gap-[30px] text-[18px]'>
					<input
						type='text'
						placeholder='Поиск'
						className='bg-white rounded-[10px] px-[15px] py-[8px] text-[#1B1A17]'
					/>
					<label>
						{/* <label htmlFor='' className='text-[20px] mr-[10px]'>
							Фильтрация по роли:
						</label> */}
						<select className='bg-white rounded-[10px] px-[15px] py-[8px] text-[#1B1A17]'>
							<option value='1'>Роль</option>
							<option value='1'>Студент</option>
							<option value='1'>Преподаватель</option>
							<option value='1'>Администратор</option>
						</select>
					</label>
					<label>
						{/* <label htmlFor='' className='text-[20px] mr-[10px]'>
							Фильтрация по статусу регистрации:
						</label> */}
						<select className='bg-white rounded-[10px] px-[15px] py-[8px] text-[#1B1A17]'>
							<option value='1'>Статус регистрации</option>
							<option value='1'>Зарегестрирован</option>
							<option value='1'>Незарегистрирован</option>
						</select>
					</label>
				</div>
				<div className='w-full h-full flex overflow-auto'>
					<div className='min-h-full w-5/8 border-r-[3px] border-[#1b1a17] overflow-auto'>
						<div className='flex flex-col gap-[15px] p-[35px] min-h-full'>
							{usersData
								? usersData.map((el: any) => {
										return (
											<div
												key={el.id}
												className='w-full p-[20px] flex bg-[#1b1a17] rounded-[10px] gap-[10px]'
											>
												<Image
													src={'/icons/avatar.png'}
													alt=''
													width={40}
													height={40}
													className='h-[100px] w-[100px]'
												/>
												<div className='flex flex-col justify-between w-full'>
													<div className='text-[20px] flex'>
														{`${el.surname} ${el.name} ${el.patronymic}`}
														<Image
															src={'/icons/warning.svg'}
															alt='Незарегистрирован'
															title='Незарегистрирован'
															width={24}
															height={21}
															className='ml-[5px]'
														/>
													</div>
													<p className='text-[18px]'>{el.role.name}</p>
													<p className='text-[18px]'>
														{el.group_id && 'Группа: ' + el.group_id}
													</p>
												</div>
												<div className='flex justify-end items-end gap-[15px]'>
													<Button size='s'>Редактировать</Button>
													<Button size='s' variant='danger'>
														Удалить
													</Button>
												</div>
											</div>
										)
								  })
								: 'Загрузка...'}
						</div>
					</div>
					<div className='h-full w-3/8 flex flex-col items-center overflow-auto p-[35px]'>
						<CreateUser />
					</div>
				</div>
			</div>
		</>
	)
}
