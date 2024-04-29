import { useMemo } from 'react'
import { actions as blindModeActions } from '../store/blind-mode/blind-mode.slice'
import { actions as modalsActions } from '../store/modals/modals.slice'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

const rootActions = {
	...blindModeActions,
	...modalsActions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
