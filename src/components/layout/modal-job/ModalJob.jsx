import { useActions } from '../../../hooks/useActions'

const ModalJob = () => {
	const { closeJob } = useActions()

	return (
		<div className='modal-bg'>
			<div className='modal'>
				<button className='modal-close' onClick={() => closeJob()}></button>
				<div className='modal-header'>
					<h2 className='modal-title'>Отправить резюме</h2>
					<p className='paragraph'>
						Заполните поля ниже, чтобы отправить резюме
					</p>
				</div>
				<form action='#' className='form'>
					<input type='text' className='form-input' placeholder='Имя' />
					<input type='tel' className='form-input' placeholder='Телефон' />
					<textarea
						rows='7'
						className='form-input form-textarea'
						placeholder='Введите текст'
					></textarea>
					<div className='form-file'>
						<label className='form-label'>
							Прикрепить файл с резюме
							<input type='file' />
						</label>
					</div>
					<div className='form-agreement'>
						<label className='form-checkbox-wrapper'>
							<input type='checkbox' />
							<div className='form-checkbox'></div>
						</label>
						<p className='form-text'>
							Я соглашаюсь на обработку{' '}
							<a href='' target='_blank' className='form-text form-text-green'>
								персональных данных
							</a>
						</p>
					</div>
					<button type='submit' className='form-submit'>
						Отправить заявку
					</button>
				</form>
			</div>
		</div>
	)
}

export default ModalJob
