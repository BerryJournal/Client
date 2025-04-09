'use client'

import { Button } from '@/app/BJComponents'

export default function Grade() {
	return (
		<>
			<div className='flex justify-between pb-[30px]'>
				<h2 className='text-[32px]'>
					МДК 09.01 Разработка интерфейсов пользователя
				</h2>
				<Button size='m'>Посмотреть ведомость</Button>
			</div>
			<div className='flex flex-col h-full flex flex-col overflow-auto justify-between gap-[30px]'>
				<div className='w-full h-full max-h-full overflow-auto bg-[#232523] rounded-[10px]'>
					<table className='w-full'>
						<thead className=''>
							<tr className='text-left text-[22px] border-b-[3px] border-[#1b1a17]'>
								<th className='p-[25px] font-light'>Дата</th>
								<th className='p-[25px] font-light'>Оценка</th>
								<th className='p-[25px] font-light w-4/6'>Тема</th>
							</tr>
						</thead>
						<tbody className=''>
							<tr className='hover:bg-gray-700 text-[20px] border-b-[2px] border-[#1b1a17]'>
								<td className='p-[25px] font-light'>01.09.2025</td>
								<td className='p-[25px] text-center'>
									<span className='text-[#1C9D0E] border-1 border-[#1C9D0E] text-[20px] h-[40px] w-[40px] rounded flex justify-center items-center'>
										5
									</span>
								</td>
								<td className='p-[25px] font-light'>-</td>
							</tr>
							<tr className='hover:bg-gray-700 text-[20px] border-b-[2px] border-[#1b1a17]'>
								<td className='p-[25px] font-light'>05.09.2025</td>
								<td className='p-[25px] text-center'>
									<span className='text-[#1C9D0E] border-1 border-[#1C9D0E] text-[20px] h-[40px] w-[40px] rounded flex justify-center items-center'>
										5
									</span>
								</td>
								<td className='p-[25px] font-light'>-</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className='flex gap-[30px] text-[22px] font-light'>
					<div className='w-1/6 h-[160px] p-[30px] text-center bg-[#232523] rounded-[10px]'>
						<h3>Итоговая оценка</h3>
						<p className='text-[40px] text-[#1C9D0E]'>-</p>
					</div>
					<div className='w-1/6 h-[160px] p-[30px] text-center bg-[#232523] rounded-[10px]'>
						<h3>Средний балл</h3>
						<p className='text-[40px] text-[#1C9D0E]'>4.47</p>
					</div>
					<div className='w-1/6 h-[160px] p-[30px] text-center bg-[#232523] rounded-[10px]'>
						<h3>Пропуски</h3>
						<p className='text-[40px] text-[#1C9D0E]'>0</p>
					</div>
					<div className='w-3/6 h-[160px] p-[30px] text-center bg-[#232523] rounded-[10px]'>
						<h3 className='text-lext'>Личный рейтинг</h3>
						<p className='text-[40px] text-[#1C9D0E]'>-</p>
					</div>
				</div>
			</div>
		</>
	)
}
