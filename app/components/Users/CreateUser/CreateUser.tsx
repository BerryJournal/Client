import { Button } from '@/app/BJComponents'

const CreateUser = () => {
	return (
		<form className='flex flex-col items-center'>
			<h3 className='text-[25px] mb-[30px]'>Добавление пользователя</h3>
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
				<select className='bg-white rounded-[10px] px-[15px] py-[8px] text-[18px] text-[#1B1A17]'>
					<option value='1'>Студент</option>
					<option value='2'>Преподаватель</option>
					<option value='3'>Администратор</option>
				</select>
			</div>
			<div className='w-full flex flex-col mb-[20px]'>
				<label htmlFor='' className='text-[20px] mb-[5px]'>
					Группа
				</label>
				<select className='bg-white rounded-[10px] px-[15px] py-[8px] text-[18px] text-[#1B1A17]'>
					<option value='1'>ИСиП-301</option>
					<option value='2'>ИСиП-201</option>
				</select>
			</div>
			<Button width='max'>Сохранить</Button>
		</form>
	)
}

export default CreateUser
