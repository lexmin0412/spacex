import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom'
import routes from './index'
import Layout from './../components/layouts/layout'

export default function RouterEntry() {
	return (
		<BrowserRouter basename='/spacex'>
			<Layout>
				<Routes>
					{
						routes.map((route: any) => <Route key={route.path} path={route.path} element={<route.component />}>
						</Route>)
					}
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}
