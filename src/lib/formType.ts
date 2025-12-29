import z from "zod";
import { studentFormSchema, teacherFormSchema } from "./zodSchema";

export type TeacherFormType = z.infer<typeof teacherFormSchema>;

export type StudentFormType = z.infer<typeof studentFormSchema>;
