import GlassPane from '@/components/GlassPane';
import '@/styles/global.css';
import { Sidebar } from 'react-feather';

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
				<GlassPane className='w-full h-full flex items-center justify-center'>
					<Sidebar />
					<main>{children}</main>
				</GlassPane>
			</body>
		</html>
	);
}
