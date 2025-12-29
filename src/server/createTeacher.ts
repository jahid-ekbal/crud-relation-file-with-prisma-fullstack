"use server";

import { TeacherFormType } from "@/lib/formType";
import { Prisma } from "../../generated/prisma/client";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

const createTeacher = async (atData: TeacherFormType) => {
	try {
		await prisma.teacherTable.create({
			data: atData,
		});

		revalidatePath("/student/create");

		return {
			isSuccess: true,
			message: "Teacher created successfully",
		};
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			return {
				isSuccess: false,
				message: error.message,
			};
		}

		return {
			isSuccess: false,
			message: "Something went wrong!",
		};
	}
};

export default createTeacher;
