"use client";

import { LoginFormType } from "@/lib/type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/lib/zodSchema";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const LoginForm = () => {
	const lForm = useForm<LoginFormType>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: { email: "", password: "" },
		mode: "all",
	});

	const handelLoginFn = (lInfo: LoginFormType) => {
		console.log(lInfo);
	};

	return (
		<>
			<div className="grid h-[85dvh] place-items-center">
				<Form {...lForm}>
					<form onSubmit={lForm.handleSubmit(handelLoginFn)}>
						<Card className="w-[320px]">
							<CardHeader className="grid gap-2">
								<CardTitle>Login to your account</CardTitle>
								<CardDescription>
									Enter your email and password below to login to your account.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-5">
								<FormField
									control={lForm.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													type="email"
													placeholder="enter your email..."
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={lForm.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Password</FormLabel>
											<FormControl>
												<Input
													type="password"
													placeholder="enter your password..."
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</CardContent>
							<CardFooter className="grid gap-2">
								<Button
									type="submit"
									className="w-full cursor-pointer">
									Login
								</Button>
								<div className="flex items-center justify-center gap-1.5 text-sm">
									Don&apos;t have an account?{" "}
									<Link
										href="/auth/signup"
										className="font-bold underline underline-offset-4">
										Sign up
									</Link>
								</div>
							</CardFooter>
						</Card>
					</form>
				</Form>
			</div>
		</>
	);
};

export default LoginForm;
