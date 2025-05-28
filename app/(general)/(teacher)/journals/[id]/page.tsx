'use client'

import { Button, Spinner } from '@/app/BJComponents'
import { serverAPI } from '@/app/utils/axios'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function Journal() {
	const [fetchData, setFetchData] = useState<any>(null)
	const router = useRouter()
	const id = useParams().id

	useEffect(() => {
		serverAPI
			.get(`/teacher/getJournal/${id}`, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
			.then(e => {
				setFetchData(e.data.message)
			})
			.catch(e => {
				toast('Журнал не найден', {
					type: 'error',
				})
				router.push('/journals')
			})
	}, [])

	return (
		<>
			<div className='flex justify-between items-start pb-[30px]'>
				{fetchData ? (
					<>
						<div>
							<h2 className='text-[32px] pb-[5px]'>
								{fetchData.subject.subject.name}
							</h2>
							<h3 className='text-[25px]'>
								Группа: {fetchData.subject.group.name}
							</h3>
						</div>
						{/* <Button size='m'>Ведомость по предмету</Button> */}
					</>
				) : (
					<Spinner size='m' />
				)}
			</div>
			<div className='w-full h-full overflow-auto p-[35px] bg-[#232523] rounded-[10px] flex flex-col'>
				{fetchData ? (
					fetchData.students.length != 0 ? (
						<>
							<div className='w-full h-full overflow-auto'>
								<div className='table_grade text-[20px] flex'>
									<div className='col'>
										<div className='min-w-[350px] w-[350px] h-[100px] p-[25px] text-[25px] flex items-center border border-1 border-white sticky top-0 bg-[#232523]'>
											Список группы
										</div>
										<div className='students__list'>
											{fetchData.students.map((el: any, index: number) => {
												return (
													<div className='row flex' key={el.id}>
														<div className='w-[50px] h-[50] flex justify-center items-center border border-1 border-white'>
															{index + 1}
														</div>
														<div className='min-w-[300px] w-[300px] h-[50] px-[15px] flex items-center border border-1 border-white'>
															{el.surname} {el.name}{' '}
															{el.patronymic ? el.patronymic : ''}
														</div>
													</div>
												)
											})}
										</div>
									</div>
									{/* Колонка с датами и оценками */}
									<div className='col'>
										<div className='date'>
											<div className='min-w-[50px] w-full h-[50px] flex justify-center items-center border border-1 border-white truncate sticky top-0 bg-[#232523]'>
												Сентябрь
											</div>
											<div className='flex'>
												<div className='col w-full'>
													<div className='min-w-[50px] w-full h-[50px] flex justify-center items-center border border-1 border-white sticky top-[50px] bg-[#232523]'>
														1
													</div>
													{/* Ячейки */}
													<div className='cells w-full'>
														<div
															className='w-[50px] h-[50px] flex justify-center items-center border border-1 border-white'
															contentEditable
														></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col'>
										<div className='w-[50px] h-full flex justify-center items-center border border-1 border-white cursor-pointer'>
											+
										</div>
									</div>
									<div className='col'>
										<div className='w-[50px] h-[100px] border border-1 border-white flex justify-center items-center sticky top-0 bg-[#232523] text-[18px]'>
											<p style={{ writingMode: 'sideways-lr' }}>Ср. балл</p>
										</div>
										{/* Ячейки */}
										<div className='cells'>
											<div className='w-[50px] h-[50px] flex justify-center items-center border border-1 border-white'></div>
										</div>
									</div>
									<div className='col'>
										<div className='w-[50px] h-[100px] border border-1 border-white flex justify-center items-center sticky top-0 bg-[#232523] text-[18px]'>
											<p style={{ writingMode: 'sideways-lr' }}>Итоговая</p>
										</div>
										{/* Ячейки */}
										<div className='cells'>
											<div
												className='w-[50px] h-[50px] flex justify-center items-center border border-1 border-white'
												contentEditable
											></div>
										</div>
									</div>
								</div>
							</div>
							<div className='mt-[30px]'>
								<Button>Сохранить изменения</Button>
							</div>
						</>
					) : (
						''
					)
				) : (
					<Spinner size='m' />
				)}
			</div>
		</>
	)
}
