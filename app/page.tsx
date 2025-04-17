'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button, Modal } from './BJComponents'
import Header from './components/Header/Header'

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const router = useRouter()
	return (
		<>
			<Header />

			<div className='w-screen h-screen flex justify-between items-center px-[160px]'>
				<div className='font-bold'>
					<h2 className='text-[36px]'>Цифровая образовательная платформа</h2>
					<h1 className='text-[46px] mb-[20px]'>BerryJournal</h1>

					<div className=''>
						<Button
							size='xl'
							onClick={() => setIsModalOpen(true)}
							className='mr-[20px]'
						>
							Войти
						</Button>
						<Button size='xl' variant='outlined'>
							Подключить ОО
						</Button>
					</div>
				</div>
				<Image
					src={'/mainStudents.png'}
					alt='Главная студента'
					width={1920}
					height={1080}
					className='w-[65%]'
				/>
			</div>

			<Modal
				open={isModalOpen}
				title='Войдите по почте'
				titlePosition='center'
				closeButtonClick={() => setIsModalOpen(false)}
				footer={[
					<Button width='max' size='xl' onClick={() => router.push('/main')}>
						Вход
					</Button>,
				]}
			>
				<form className='flex flex-col'>
					<label htmlFor='' className='text-[20px] mb-[5px]'>
						Логин
					</label>
					<input
						type='text'
						className='w-[360px] h-[45px] text-[18px] px-[15px] rounded-[10px] bg-white text-black'
					/>

					<label
						htmlFor=''
						className='text-[20px] mb-[5px] mt-[15px] text-[18px]'
					>
						Пароль
					</label>
					<input
						type='password'
						className='w-[360px] h-[45px] text-[18px] px-[15px] rounded-[10px] bg-white text-black'
					/>
				</form>
			</Modal>
		</>
	)
}
