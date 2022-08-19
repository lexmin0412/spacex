import Home from "./home"
import Blogs from './blogs'
import Libs from "./libs"
import Tools from "./tools"

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
	},
	{
		path: '/libs',
		component: Libs,
		children: []
	},
	{
		path: '/tools',
		component: Tools,
		children: []
	}
]

export default routeList
