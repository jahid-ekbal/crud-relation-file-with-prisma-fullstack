import { faker } from "@faker-js/faker/locale/en_IN";

const fakerGenerator = () => {
	const { person, internet, phone } = faker;

	const sex = person.sexType();

	const firstName = person.firstName(sex);

	const lastName = person.lastName(sex);

	const email = internet.email({ firstName, lastName });

	const phoneNumber = phone.number({ style: "national" });

	const fullName = `${firstName} ${lastName}`;

	return { sex, fullName, email, phoneNumber };
};

export default fakerGenerator;
