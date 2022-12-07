interface ContainerProps {
	children: React.ReactElement
}

export default function Container(props: ContainerProps) {
	return (
		<div className="px-6">
			{props.children}
		</div>
	)
}
