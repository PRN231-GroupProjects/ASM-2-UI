/* eslint-disable @typescript-eslint/no-explicit-any */
import Sidebar from "../components/Siebar";

interface Props {
	children: any;
}

const Layout = ({ children }: Props) => {
	return (
		<div className="w-screen bg-slate-100 relative h-screen overflow-hidden">
			<Sidebar />
			{/* <Navbar /> */}
			<div className="w-full h-full ml-[76px] mt-[30px] border-t border-gray-200 px-6 py-3 box-border flex flex-col">
				{children}
			</div>
		</div>
	);
};

export default Layout;
