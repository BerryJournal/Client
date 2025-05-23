'use client'

import { Button, Skeleton, Spinner } from '@/app/BJComponents'
import CreateGroup from '@/app/components/GroupsSidebar/CreateGroup'
import DeleteUser from '@/app/components/UsersSidebar/DeleteUser'
import UpdateUser from '@/app/components/UsersSidebar/UpdateUser'
import { IGroup, ISpeciality, IUser } from '@/app/types/types'
import { serverAPI } from '@/app/utils/axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Users() {
	const [groupsData, setGroupsData] = useState<IGroup[]>()
	const [specialitiesData, setSpecialitiesData] = useState<ISpeciality[]>()
	const [teachersData, setTeachersData] = useState<IUser[]>()
	const [update, setUpdate] = useState<boolean>(false)
	const [searchData, setSearchData] = useState<{
		search: string
	}>({
		search: '',
	})
	const [sidebar, setSidebar] = useState<any>(<Spinner />)

	const getGroupsData = () => {
		const groupsParams = new URLSearchParams()
		searchData.search != '' && groupsParams.set('search', searchData.search)
		serverAPI
			.get('/admin/getAllGroups?' + groupsParams.toString(), {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(e => {
				setGroupsData(e.data.message)
			})
	}

	useEffect(() => {
		serverAPI
			.get('/admin/getAllSpecialities', {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(e => {
				setSpecialitiesData(e.data.message)
				serverAPI
					.get('/admin/getAllTeachers', {
						headers: {
							Authorization: 'Bearer ' + localStorage.getItem('token'),
						},
					})
					.then(el => {
						setTeachersData(el.data.message)

						setSidebar(
							<CreateGroup
								setUpdate={setUpdate}
								update={update}
								specialities={e.data.message}
								teachers={el.data.message}
								setSidebar={setSidebar}
							/>
						)
					})
			})
		getGroupsData()
	}, [update])

	useEffect(() => {
		getGroupsData()
	}, [searchData])

	return (
		<>
			<div className='flex justify-between pb-[30px]'>
				<h2 className='text-[32px]'>Группы</h2>
				<Button
					size='m'
					onClick={() =>
						setSidebar(
							<CreateGroup
								setUpdate={setUpdate}
								update={update}
								specialities={specialitiesData!}
								teachers={teachersData!}
								setSidebar={setSidebar}
							/>
						)
					}
				>
					Добавить группу
				</Button>
			</div>
			<div className='w-full h-full max-h-full flex flex-col bg-[#232523] overflow-auto rounded-[10px]'>
				<div className='w-full px-[35px] py-[25px] border-b-[3px] border-[#1b1a17] flex gap-[30px] text-[18px]'>
					<input
						type='text'
						placeholder='Поиск'
						onChange={e => {
							setSearchData({ ...searchData, search: e.currentTarget.value })
						}}
						className='bg-white rounded-[10px] px-[15px] py-[8px] text-[#1B1A17]'
					/>
				</div>
				<div className='w-full h-full flex overflow-auto'>
					<div className='min-h-full w-5/8 border-r-[3px] border-[#1b1a17] overflow-auto'>
						<div className='flex flex-col gap-[15px] p-[35px] min-h-full'>
							{groupsData ? (
								groupsData.map((el: IGroup) => {
									return (
										<div
											key={el.id}
											className='w-full p-[20px] flex bg-[#1b1a17] rounded-[10px] gap-[10px]'
										>
											<Image
												src={'/icons/avatar.svg'}
												alt=''
												width={40}
												height={40}
												className='h-[100px] w-[100px]'
											/>
											<div className='flex flex-col justify-between w-full'>
												<div className='text-[20px] flex'>{el.name}</div>
												<p className='text-[18px]'>{el.classroomTeacher?.id}</p>
											</div>
											<div className='flex justify-end items-end gap-[15px]'>
												<Button
													size='s'
													onClick={() =>
														setSidebar(
															<UpdateUser
																id={el.id!}
																setSidebar={setSidebar}
																setUpdate={setUpdate}
																update={update}
																groups={groupsData}
															/>
														)
													}
												>
													Редактировать
												</Button>
												<Button
													size='s'
													variant='danger'
													onClick={() =>
														setSidebar(
															<DeleteUser
																id={el.id!}
																setSidebar={setSidebar}
																setUpdate={setUpdate}
																update={update}
																groups={groupsData}
															/>
														)
													}
												>
													Удалить
												</Button>
											</div>
										</div>
									)
								})
							) : (
								<>
									<Skeleton className='w-full h-[140px] p-[20px] flex bg-[#1b1a17] rounded-[10px] gap-[10px]' />
									<Skeleton className='w-full h-[140px] p-[20px] flex bg-[#1b1a17] rounded-[10px] gap-[10px]' />
								</>
							)}
						</div>
					</div>
					<div className='h-full w-3/8 flex flex-col items-center overflow-auto p-[35px]'>
						{sidebar}
					</div>
				</div>
			</div>
		</>
	)
}
