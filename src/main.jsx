import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout/Layout'

import './assets/styles/vars/theme.css'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<Layout />
		</Provider>
	</React.StrictMode>
)
