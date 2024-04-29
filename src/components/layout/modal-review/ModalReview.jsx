import { useActions } from '../../../hooks/useActions'

const ModalReview = () => {
	const { closeReview } = useActions()

	return (
		<div className='modal-bg'>
			<div className='modal'>
				<button className='modal-close' onClick={() => closeReview()}></button>
				<div className='modal-header'>
					<h2 className='modal-title'>Оставить отзыв</h2>
					<p className='paragraph'>Заполните поля ниже, чтобы оставить отзыв</p>
				</div>
				<form action='#' className='form'>
					<input type='text' className='form-input' placeholder='Имя' />
					<textarea
						rows='7'
						className='form-input form-textarea'
						placeholder='Введите текст'
					></textarea>
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
						Оставить отзыв
					</button>
				</form>
			</div>
		</div>
	)
}

export default ModalReview
