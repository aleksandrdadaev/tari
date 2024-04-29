import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	active: false,
	fontSize: 1,
	colorTheme: 1,
	images: true,
}

export const blindModeSlice = createSlice({
	name: 'blind-mode',
	initialState,
	reducers: {
		toggleBlindMode: (state, action) => {
			state.active = !state.active
		},
		changeFontSize: (state, action) => {
			state.fontSize = action.payload
		},
		changeColorTheme: (state, action) => {
			state.colorTheme = action.payload
		},
		toggleImages: (state, action) => {
			state.images = !state.images
		},
	},
})

export const { actions, reducer } = blindModeSlice
