import React, { FormEvent, useState } from 'react'
import { lsDB } from '../../../lsdb/lsdb'
import { IDate, IMark, ISubject, ITable } from '../../../types/Types'
import Modal from '../../Modal/Modal'
import styles from './JournalDates.module.css'

const JournalDates = (props: ITable) => {
	const [isModalCreateOpen, setIsModalCreateOpen] = useState<boolean>(false)
	const [isModalUpdateOpen, setIsModalUpdateOpen] = useState<boolean>(false)
	const [isModalDeleteOpen, setIsModalDeleteOpen] = useState<boolean>(false)
	const subjectId = props.subjectId
	const [subject, setSubject] = useState<ISubject>(
		lsDB('subjects').get(subjectId)
	)
	const [marks, setMarks] = useState(
		lsDB('marks')
			.getAll()
			.filter((mark: IMark) => mark.subjectId === subjectId)
	)
	const students = props.students
	const [selectedMonth, setSelectedMonth] = useState(1)
	const [date, setDate] = useState<IDate>({
		day: 1,
		month: 1,
		theme: null,
	})

	let months = [
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь',
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
	]
	let monthsExist = subject.dates.map((el: IDate) => {
		return el.month
	})

	let monthUnique: number[] = [...new Set(monthsExist as number[])].sort(
		(a, b) => a - b
	)

	const createDate = (e: FormEvent) => {
		e.preventDefault()
		if (subject.dates.length == 0) {
			lsDB('subjects').update(subject.id, {
				...subject,
				dates: [...subject.dates, { id: 1, ...date }],
			})
		} else {
			lsDB('subjects').update(subject.id, {
				...subject,
				dates: [
					...subject.dates,
					{ id: subject.dates[subject.dates.length - 1].id + 1, ...date },
				],
			})
		}
		setDate({
			day: 1,
			month: 1,
			theme: null,
		})
		setSelectedMonth(1)
		setSubject(lsDB('subjects').get(subjectId))
		setIsModalCreateOpen(false)
	}

	const deleteDate = (e: FormEvent) => {
		e.preventDefault()
		let deleteDates = subject.dates.filter((el: IDate) => el.id != date.id)

		lsDB('subjects').update(subject.id, {
			...subject,
			dates: deleteDates,
		})
		marks.map((el: IMark) => {
			if (el.date.id == date.id) lsDB('marks').remove(el.id)
		})
		setDate({
			day: 1,
			month: 1,
			theme: null,
		})
		setSelectedMonth(1)
		setSubject(lsDB('subjects').get(subjectId))
		setMarks(
			lsDB('marks')
				.getAll()
				.filter((mark: IMark) => mark.subjectId === subjectId)
		)
		setIsModalDeleteOpen(false)
	}

	const updateDate = (e: FormEvent) => {
		e.preventDefault()
		let updateDates = subject.dates.map((el: IDate) => {
			if (el.id == date.id) {
				return date
			} else return el
		})

		lsDB('subjects').update(subject.id, {
			...subject,
			dates: updateDates,
		})
		setDate({
			day: 1,
			month: 1,
			theme: null,
		})
		setSelectedMonth(1)
		setSubject(lsDB('subjects').get(subjectId))
		setIsModalUpdateOpen(false)
	}

	const getDaysInMonth = (
		month: number,
		year: number = new Date().getFullYear() + 1
	): number => {
		return new Date(year, month, 0).getDate()
	}

	const handleCellChange = (
		e: FormEvent<HTMLDivElement>,
		data: { id: number; student: number }
	) => {
		const regex = new RegExp(/^(0|1|2|3|4|5|н|нз|зч)$/)
		if (
			!regex.test(e.currentTarget.innerText) ||
			e.currentTarget.innerText == ''
		) {
			e.currentTarget.innerText = ''
		}

		const newMark = e.currentTarget.innerText
		const markExist: IMark = marks.find(
			(el: IMark) => el.date.id == data.id && el.studentId == data.student
		)

		markExist
			? newMark == ''
				? lsDB('marks').remove(markExist.id)
				: lsDB('marks').update(markExist.id, {
						mark: newMark,
				  })
			: newMark != '' &&
			  lsDB('marks').add({
					id: marks[marks.length - 1]?.id + 1 || 0,
					subjectId: subject.id,
					studentId: data.student,
					date: {
						id: data.id,
					},
					mark: newMark,
			  })
		setMarks(
			lsDB('marks')
				.getAll()
				.filter((mark: IMark) => mark.subjectId === subjectId)
		)
	}

	const sortedDates = subject.dates
		.map((elDate: IDate) => elDate)
		.sort((a: IDate, b: IDate) => a.month - b.month || a.day - b.day)

	return (
		<>
			<div className={styles.months__marks}>
				{monthUnique.map(el => {
					return (
						<React.Fragment key={months[el - 1]}>
							<div className={styles.month__marks}>
								<div className={`${styles.cell} ${styles.month}`}>
									{months[el - 1]}
								</div>
								<div className={styles.dates}>
									{sortedDates.map((eldate: IDate, index: number) => {
										return (
											<React.Fragment
												key={eldate.day + '_' + eldate.month + '_' + index}
											>
												{el == eldate.month ? (
													<div className={styles.col}>
														<div
															className={`${styles.cell} ${styles.date}`}
															id={eldate.month + '_' + eldate.day}
															onClick={() => {
																setDate({
																	id: eldate.id,
																	day: eldate.day,
																	month: eldate.month,
																	theme: eldate.theme,
																})
																setIsModalUpdateOpen(true)
															}}
														>
															{eldate.day}
														</div>
														{students.map(elstud => {
															const mark =
																marks.find(
																	(elmark: IMark) =>
																		elmark.studentId == elstud.id &&
																		elmark.date.id == eldate.id
																)?.mark || ''
															return (
																<div
																	key={elstud.id + eldate.day + eldate.month}
																	className={`${styles.cell} ${styles.mark}`}
																	contentEditable={true}
																	suppressContentEditableWarning={true}
																	onBlur={e => {
																		handleCellChange(e, {
																			id: eldate.id!,
																			student: elstud.id,
																		})
																	}}
																>
																	{mark}
																</div>
															)
														})}
													</div>
												) : (
													<></>
												)}
											</React.Fragment>
										)
									})}
								</div>
							</div>
						</React.Fragment>
					)
				})}
			</div>
			<div className={`${styles.col} ${styles.col__new}`}>
				<div
					className={`${styles.cell} ${styles.plus}`}
					onClick={() => setIsModalCreateOpen(true)}
				>
					+
				</div>
			</div>
			<div className={`${styles.col} ${styles.col__last}`}>
				<div className={`${styles.cell} ${styles.final__mark}`}>Ср. балл</div>
				{students.map(elstud => {
					let sum = 0
					let count = 0
					lsDB('marks')
						.getAll()
						.filter(
							(elMark: IMark) =>
								elMark.subjectId == subjectId &&
								elMark.studentId == elstud.id &&
								elMark.date.id != -1
						)
						.map((elMark: IMark) => {
							if (/^(0|1|2|3|4|5)$/.test(elMark.mark.toString())) {
								sum += +elMark.mark
								count += 1
							}
						})
					return (
						<div
							key={elstud.id + '_result'}
							className={styles.cell}
							id={elstud.id + '_result'}
						>
							{sum != 0 && count != 0
								? (sum / count) % 1 === 0
									? sum / count
									: (sum / count).toFixed(2)
								: 0}
						</div>
					)
				})}
			</div>
			<div className={`${styles.col} ${styles.col__last}`}>
				<div className={`${styles.cell} ${styles.final__mark}`}>Итоговая</div>
				{students.map(elstud => {
					const mark =
						marks.find(
							(elmark: IMark) =>
								elmark.studentId == elstud.id && elmark.date.id == -1
						)?.mark || ''
					return (
						<div
							key={elstud.id + '_result'}
							className={styles.cell}
							contentEditable={true}
							suppressContentEditableWarning={true}
							id={elstud.id + '_result'}
							onBlur={e =>
								handleCellChange(e, {
									id: -1,
									student: elstud.id,
								})
							}
						>
							{mark}
						</div>
					)
				})}
			</div>

			<Modal
				isOpen={isModalCreateOpen}
				onClose={() => setIsModalCreateOpen(false)}
			>
				<h2 className={styles.title}>Добавление даты</h2>
				<form className={styles.update__form} onSubmit={createDate}>
					<div className={styles.group__form}>
						<label htmlFor='theme' className={styles.label}>
							Тема
						</label>
						<input
							type='text'
							id='theme'
							onChange={e =>
								setDate({
									...date,
									theme: e.currentTarget.value,
								})
							}
							className={styles.input}
							required
						/>
					</div>
					<div className={styles.group__form}>
						<label htmlFor='month' className={styles.label}>
							Месяц
						</label>
						<select
							id='month'
							className={styles.select}
							onChange={e => {
								setDate({
									...date,
									month: +e.currentTarget.value,
								})
								setSelectedMonth(+e.currentTarget.value)
							}}
						>
							{months.map((el, i) => {
								return (
									<option key={i} value={i + 1}>
										{el}
									</option>
								)
							})}
						</select>
					</div>
					<div className={styles.group__form}>
						<label htmlFor='day' className={styles.label}>
							День
						</label>
						<select
							id='day'
							className={styles.select}
							onChange={e =>
								setDate({
									...date,
									day: +e.currentTarget.value,
								})
							}
						>
							{Array.from(
								{ length: getDaysInMonth(selectedMonth) },
								(_, i) => i + 1
							).map((el, i) => {
								return (
									<option key={i} value={i + 1}>
										{el}
									</option>
								)
							})}
						</select>
					</div>
					<div className={styles.group__buttons}>
						<button type='submit' className={styles.form__update}>
							Добавить
						</button>
						<button
							type='reset'
							className={styles.form__cancel}
							onClick={() => {
								setIsModalCreateOpen(false)
								setSelectedMonth(1)
							}}
						>
							Отменить
						</button>
					</div>
				</form>
			</Modal>

			<Modal
				isOpen={isModalUpdateOpen}
				onClose={() => setIsModalUpdateOpen(false)}
			>
				<h2 className={styles.title}>Изменение даты</h2>
				<form className={styles.update__form} onSubmit={updateDate}>
					<div className={styles.group__form}>
						<label htmlFor='theme' className={styles.label}>
							Тема
						</label>
						<input
							type='text'
							id='theme'
							value={date.theme!}
							onChange={e =>
								setDate({
									...date,
									theme: e.currentTarget.value,
								})
							}
							className={styles.input}
							required
						/>
					</div>
					<div className={styles.group__form}>
						<label htmlFor='month' className={styles.label}>
							Месяц
						</label>
						<select
							id='month'
							className={styles.select}
							defaultValue={date.month}
							onChange={e => {
								setDate({
									...date,
									month: +e.currentTarget.value,
								})
								setSelectedMonth(+e.currentTarget.value)
							}}
						>
							{months.map((el, i) => {
								return (
									<option key={i} value={i + 1}>
										{el}
									</option>
								)
							})}
						</select>
					</div>
					<div className={styles.group__form}>
						<label htmlFor='day' className={styles.label}>
							День
						</label>
						<select
							id='day'
							className={styles.select}
							defaultValue={date.day}
							onChange={e =>
								setDate({
									...date,
									day: +e.currentTarget.value,
								})
							}
						>
							{Array.from(
								{ length: getDaysInMonth(selectedMonth) },
								(_, i) => i + 1
							).map((el, i) => {
								return (
									<option key={i} value={i + 1}>
										{el}
									</option>
								)
							})}
						</select>
					</div>
					<div className={styles.group__buttons}>
						<button type='submit' className={styles.form__update}>
							Изменить
						</button>
						<button
							type='button'
							className={styles.form__delete}
							onClick={() => {
								setIsModalDeleteOpen(true)
								setIsModalUpdateOpen(false)
								setSelectedMonth(1)
							}}
						>
							Удалить
						</button>
						<button
							type='reset'
							className={styles.form__cancel}
							onClick={() => {
								setIsModalUpdateOpen(false)
								setSelectedMonth(1)
							}}
						>
							Отменить
						</button>
					</div>
				</form>
			</Modal>

			<Modal
				isOpen={isModalDeleteOpen}
				onClose={() => setIsModalDeleteOpen(false)}
			>
				<h2 className={styles.title}>Удаление даты</h2>
				<div className={styles.group__buttons}>
					<button className={styles.form__update} onClick={deleteDate}>
						Удалить
					</button>
					<button
						className={styles.form__cancel}
						onClick={() => setIsModalDeleteOpen(false)}
					>
						Отменить
					</button>
				</div>
			</Modal>
		</>
	)
}

export default JournalDates
