export const loginValidation = (email, password) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let validation = {
    valid: true,
    message: "",
  };

  if (password.length < 8) {
    validation.valid = false;
    validation.message = "Please enter a valid password.";
  }

  if (password.length === 0) {
    validation.valid = false;
    validation.message = "Please enter a password.";
  }

  if (!re.test(String(email).toLowerCase())) {
    validation.valid = false;
    validation.message = "Please enter a valid email address";
  }

  if (email.length === 0) {
    validation.valid = false;
    validation.message = "Please enter an email address.";
  }

  return validation;
};

export const errorTranslate = (code) => {
  switch (code.message) {
    case "EMAIL_NOT_FOUND":
      return "Email address not found, Please enter a valid email address.";
    case "INVALID_PASSWORD":
      return "Password is incorrect.";
    default:
      return "Something went wrong! Contact support.";
  }
};

export const validateToken = (token) => {};
