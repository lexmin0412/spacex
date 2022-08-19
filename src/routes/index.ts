import Home from "./home"
import Blogs from './blogs'

const routeList = [
	{
		path: '/',
		component: Home,
		children: []
	},
	{
		path: '/blogs',
		component: Blogs,
		children: []
	}
]

export default routeList
