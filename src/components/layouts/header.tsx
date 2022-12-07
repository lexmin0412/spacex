import { Link, useNavigate } from 'react-router-dom'
import IconGithub from '@/assets/github.svg'

const innerLinks = [
	{
		path: '/',
		text: 'Home',
	},
	{
		path: '/blogs',
		text: 'Blogs',
	},
	{
		path: '/libs',
		text: 'Libs',
	},
	{
		path: '/tools',
		text: 'Tools',
	},
]

const outerLinks = [
	{
		url: 'https://github.com/lexmin0412',
		icon: IconGithub
	}
]

export default function Header() {
	const naivgate = useNavigate()
	return (
		<div className="flex items-center justify-between h-16 leading-16 px-6">
			<div onClick={() => naivgate('/')}>Lexmin0412</div>
			<div className="flex items-center">
				<div className="inner-link flex">
					{innerLinks.map((link: any) => {
						return (
							<div
								className="mr-5 cursor-pointer"
								key={link.path}
								onClick={() => naivgate(link.path)}
							>
								{link.text}
							</div>
						)
					})}
				</div>
				<div className="outer-link">
					{outerLinks.map((link: any) => {
						return (
							<a
								key={link.url}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={link.icon}
									alt=""
								/>
							</a>
						)
					})}
				</div>
			</div>
		</div>
	)
}
