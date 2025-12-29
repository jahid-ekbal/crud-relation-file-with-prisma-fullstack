"use client";

import { StudentFormType } from "@/lib/formType";
import { studentFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, SendIcon, SparklesIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "./shadcnui/button";
import { CardContent, CardFooter } from "./shadcnui/card";
import { Field, FieldError, FieldLabel } from "./shadcnui/field";
import { Input } from "./shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcnui/select";
import { Separator } from "./shadcnui/separator";
import { TeacherTable } from "../../generated/prisma/client";
import { useRouter } from "next/navigation";
import createStudent from "@/server/createStudent";
import { toast } from "react-toastify";

type StudentFormProps = {
	teachersInfo: TeacherTable[];
};

const AddStudentForm = ({ teachersInfo }: StudentFormProps) => {
	const { push } = useRouter();

	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
		reset,
	} = useForm({
		resolver: zodResolver(studentFormSchema),
		defaultValues: {
			sFullName: "",
			sEmail: "",
			sGender: "",
			sPhoneNumber: "",
			teacherTableTId: "",
		},
		mode: "all",
	});

	const addStudentHandler = async (asData: StudentFormType) => {
		const { isSuccess, message } = await createStudent(asData);

		await new Promise<void>((r) => setTimeout(r, 1000));

		if (isSuccess) {
			toast.success(message);

			reset();

			push("/");
		} else {
			toast.error(message);
		}
	};

	return (
		<>
			<CardContent className="pb-3">
				<form
					onSubmit={handleSubmit(addStudentHandler)}
					className="grid gap-4"
					noValidate>
					<Controller
						name="sFullName"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
								<Input
									{...field}
									id={field.name}
									placeholder="Enter your full name"
									aria-invalid={fieldState.invalid}
									autoComplete="name"
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Controller
						name="sEmail"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Email</FieldLabel>
								<Input
									{...field}
									id={field.name}
									type="email"
									placeholder="Enter your Email"
									aria-invalid={fieldState.invalid}
									autoComplete="email"
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Controller
						name="sGender"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Gender</FieldLabel>
								<Select
									name={field.name}
									value={field.value}
									onValueChange={field.onChange}>
									<SelectTrigger
										id={field.name}
										aria-invalid={fieldState.invalid}>
										<SelectValue placeholder="Select your Gender" />
									</SelectTrigger>
									<SelectContent position="item-aligned">
										<SelectItem value="male">Male</SelectItem>
										<SelectItem value="female">Female</SelectItem>
										<SelectItem value="others">Others</SelectItem>
									</SelectContent>
								</Select>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Controller
						name="sPhoneNumber"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
								<Input
									{...field}
									id={field.name}
									type="number"
									placeholder="Enter your phone number"
									aria-invalid={fieldState.invalid}
									autoComplete="cc-number"
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Controller
						name="teacherTableTId"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Teacher</FieldLabel>
								<Select
									name={field.name}
									value={field.value}
									onValueChange={field.onChange}>
									<SelectTrigger
										id={field.name}
										aria-invalid={fieldState.invalid}>
										<SelectValue placeholder="Select your Teacher" />
									</SelectTrigger>
									<SelectContent position="item-aligned">
										{teachersInfo.map(({ tId, tFullName, tSubject }) => (
											<SelectItem
												key={tId}
												value={tId}>
												{tFullName}
												<span className="capitalize">({tSubject})</span>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Button
						className="cursor-pointer"
						type="submit"
						disabled={isSubmitting}>
						{isSubmitting ? (
							<>
								<Loader2Icon className="animate-spin" /> Submitting..
							</>
						) : (
							<>
								<SendIcon /> Submit
							</>
						)}
					</Button>
				</form>
			</CardContent>

			<Separator />

			<CardFooter className="grid pt-3">
				<Button
					type="submit"
					className="cursor-pointer">
					<SparklesIcon />
					Generate
				</Button>
			</CardFooter>
		</>
	);
};

export default AddStudentForm;
