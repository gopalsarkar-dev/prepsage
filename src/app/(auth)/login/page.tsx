import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";

export const generateMetadata: () => Metadata = () => ({
	title: "Prepsage | Login",
	description: "",
	keywords: "",
});

const page = () => {
	return (
		<>
			<LoginForm />
		</>
	);
};

export default page;
