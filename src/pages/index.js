import React,{useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne,
homeObjTwo,

homeObjFour
} from '../components/InfoSection/Data';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Home = () => {
	const [isOpen,setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen);
	};


     
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />	
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjFour} />
			
		</>
	);
};

export default Home;
