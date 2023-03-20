import Link from "next/link"
import { FiArrowLeft, FiExternalLink } from "react-icons/fi"

function StudioNavbar(props: any) {
	return (
		<div>
			<div className="flex justify-between p-5 bg-black">

				<Link href="/" className="flex gap-3 items-center">
					<FiArrowLeft />
					Go to website
				</Link>

				<Link href="/api/preview" target="_blank" className="flex gap-3 items-center">
					Preview Mode
					<FiExternalLink />
				</Link>
			</div>

			{props.renderDefault(props)}
		</div>
	)
}

export default StudioNavbar
