'use client'

import { Button } from '@/app/BJComponents'

export default function Journal() {
	return (
		<>
			<div className='flex justify-between items-start pb-[30px]'>
				<div>
					<h2 className='text-[32px] pb-[5px]'>
						МДК 09.01 Разработка интерфейсов пользователя
					</h2>
					<h3 className='text-[25px]'>Группа: ИСиП-301</h3>
				</div>
				<Button size='m'>Ведомость по предмету</Button>
			</div>
			<div className='w-full h-full overflow-auto p-[35px] bg-[#232523] rounded-[10px] flex flex-col'>
				<div className='w-full h-full overflow-auto'>
					<div className='table_grade text-[20px] flex'>
						<div className='col'>
							<div className='min-w-[350px] w-[350px] h-[100px] p-[25px] text-[25px] flex items-center border border-1 border-white sticky top-0 bg-[#232523]'>
								Список группы
							</div>
							<div className='students__list'>
								<div className='row flex'>
									<div className='w-[50px] h-[50] flex justify-center items-center border border-1 border-white'>
										1
									</div>
									<div className='min-w-[300px] w-[300px] h-[50] px-[15px] flex items-center border border-1 border-white'>
										Иванов Иван Иванович
									</div>
								</div>
								<div className='row flex'>
									<div className='w-[50px] h-[50] flex justify-center items-center border border-1 border-white'>
										2
									</div>
									<div className='min-w-[300px] w-[300px] h-[50] px-[15px] flex items-center border border-1 border-white'>
										Иванов Иван Иванович
									</div>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='date'>
								<div className='min-w-[50px] w-full h-[50px] flex justify-center items-center border border-1 border-white truncate sticky top-0 bg-[#232523]'>
									Сентябрь
								</div>
								<div className='flex'>
									<div className='col'>
										<div className='w-[50px] h-[50px] flex justify-center items-center border border-1 border-white sticky top-[50px] bg-[#232523]'>
											1
										</div>
										{/* Ячейки */}
										<div className='cells'>
											<div
												className='w-[50px] h-[50px] flex justify-center items-center border border-1 border-white'
												contentEditable
											></div>
											<div
												className='w-[50px] h-[50px] flex justify-center items-center border border-1 border-white'
												contentEditable
											></div>
										</div>
									</div>
									<div className='col'>
										<div className='w-[50px] h-[50px] flex justify-center items-center border border-1 border-white sticky top-[50px] bg-[#232523]'>
											2
										</div>
										{/* Ячейки */}
										<div className='cells'>
											<div
												className='w-[50px] h-[50px] flex justify-center items-center border border-1 border-white'
												contentEditable
											></div>
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
							<div className='w-[50px] h-full border border-1 border-white cursor-pointer'></div>
						</div>
						<div className='col'>
							<div className='w-[50px] h-[100px] border border-1 border-white flex justify-center items-center sticky top-0 bg-[#232523] text-[18px]'>
								<p style={{ writingMode: 'sideways-lr' }}>Ср. балл</p>
							</div>
							{/* Ячейки */}
							<div className='cells'>
								<div className='w-[50px] h-[50px] flex justify-center items-center border border-1 border-white'></div>
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
			</div>
		</>
	)
}
