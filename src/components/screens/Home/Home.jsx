import MainBanner from './sections/main-banner/MainBanner'
import MainSlider from './sections/main-slider/MainSlider'
import Reviews from './sections/reviews/Reviews'
import Services from './sections/services/Services'
import Specialists from './sections/specialists/Specialists'
import WhyUs from './sections/why-us/WhyUs'

const Home = () => {
	return (
		<>
			<MainBanner />
			<MainSlider />
			<Services />
			<WhyUs />
			<Specialists />
			<Reviews />
		</>
	)
}

export default Home
