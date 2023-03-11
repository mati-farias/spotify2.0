import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/login.module.css';

type Props = {
	session: {
		status: string;
		data: any;
	};
};

function Login({ session }: Props) {
	// const session = useSession();
	const { status } = session;

	return (
		<div className={styles.container}>
			<Head>
				<title>NextAuth.js Spotify example</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome,{' '}
					{status === 'authenticated'
						? session.data.user?.name || 'friend'
						: 'stranger'}
					!
				</h1>
				<p>
					{session.status !== 'authenticated' && (
						<button
							className={styles.button}
							type='button'
							style={{ '--accent-color': '#15883e' }}
							onClick={() => signIn('spotify')}
							disabled={status === 'loading'}>
							Sign in with Spotify
						</button>
					)}
				</p>
				<p>
					<a href='https://github.com/davidjones418/next-auth-spotify-example#readme'>
						What is this?
					</a>
				</p>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by{' '}
					<span className={styles.logo}>
						<Image
							src='/vercel.svg'
							alt='Vercel Logo'
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
}

export default Login;
