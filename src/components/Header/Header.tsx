import Link from "next/link";
import ThemeToggleButton from "../ThemeToggleButton";
import { PlusIcon } from "lucide-react";

const Header = () => {
	return (
		<header
			className="fixed right-0 left-0 border-b shadow"
			aria-label="app-header">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
				<Link href={"/"}>
					<h1
						className="text-2xl font-semibold"
						aria-label="App Name">
						User CURD App
					</h1>
				</Link>

				<nav className="flex items-center gap-4">
					<Link href={"/"}>Home</Link>

					<Link
						className="flex gap-2"
						href={"/student/create"}>
						<PlusIcon /> Student
					</Link>

					<Link
						className="flex gap-2"
						href={"/teacher/create"}>
						<PlusIcon /> Teacher
					</Link>

					<ThemeToggleButton />
				</nav>
			</div>
		</header>
	);
};

export default Header;
