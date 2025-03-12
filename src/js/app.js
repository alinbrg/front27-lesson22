const closeModalBtn = document.querySelector(".close-modal");
const closeDialogBtn = document.querySelectorAll(".close-dialog");
closeDialogBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		const dialog = btn.closest("dialog");
		dialog.close();
	});
});

closeModalBtn.addEventListener("click", () => {
	const modal = closeModalBtn.closest(".modal");
	modal.classList.remove("active");
});
const dialog = document.querySelector("#confirmation-dialog");

function formValidation() {
	const form = document.querySelector("#form");
	const emailInput = document.querySelector("#email");
	const nameInput = document.querySelector("#name");
	const passwordInput = document.querySelector("#password");
	const ageInput = document.querySelector("#age");
	const modal = document.querySelector("#reg-confirmation");
	const personalNumberInput = document.querySelector("#personal_number");
	const mobileNumberInput = document.querySelector("#mobile_number");
	const confirmPasswordInput = document.querySelector("#confirm-password");

	const showErrorMessage = (input, message) => {
		input.closest(".form-group").classList.remove("success");
		input.closest(".form-group").classList.add("error");
		input.closest(".form-group").querySelector(".error-message").textContent =
			message;
	};
	const showSuccessMessage = (input, message) => {
		input.closest(".form-group").classList.remove("error");
		input.closest(".form-group").classList.add("success");
		input.closest(".form-group").querySelector(".error-message").textContent =
			message;
	};

	const isNameValid = () => {
		const val = nameInput.value.trim();
		if (val === "") {
			showErrorMessage(nameInput, "Name is required");
			return false;
		} else if (val.length < 3) {
			showErrorMessage(nameInput, "Name is too short");
			return false;
		} else {
			showSuccessMessage(nameInput, "Name is valid");
			return true;
		}
	};
	const isEmailValid = () => {
		const val = emailInput.value.trim();
		const emailRegExp =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (val === "") {
			showErrorMessage(emailInput, "Email is required");
			return false;
		} else if (!emailRegExp.test(val)) {
			showErrorMessage(emailInput, "Email is not correct format");
			return false;
		} else if (!/@gmail\.com$/.test(val)) {
			showErrorMessage(emailInput, "Email must be gmail.com");
			return false;
		} else {
			showSuccessMessage(emailInput, "Email is valid");
			return true;
		}
	};
	const isAgeValid = () => {
		const val = ageInput.value.trim();
		if (Number(val) < 0 || Number(val) > 10) {
			showErrorMessage(ageInput, "Age must be between 0 and 10");
			return false;
		} else {
			showSuccessMessage(ageInput, "Age is valid");
			return true;
		}
	};

	const isPersonalNumberValid = () => {
		const val = personalNumberInput.value.trim();
		const personalNumberRegExp = /^\d{11}$/;
		if (val === "") {
			showErrorMessage(personalNumberInput, "Personal number is required");
			return false;
		} else if (!personalNumberRegExp.test(val)) {
			showErrorMessage(
				personalNumberInput,
				"Personal number must be numbers and 11 digits"
			);
			return false;
		} else {
			showSuccessMessage(personalNumberInput, "Personal number is valid");
			return true;
		}
	};

	const isMobileNumberValid = () => {
		const val = mobileNumberInput.value.trim();
		const mobileNumberRegExp = /^\d{9}$/;
		if (val === "") {
			showErrorMessage(mobileNumberInput, "Mobile number is required");
			return false;
		} else if (!mobileNumberRegExp.test(val)) {
			showErrorMessage(mobileNumberInput, "Mobile number is not correct");
			return false;
		} else {
			showSuccessMessage(mobileNumberInput, "Mobile number is valid");
			return true;
		}
	};

	const isConfirmPasswordValid = () => {
		const val = confirmPasswordInput.value.trim();
		const passwordVal = passwordInput.value.trim();
		if (val === "") {
			showErrorMessage(confirmPasswordInput, "Confirm password is required");
			return false;
		} else if (val !== passwordVal) {
			showErrorMessage(confirmPasswordInput, "Password does not match");
			return false;
		} else {
			showSuccessMessage(confirmPasswordInput, "Password is valid");
			return true;
		}
	};

	const isPasswordValid = () => {
		const val = passwordInput.value.trim();
		if (val === "") {
			showErrorMessage(passwordInput, "Password is required");
			return false;
		} else if (val.length < 6) {
			showErrorMessage(passwordInput, "Password is too short");
			return false;
		} else {
			showSuccessMessage(passwordInput, "Password is valid");
			return true;
		}
	};

	// 1. არსებულ ფორმში დაამატეთ 3 ახალი ველი personal-number, mobile-number, confirm-password

	// 2.  personal_number - ვალიდაცია:  სავალდებულოა, უნდა შეიცავდეს მხოლოდ რიცხვებს, შეყვანილი სიმბოლოების რაოდენობა უნდა იყოს 11 ის ტოლი.

	// 3.  mobile_number - ვალიდაცია: სავალდებულოა, უნდა შეიცავდეს მხოლოდ რიცხვებს, შეყვანილი სიმბოლოების რაოდენობა უნდა იყოს 9-ის ტოლი.

	// 4.  confirm-password- ვალიდაცია: სავალდებულოა,  უნდა ემთხვეოდეს პაროლს

	// 5.  უკვე არსებულ პაროლის ველზე ვალიდაცია: სავალდებულოა, უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს

	nameInput.addEventListener("input", isNameValid);
	emailInput.addEventListener("input", isEmailValid);
	ageInput.addEventListener("input", isAgeValid);
	personalNumberInput.addEventListener("input", isPersonalNumberValid);
	mobileNumberInput.addEventListener("input", isMobileNumberValid);
	passwordInput.addEventListener("input", isPasswordValid);
	confirmPasswordInput.addEventListener("input", isConfirmPasswordValid);

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const nameValid = isNameValid();
		const emailValid = isEmailValid();
		const ageValid = isAgeValid();
		const personalNumberValid = isPersonalNumberValid();
		const mobileNumberValid = isMobileNumberValid();
		const passwordValid = isPasswordValid();
		const confirmPasswordValid = isConfirmPasswordValid();

		if (
			nameValid &&
			emailValid &&
			ageValid &&
			personalNumberValid &&
			mobileNumberValid &&
			passwordValid &&
			confirmPasswordValid
		) {
			console.log("Form is valid");
			//  form.submit();
			// modal.classList.add("active");
			dialog.showModal();
			// form.reset()
		}
	});
}
formValidation();

