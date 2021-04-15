import Nav from './Nav.js';
import Footer from './Footer.js';

const Layout = ({children}) => {
	return (
		<>
			<Nav/>
			{ children }
		</>
	)
}

export default Layout