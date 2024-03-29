import { ImageResponse } from '@vercel/og'

export const config = {
	runtime: 'edge',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 128,
					background: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					textAlign: 'center',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				Pixelmind Studio
			</div>
		),
		{
			width: 1200,
			height: 600,
		}
	)
}
