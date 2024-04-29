import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home'
import Reviews from './screens/Reviews/Reviews'
import Equipments from './screens/Equipments/Equipments'
import Job from './screens/Job/Job'
import Documentation from './screens/Documentation/Documentation'
import Information from './screens/Information/Information'
import Questionnaire from './screens/Questionnaire/Questionnaire'
import Prices from './screens/Prices/Prices'
import Specialists from './screens/Specialists/Specialists'
import Contacts from './screens/Contacts/Contacts'
import Search from './screens/Search/Search'
import Map from './screens/Map/Map'
import Agreement from './screens/Agreement/Agreement'
import Therapy from './screens/Therapy/Therapy'
import Specialist from './screens/Specialist/Specialist'
import { goToTop } from 'react-scrollable-anchor'

const Router = () => {
	goToTop()
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/reviews' element={<Reviews />} />
			<Route path='/equipments' element={<Equipments />} />
			<Route path='/job' element={<Job />} />
			<Route path='/documentation' element={<Documentation />} />
			<Route path='/information' element={<Information />} />
			<Route path='/questionnaire' element={<Questionnaire />} />
			<Route path='/prices' element={<Prices />} />
			<Route path='/services/:id' element={<Therapy />} />
			<Route path='/specialists' element={<Specialists />} />
			<Route path='/specialists/:id' element={<Specialist />} />
			<Route path='/contacts' element={<Contacts />} />
			<Route path='/search' element={<Search />} />
			<Route path='/map' element={<Map />} />
			<Route path='/agreement' element={<Agreement />} />
			<Route path='*' element={<div>Not found</div>} />
		</Routes>
	)
}

export default Router
