import React from "react";
import { Services as ServicesType } from "@root/typings";

type Services = {
	services: ServicesType;
};

const Shine = () => {
	return (
		<div className="flex-1 relative isolate overflow-hidden rounded-2xl bg-white/10 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-rose-100/10 before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent"></div>
	);
};

function services({ services }: Services) {
	return (
		<section className="gap-10 flex flex-col">
			<div className="mb-5">
				<h4 className="text-3xl md:text-4xl font-bold">Services</h4>
				{/* <p className="text-xl md:text-xl font-light">Our work spans brand identity, art direction, product design and packaging.</p> */}
				<p className="text-xl md:text-xl font-light">
					Transform your business with our comprehensive services.
				</p>
			</div>

			{services &&
				services.map((service: ServicesType, index: number) => (
					<div
						key={service._id}
						className={`col-span-2 flex gap-5 ${
							index % 2 === 0 ? "flex-row-reverse" : ""
						}`}
					>
						<p className="text-2xl md:text-3xl font-light">
							{service.title}
						</p>
						<Shine />
					</div>
				))}
		</section>
	);
}

export default services;
