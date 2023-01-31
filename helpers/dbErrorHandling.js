const uniqueMessage = (error) => {
  let output;
  let field;
  try {
    console.log(error.message.split(":")[2]);
    let fieldName = error.message.split(":")[2];
    field = fieldName.split(" dup key")[0];
    field = field.substring(0, field.lastIndexOf("_"));

    req.flash("errors", [
      {
        msg: "An account with this " + field + " already exists.",
      },
    ]);
    // output =
    //   fieldName.charAt(0).toUpperCase() +
    //   fieldName.slice(1) +
    //   " already exists";
  } catch (ex) {
    output = `A user with that ${field} already exists, Signup with a different name. `;
    // output = ` Already exists`;
  }

  return output;
};

/**
 * Get the erroror message from error object
 */
exports.errorHandler = (error) => {
  let message = "";

  if (error.code) {
    switch (error.code) {
      case 11000:
      case 11001:
        message = uniqueMessage(error);
        break;
      default:
        message = "Something went wrong";
    }
  } else {
    for (let errorName in error.errorors) {
      if (error.errorors[errorName].message)
        message = error.errorors[errorName].message;
    }
  }

  return message;
};
