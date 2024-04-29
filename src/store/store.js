import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as blindModeReducer } from './blind-mode/blind-mode.slice'
import { reducer as modalsReducer } from './modals/modals.slice'

const reducers = combineReducers({
	blindMode: blindModeReducer,
	modals: modalsReducer,
})

export const store = configureStore({
	reducer: reducers,
})
