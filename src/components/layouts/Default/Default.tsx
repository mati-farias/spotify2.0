import Footer from "@/components/modules/Footer/Footer";
import Sidebar from "@/components/modules/Sidebar/Sidebar";

type Props = {
	children: React.ReactNode;
};

function Default({ children }: Props) {
	return (
		<>
			<div className='w-full h-full'>
				<div className='min-h-screen w-full flex '>
					<Sidebar className='bg-blue-300 w-1/3 h-auto' />
					<div className='h-auto w-2/3 bg-green-300'>{children}</div>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Default;
