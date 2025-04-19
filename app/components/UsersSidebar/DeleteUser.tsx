'use client'

import { Button } from '@/app/BJComponents'

const DeleteUser = () => {
	const customStyles = {
		control: (provided: any) => ({
			...provided,
			backgroundColor: 'white',
			borderRadius: '10px',
			padding: '2px',
			boxShadow: 'none',
			border: '1px solid #ccc',
			'&:hover': {
				border: '1px solid #aaa',
			},
		}),
		menu: (provided: any) => ({
			...provided,
			marginTop: '5px',
		}),
		option: (provided: any, state: any) => ({
			...provided,
			color: '#1B1A17',
			padding: '10px',
			backgroundColor: state.isFocused ? '#f0f0f0' : 'white',
		}),
		singleValue: (provided: any) => ({
			...provided,
			color: '#1B1A17',
			fontSize: '18px',
		}),
	}

	return (
		<div className='flex flex-col items-center h-full'>
			<h3 className='text-[25px] mb-[30px] mx-[10px]'>Удаление пользователя</h3>
			<div className='h-full '>
				<h3 className='text-[25px] mb-[30px] mx-[10px]'>
					Подтвердите удаление пользователя
				</h3>
				<Button width='max' variant='danger' className='mb-[20px]'>
					Удалить
				</Button>
			</div>
		</div>
	)
}

export default DeleteUser
