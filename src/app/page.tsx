import type { Metadata } from "next";

export const generateMetadata: () => Metadata = () => ({
	title: "Prepsage | All",
	description: "",
	keywords: "",
});

const page = () => {
	return (
		<>
			<div className="">Home Page</div>
		</>
	);
};

export default page;
