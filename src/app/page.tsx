import StudentCard from "@/components/StudentCard";
import prisma from "@/lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "All Student | User CURD App",
	description: "All student page of User CURD App",
};

const page = async () => {
	const allStudentData = await prisma.studentTable.findMany({
		include: {
			teacherTable: true,
		},
	});

	return (
		<section className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
			{allStudentData.map((info) => (
				<StudentCard
					key={info.sId}
					student={info}
				/>
			))}
		</section>
	);
};

export default page;
