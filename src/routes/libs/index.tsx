export default function Libs() {

	const libs = [
		{
			name: '@lexmin0412/notifier',
			description: 'a webhook notification lib, support qywx.',
			url: 'https://github.com/lexmin0412/notifier',
		},
		{
			name: 'utils-tim',
			description: 'a tim utils package',
			url: 'https://github.com/lexmin0412/utils-tim'
		},
		{
			name: '@youtils/logx',
			description: 'a standard log lib',
			url: 'https://github.com/lexmin0412/youtils-logx'
		},
		{
			name: '@tarox/plugin-internal',
			description: 'a plugin lib for internal',
			url: 'https://github.com/lexmin0412/taro-plugin-internal'
		}
	]

	return (
		<div>
			<div>
				following libs are created and mainained by me:
			</div>
			<div>
				{
					libs.map((lib: any) => {
						return (
							<div key={lib.name}>
								<li>{lib.name}</li>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}
