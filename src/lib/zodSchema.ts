import z from "zod";

export const teacherFormSchema = z.object({
	tFullName: z.string().min(6, "Full name must be 6 characters long"),
	tSubject: z.string().min(1, "Please select a subject"),
});

export const studentFormSchema = z.object({
	sFullName: z.string().min(6, "Full name must be 6 characters long"),
	sEmail: z.email("Invalide Email"),
	sGender: z.string().min(4, "Please select your gender"),
	sPhoneNumber: z.string().length(10, "Enter a valid number"),
	teacherTableTId: z.string().min(1, "Please select a teacher"),
});
