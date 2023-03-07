import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/modules/Sidebar/Sidebar";

export default function Home() {
	return (
		<>
			<Head>
				<title>Spotify Clone!</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1>Spotify Clone!</h1>

			<main>
				<Sidebar />
				{/* Center */}
			</main>

			<div>{/*Music Player*/}</div>
		</>
	);
}
