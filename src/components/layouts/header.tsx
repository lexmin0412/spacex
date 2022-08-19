import { Link } from 'react-router-dom'
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
]

const outerLinks = [
	{
		url: 'https://github.com/lexmin0412',
		icon: IconGithub
	}
]

export default function Header() {
	return (
		<div className="flex items-center justify-between h-16 leading-16 px-6">
			<Link to='/'>Lexmin0412</Link>
			<div className='flex items-center'>
				<div className="inner-link">
					{
						innerLinks.map((link: any) => {
							return (
								<Link
									className='mr-5'
									key={link.path}
									to={link.path}
								>
									{link.text}
								</Link>
							)
						})
					}
				</div>
				<div className="outer-link">
					{
						outerLinks.map((link: any) => {
							return (
								<a
									key={link.url}
									href={link.url}
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={link.icon} alt="" />
								</a>
							)
						})
					}

				</div>
			</div>
		</div>
	)
}
