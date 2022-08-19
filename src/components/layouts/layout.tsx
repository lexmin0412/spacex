import Header from "./header"
import Content from "./content"
import Footer from "./footer"

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
	return (
		<div>
			<Header />
			<Content>
				{props.children}
			</Content>
			<Footer />
		</div>
	)
}
