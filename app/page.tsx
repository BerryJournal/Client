'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button, Modal } from './BJComponents'
import Header from './components/Header/Header'
import styles from './index.module.scss'

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const router = useRouter()
	return (
		<>
			<Header />

			<div className={styles.main}>
				<div className={styles.left}>
					<h2>Цифровая образовательная платформа</h2>
					<h1>BerryJournal</h1>

					<div className={styles.buttons}>
						<Button size='xl' onClick={() => setIsModalOpen(true)}>
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
				<form className={styles.form}>
					<label htmlFor=''>Логин</label>
					<input type='text' />

					<label htmlFor=''>Пароль</label>
					<input type='password' />
				</form>
			</Modal>
		</>
	)
}