// promise
// const myPromise = new Promise((resolve, reject) => {
// 	if (false) {
// 		resolve("Promise is resolved");
// 	} else {
// 		reject("Promise is rejected");
// 	}
// });

// myPromise
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// ajax
function requestFunctions() {
	const createUserUrl = "https://borjomi.loremipsum.ge/api/register", //method POST  ყველა ველი სავალდებულო
		getAllUsersUrl = "https://borjomi.loremipsum.ge/api/all-users", //method GET
		getSingleUserUrl = "https://borjomi.loremipsum.ge/api/get-user/120 ", //id, method  GET
		updateUserUrl = "https://borjomi.loremipsum.ge/api/update-user/145 ", //id, method PUT  ყველა ველი სავალდებულო
		deleteUserUrl = "https://borjomi.loremipsum.ge/api/delete-user/"; //id, method DELETE

	const regForm = document.querySelector("#registration-form"),
		userName = document.querySelector("#user_name"),
		userSurname = document.querySelector("#user_surname"),
		userEmail = document.querySelector("#user_email"),
		userPhone = document.querySelector("#user_phone"),
		userPersonalID = document.querySelector("#user_personal-id"),
		userZip = document.querySelector("#user_zip-code"),
		userGender = document.querySelector("#user_gender"),
		// user id ფორმში, რომელიც გვჭირდება დაედითებისთვის
		user_id = document.querySelector("#user_id");

	const userExample = {
		first_name: "satesto",
		last_name: "text",
		phone: "123456789",
		id_number: "12345678909",
		email: "text121324@gmail.com",
		gender: "male",
		zip_code: "1245",
	};

	// fetch
	const getAllUsers = async () => {
		// fetch("https://borjomi.loremipsum.ge/api/all-users")
		// 	.then((response) => {
		// 		return response.json();
		// 	})
		// 	.then((data) => {
		// 		console.log(data);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	})
		// 	.finally(() => {
		// 		console.log("finally");
		// 	});

		// async await
		try {
			const response = await fetch(
				"https://borjomi.loremipsum.ge/api/all-users"
			);
			const data = await response.json();
			console.log(data);

			// render users table
		} catch (error) {
			console.log(error);
		} finally {
			console.log("finally");
		}
	};

	getAllUsers();

	const registerUser = async (user) => {
		try {
			const response = await fetch(
				"https://borjomi.loremipsum.ge/api/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user),
				}
			);

			const data = await response.json();
			// regForm.reset();

			dialog.showModal();
			console.log(data);
			getAllUsers();
		} catch (error) {
			console.log(error);
		}
	};

	const getUserInfo = async (id) => {
		try {
			const response = await fetch(
				`https://borjomi.loremipsum.ge/api/get-user/${id}`
			);
			const data = await response.json();
			console.log(data);
			// userName.value = data.users.first_name;
			// userSurname.value = data.users.last_name;
			// userPhone.value = data.users.phone;
			// userPersonalID.value = data.users.id_number;
			// userEmail.value = data.users.email;
			// userGender.value = data.users.gender;
			// userZip.value = data.users.zip_code;
		} catch (error) {
			console.log(error);
		}
	};

	const deleteUser = async (id) => {
		try {
			const response = await fetch(
				`https://borjomi.loremipsum.ge/api/delete-user/${id}`,
				{
					method: "DELETE",
				}
			);
			const data = await response.json();
			console.log(data);
			// el.remove()
		} catch (error) {
			console.log(error);
		}
	};

	regForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const valid = true;
		if (valid) {
			const user = {
				first_name: userName.value,
				last_name: userSurname.value,
				phone: userPhone.value,
				id_number: userPersonalID.value,
				email: userEmail.value,
				gender: userGender.value,
				zip_code: userZip.value,
			};
			registerUser(user);
		}
	});

	// info button click
	// getUserInfo(157);
	// delete btn click
	// deleteUser(157);
}

requestFunctions();
