import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	job: false,
	reception: false,
	review: false,
}

export const modalsSlice = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		openJob: (state, action) => {
			state.job = true
		},
		closeJob: (state, action) => {
			state.job = false
		},
		openReception: (state, action) => {
			state.reception = true
		},
		closeReception: (state, action) => {
			state.reception = false
		},
		openReview: (state, action) => {
			state.review = true
		},
		closeReview: (state, action) => {
			state.review = false
		},
	},
})

export const { actions, reducer } = modalsSlice
