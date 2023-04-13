import GlassPane from '@/components/GlassPane';
import Sidebar from '@/components/SIdebar';
import '@/styles/global.css';

export const metadata = {
	title: 'Project App',
	description: 'This is the Auth Page',
};

export default function DashboardRootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='h-screen w-screen rainbow-mesh p-6'>
				<GlassPane className='w-full h-full flex p-3 space-x-3'>
					<Sidebar />
					<main className='w-full'> {children}</main>
				</GlassPane>
				<div id='modal'></div>
			</body>
		</html>
	);
}
