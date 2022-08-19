export default function Tools() {

	const tools = [
		{
			name: '@lexmin0412/gcm',
			description: 'a local git user config manager',
			url: 'https://github.com/lexmin0412/gcm',
		}
	]

	return (
		<div>
			<div>
				following tools are created and mainained by me:
			</div>
			<div>
				{
					tools.map((lib: any) => {
						return (
							<li key={lib.name}>
								{lib.name}
							</li>
						)
					})
				}
			</div>
		</div>
	)
}
