   
import React from 'react'
//import SigninPage from '../../pages/signin';

import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SidebarElements';
const Sidebar = ({isOpen,toggle}) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>

			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="weather" onClick={toggle}>Visualization</SidebarLink>
					<SidebarLink to="bar" onClick={toggle}>Chart</SidebarLink>
					<SidebarLink to="maps" onClick={toggle}>Map</SidebarLink>

				</SidebarMenu>
				
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
