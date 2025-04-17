'use client'

import { Button } from '@/app/BJComponents'

export default function News() {
	return (
		<>
			<div className='flex justify-between pb-[30px]'>
				<h2 className='text-[32px]'>Новости</h2>
				<Button size='m'>Добавить новость</Button>
			</div>
			<div className='w-full h-full max-h-full overflow-auto bg-[#232523] rounded-[10px] p-[35px]'></div>
		</>
	)
}
