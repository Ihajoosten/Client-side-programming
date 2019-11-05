import { StringUtility } from "../../utilities/string-utility.js";
import User from "../../model/user-model";

export function index(req, res) {
  const validation = validateIndex(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ message: validation.message });
  }

  const user = new User({
    username: req.body.username,
    password: req.body.password,
    first: req.body.first,
    last: req.body.last
  });
  user.save(error => {
    if (error) {
      if (error === 11000) {
        return res.status(403).json({ message: "Username is already taken" });
      }
      return res.status(500).json({ message: "Server error" });
    }
    return res.status(201).json();
  });
}

function validateIndex(body) {
  let errors = "";
  if (StringUtility.isEmpty(body.username)) {
    errors += "Username is required.";
  }

  if (StringUtility.isEmpty(body.password)) {
    errors += "Password is required.";
  }

  if (StringUtility.isEmpty(body.first)) {
    errors += "First name is required.";
  }

  if (StringUtility.isEmpty(body.last)) {
    errors += "Last name is required.";
  }

  return {
    isValid: StringUtility.isEmpty(errors),
    message: errors
  };
}
