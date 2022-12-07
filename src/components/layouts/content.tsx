interface ContentProps {
	children: React.ReactNode
}

export default function Content(props: ContentProps) {
	return (
		<div className="flex-1"
			// style={{
			// 	minHeight: 'calc(100vh - 128px)',
			// }}
		>
			{props.children}
		</div>
	)
}
