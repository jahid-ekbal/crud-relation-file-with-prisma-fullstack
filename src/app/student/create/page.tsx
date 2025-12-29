import AddStudentForm from "@/components/AddStudentForm";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Separator } from "@/components/shadcnui/separator";
import prisma from "@/lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Student | User CURD App",
	description: "Create student page of User CURD App",
};

const page = async () => {
	const allTeachers = await prisma.teacherTable.findMany();

	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-sm gap-2">
				<CardHeader className="grid place-items-center">
					<CardTitle className="text-2xl">Student Card</CardTitle>
				</CardHeader>

				<Separator />

				<AddStudentForm teachersInfo={allTeachers} />
			</Card>
		</section>
	);
};

export default page;
