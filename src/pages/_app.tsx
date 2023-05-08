import "@/styles/globals.css";
import "@/styles/styles.scss";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import HeadMeta from "@components/head-meta";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<HeadMeta />
			<Component {...pageProps} />
		</>
	);
}
