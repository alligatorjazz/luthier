import { useForm } from "react-hook-form";

export default function ContactForm({ className }: { className?: string}) {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data: object) => console.log(data);
	// console.log(errors);

	return (
		<form onSubmit={() => handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="First Name"
				{...register("First name", { required: true, maxLength: 80 })}
			/>
			<input
				type="text"
				placeholder="Last name"
				{...register("Last name", { required: true, maxLength: 100 })}
			/>
			<input
				type="text"
				placeholder="Email"
				{...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
			/>
			<textarea {...register("Message", { required: true, max: 500, min: 21 })} />
			<input type="submit" />
		</form>
	);
}