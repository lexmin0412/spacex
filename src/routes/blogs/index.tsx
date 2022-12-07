import WujieReact from 'wujie-react'

export default function Blogs() {
	const BLOG_URL = import.meta.env.VITE_BLOG_URL
	return (
		<div className="w-full h-full">
			<WujieReact
				width="100%"
				height="100%"
				name="blog-app>"
				url={BLOG_URL}
				degrade={true}
				sync={true}
			></WujieReact>
		</div>
	)
}
