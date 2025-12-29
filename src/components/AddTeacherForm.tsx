"use client";

import { TeacherFormType } from "@/lib/formType";
import { teacherFormSchema } from "@/lib/zodSchema";
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
import createTeacher from "@/server/createTeacher";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";
import fakerGenerator from "@/hooks/fakerGenerator";

const AddTeacherForm = () => {
	const [isGenerating, setIsGenerating] = useState(false);

	const { push } = useRouter();

	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
		reset,
	} = useForm({
		resolver: zodResolver(teacherFormSchema),
		defaultValues: {
			tFullName: "",
			tSubject: "",
		},
		mode: "all",
	});

	const addteacherhandler = async (atData: TeacherFormType) => {
		const { isSuccess, message } = await createTeacher(atData);

		await new Promise<void>((r) => setTimeout(r, 1000));

		if (isSuccess) {
			toast.success(message);

			reset();

			push("/student/create");
		} else {
			toast.error(message);
		}
	};

	const generateTeacher = async () => {
		setIsGenerating(true);

		const fakeData = fakerGenerator();

		await new Promise<void>((r) => setTimeout(r, 1000));

		console.log(fakeData);

		setIsGenerating(false);
	};

	return (
		<>
			<CardContent className="pb-3">
				<form
					onSubmit={handleSubmit(addteacherhandler)}
					className="grid gap-6"
					noValidate>
					<Controller
						name="tFullName"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
								<Input
									{...field}
									id={field.name}
									type="text"
									aria-invalid={fieldState.invalid}
									placeholder="Enter your full name"
									autoComplete="name"
								/>

								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Controller
						name="tSubject"
						control={control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Subject Name</FieldLabel>
								<Select
									name={field.name}
									value={field.value}
									onValueChange={field.onChange}>
									<SelectTrigger
										id={field.name}
										aria-invalid={fieldState.invalid}>
										<SelectValue placeholder="Select Subject" />
									</SelectTrigger>
									<SelectContent position="item-aligned">
										<SelectItem value="bengali">Bengali</SelectItem>
										<SelectItem value="english">English</SelectItem>
										<SelectItem value="math">Math</SelectItem>
										<SelectItem value="history">History</SelectItem>
										<SelectItem value="geography">Geography</SelectItem>
										<SelectItem value="astrology">Astrology</SelectItem>
										<SelectItem value="economics">Economics</SelectItem>
										<SelectItem value="javascript">Javascript</SelectItem>
										<SelectItem value="physics">Physics</SelectItem>
									</SelectContent>
								</Select>

								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Button
						type="submit"
						className="cursor-pointer"
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
					type="button"
					className="cursor-pointer"
					onClick={generateTeacher}
					disabled={isGenerating}>
					{isGenerating ? (
						<>
							<Loader2Icon className="animate-spin" /> Generating..
						</>
					) : (
						<>
							<SparklesIcon /> Generate
						</>
					)}
				</Button>
			</CardFooter>
		</>
	);
};

export default AddTeacherForm;
