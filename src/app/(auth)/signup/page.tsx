import SignupForm from "@/components/auth/SignupForm";
import { Metadata } from "next";

export const generateMetadata: () => Metadata = () => ({
	title: "Prepsage | Signup",
	description: "",
	keywords: "",
});

const page = () => {
	return (
		<>
			<SignupForm />
		</>
	);
};

export default page;
