import GlassPane from '@/components/GlassPane';
import '@/styles/global.css';

export const metadata = {
	title: 'Project App',
	description: 'This is the Auth Page',
};

export default function AuthRootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='h-screen w-screen rainbow-mesh p-6'>
				<GlassPane className='w-full h-full flex items-center justify-center'>
					{children}
				</GlassPane>
			</body>
		</html>
	);
}
