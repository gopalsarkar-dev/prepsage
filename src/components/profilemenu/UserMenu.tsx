import { User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import DarkMode from "../theme/DarkMode";

const UserMenu = () => {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger
					asChild
					className="cursor-pointer">
					<Avatar>
						<AvatarFallback>R</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					className="mt-6 w-56"
					align="end">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<Link
								href="/dashboard"
								className="flex items-center gap-2 font-semibold">
								<User />
								<span>Dashboard</span>
							</Link>
						</DropdownMenuItem>

						<DropdownMenuItem>
							<DarkMode />
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />

					<DropdownMenuItem>
						<div className="">Logout</div>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};

export default UserMenu;
