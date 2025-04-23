import axios from 'axios'
import { toast } from 'react-toastify'

export const serverAPI = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
})

serverAPI.interceptors.response.use(
	response => response,
	error => {
		if (!error.response) {
			toast('Ошибка соединения с сервером', { type: 'error' })
			console.log('Ошибка соединения')
		}
		return Promise.reject(error)
	}
)
