'use client'

import { useRouter } from 'next/navigation'

export default function Grade() {
	const router = useRouter()
	return (
		<>
			<h2 className='text-[32px] pb-[30px]'>Успеваемость</h2>
			<div className='p-[35px] w-full bg-[#232523] overflow-auto max-h-auto rounded-[10px]'>
				<h3 className='text-[25px] mb-[10px]'>Предметы</h3>
				<div className='flex flex-col gap-[5px]'>
					<div
						onClick={() => router.push('/grade/123')}
						className='flex p-[10px] rounded-[5px] transition-[0.3s] cursor-pointer hover:bg-[#1b1a17]'
					>
						<img
							src='/icons/avatar2.svg'
							alt='Avatar'
							className='w-[50px] mr-[10px]'
						/>
						<div>
							<h4 className='text-[20px] font-light'>
								МДК 09.01 Разработка интерфейсов пользователя
							</h4>
							<p className='text-[15px] text-[#969696]'>Последняя оценка - 5</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
