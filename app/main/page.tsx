'use client'

import { toast } from 'react-toastify'
import { Button } from '../BJComponents'

export default function Main() {
	return (
		<div>
			<div>
				<Button size='s'>Чудно</Button>
				<Button size='m'>Чудно</Button>
				<Button size='l'>Чудно</Button>
				<Button size='xl'>Чудно</Button>
			</div>
			<br />
			<div>
				<Button size='s' width='max'>
					Чудно
				</Button>
				<Button size='m' width='max'>
					Чудно
				</Button>
				<Button size='l' width='max'>
					Чудно
				</Button>
				<Button size='xl' width='max' disabled>
					Чудно
				</Button>
			</div>
			<br />
			<div>
				<Button size='s' variant='danger'>
					Чудно
				</Button>
				<Button size='m' variant='info'>
					Чудно
				</Button>
				<Button size='l' variant='outlined'>
					Чудно
				</Button>
				<Button
					size='xl'
					variant='outlined-utility'
					onClick={() => {
						toast('🦄 Wow so easy!', {
							autoClose: 5000,
							pauseOnHover: true,
							progress: undefined,
							theme: 'dark',
						})
					}}
				>
					Чудно
				</Button>
			</div>
		</div>
	)
}
