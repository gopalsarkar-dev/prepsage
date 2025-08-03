import Link from "next/link";
import UserMenu from "../profilemenu/UserMenu";
import { Button } from "../ui/button";

const TopBar = () => {
	return (
		<>
			<nav className="sticky top-0 border border-b shadow-sm backdrop-blur-sm">
				<section className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
					<Link
						href="/"
						className="font-bold">
						prepsage
					</Link>
					<div className="flex items-center justify-center gap-4">
						<Button>Post</Button>
						<UserMenu />
					</div>
				</section>
			</nav>
		</>
	);
};

export default TopBar;
