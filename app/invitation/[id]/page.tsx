'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '../../BJComponents'
import Header from '../../components/Header/Header'

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const router = useRouter()
	return (
		<>
			<Header />
			<div className='w-screen h-screen flex flex-col justify-center items-center'>
				<h2 className='text-[30px] mb-[10px]'>ГАПОУ СО КУПК</h2>
				<h2 className='text-[25px] mb-[40px]'>
					Для продолжения пройдите регистрацию
				</h2>
				<form className='flex flex-col'>
					<label htmlFor='' className='text-[20px] mb-[5px]'>
						Придумайте пароль
					</label>
					<input
						type='text'
						className='w-[360px] h-[45px] text-[18px] px-[15px] rounded-[10px] bg-white text-black'
					/>
					<label
						htmlFor=''
						className='text-[20px] mb-[5px] mt-[15px] text-[18px]'
					>
						Повторите пароль
					</label>
					<input
						type='password'
						className='w-[360px] h-[45px] text-[18px] px-[15px] rounded-[10px] bg-white text-black'
					/>
					<Button
						width='max'
						size='xl'
						className='mt-[30px]'
						onClick={() => router.push('/main')}
					>
						Регистрация
					</Button>
				</form>
			</div>
		</>
	)
}
