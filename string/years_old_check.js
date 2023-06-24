function checkAge(dateOfBirth) {
    let today = new Date();
    let eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  
    if (dateOfBirth <= eighteenYearsAgo) {
      return "Allowed to pass";
    } else {
      return "Not allowed to pass";
    }
  }

    let dob = new Date(1990, 5, 15);
    console.log(checkAge(dob));