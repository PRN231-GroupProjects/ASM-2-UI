/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
	Calendar,
	ChatbubbleEllipses,
	Cog,
	Cube,
	DocumentText,
	FileTrayFull,
	Grid,
	Heart,
	Layers,
} from "react-ionicons";
const Sidebar = () => {
	const [activePage, setActivePage] = useState("home");
	// const indicatorDiv = useRef<HTMLDivElement>(null);

	const sidebarItems = [
		{ title: "home", icon: Grid },
		{ title: "products", icon: Cube },
		{ title: "favourites", icon: Heart },
		{ title: "messages", icon: ChatbubbleEllipses },
		{ title: "applications", icon: Layers },
		{ title: "archive", icon: FileTrayFull },
		{ title: "documents", icon: DocumentText },
		{ title: "calendar", icon: Calendar },
	];

	const handleItemClick = (item: any) => {
		setActivePage(item.title);

		// const offsetTop = e.currentTarget.offsetTop;
		// const scrollTop = document.documentElement.scrollTop;
		// const topPosition = `${offsetTop - scrollTop}px`;

		// if (indicatorDiv.current) {
		// 	indicatorDiv.current.style.top = topPosition;
		// }
	};
	return (
		<div className="pt-10 fixed left-0 top-[0] w-[76px] h-[calc(100vh)] shadow-sm bg-white border-r border-gray-200 flex items-center flex-col gap-5">
			{/* <div
				className="w-[3px] h-[45px] bg-[#4379EE] absolute top-0 right-0 transition-all duration-300"
				ref={indicatorDiv}
			></div> */}
			{sidebarItems.map((item) => (
				<div
					key={item.title}
					className="cursor-pointer w-full py-2 flex items-center justify-center"
					onClick={() => handleItemClick(item)}
				>
					<item.icon
						color={activePage === item.title ? `#4379EE` : `#bfbfbf`}
						width="23px"
						height="23px"
						cssClasses={"transition-all duration-300"}
					/>
				</div>
			))}
			<div className="cursor-pointer absolute bottom-2 w-full border-r-[3px] py-2 border-transparent flex items-center justify-center">
				<Cog
					color={"#bfbfbf"}
					width="25px"
					height="25px"
				/>
			</div>
		</div>
	);
};

export default Sidebar;
