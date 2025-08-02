import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

const TopBar = () => {
	return (
		<>
			<nav className="sticky top-0 border border-b shadow-sm backdrop-blur-sm">
				<section className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
					<div className="font-bold">prepsage</div>
					<div className="flex items-center justify-center gap-4">
						<Button>Post</Button>
						<Avatar>
							<AvatarFallback>R</AvatarFallback>
						</Avatar>
					</div>
				</section>
			</nav>
		</>
	);
};

export default TopBar;
