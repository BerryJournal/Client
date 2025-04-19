'use client'

import { Button } from '@/app/BJComponents'
import dynamic from 'next/dynamic'

const Select = dynamic(() => import('react-select'), { ssr: false })

const CreateUser = () => {
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
		<form className='flex flex-col items-center justify-between h-full'>
			<div className='flex flex-col items-center'>
				<h3 className='text-[25px] mb-[30px] mx-[10px]'>
					Добавление пользователя
				</h3>
				<div className='w-full flex flex-col mb-[20px]'>
					<label htmlFor='' className='text-[20px] mb-[5px]'>
						ФИО
					</label>
					<input
						type='text'
						className='bg-white rounded-[10px] px-[15px] py-[8px] text-[18px] text-[#1B1A17]'
					/>
				</div>
				<div className='w-full flex flex-col mb-[20px]'>
					<label htmlFor='' className='text-[20px] mb-[5px]'>
						Email
					</label>
					<input
						type='text'
						className='bg-white rounded-[10px] px-[15px] py-[8px] text-[18px] text-[#1B1A17]'
					/>
				</div>
				<div className='w-full flex flex-col mb-[20px]'>
					<label htmlFor='' className='text-[20px] mb-[5px]'>
						Дата рождения
					</label>
					<input
						type='date'
						className='bg-white rounded-[10px] px-[15px] py-[8px] text-[18px] text-[#1B1A17]'
					/>
				</div>
				<div className='w-full flex flex-col mb-[20px]'>
					<label htmlFor='' className='text-[20px] mb-[5px]'>
						Роль
					</label>
					<Select
						isSearchable={false}
						placeholder='Роль...'
						styles={customStyles}
						options={[
							{ value: '3', label: 'Студент' },
							{ value: '2', label: 'Преподаватель' },
							{ value: '1', label: 'Администратор' },
						]}
					/>
				</div>
				<div className='w-full flex flex-col mb-[20px]'>
					<label htmlFor='' className='text-[20px] mb-[5px]'>
						Группа
					</label>
					<Select
						styles={customStyles}
						placeholder='Группа...'
						noOptionsMessage={() => 'Нет подходящих групп'}
						options={[
							{ value: '1', label: 'ИСиП-301' },
							{ value: '2', label: 'ИСиП-201' },
						]}
					/>
				</div>
			</div>
			<Button width='max'>Сохранить</Button>
		</form>
	)
}

export default CreateUser
