const patterns = {
    amount: {
      name: "Amount",
      keyPress: /^[0-9]+$/,
      validation: /^[0-9]+$/,
      errorMessage: "Amount must be a valid number."
    },
    creditCard: {
      name: "Credit Card",
      keyPress: /^[0-9 ]+$/,
      validation: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
      max: 19,
      errorMessage: "Credit card number must be XXXX XXXX XXXX XXXX format.",
      autoComplete: function (event) {
        if (
          !["deleteContentBackward", "deleteContentForward"].includes(
            event.inputType
          ) &&
          [4, 9, 14].includes(event.target.value.length)
        ) {
          event.target.value += " ";
        }
      }
    },
    fullName: {
      name: "Full Name",
      keyPress: /^[A-Za-z\sñÑáéíóúÁÉÍÓÚ]+$/,
      validation: /^[A-Za-z\sñÑáéíóúÁÉÍÓÚ]{7,}$/,
      errorMessage: "The name must contain at least 7 letters."
    },
    expiration: {
      name: "Expiration Date",
      keyPress: /^[0-9/]+$/,
      validation: /^(0[1-9]|1[0-2])\/\d{2}$/,
      max: 5,
      errorMessage: "Expiration must be MM/YY and not be expired.",
      autoComplete: function (event) {
        if (
          !["deleteContentBackward", "deleteContentForward"].includes(
            event.inputType
          ) &&
          event.target.value.length === 2
        ) {
          event.target.value += "/";
        }
      }
    },
    csv: {
      name: "Csv",
      keyPress: /^[0-9]+$/,
      validation: /^\d{3}$/,
      max: 3,
      errorMessage: "CSV must contain exactly 3 digits."
    },
    email: {
      name: "Email",
      keyPress: /^[^@\s]+$/,
      validation: /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/,
      errorMessage: "Please enter a valid email format."
    },
    phone: {
      name: "Phone",
      keyPress: /^[0-9]+$/,
      validation: /^(\+?\d{9,13})$/, 
      // Por ejemplo: 9 a 13 dígitos (soportando +34)
      errorMessage: "Please enter a valid phone number (9-13 digits)."
    }
  };