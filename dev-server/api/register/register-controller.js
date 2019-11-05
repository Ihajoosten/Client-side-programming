import { StringUtility } from "../../utilities/string-utility.js";
import User from "../../model/user-model";

export function index(req, res) {
  const validation = validateIndex(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ message: validation.message });
  }

  const user = new User({
    username: req.body.username.toLowerCase(),
    password: req.body.password
  });
  user.save(error => {
    if (error) {
      if (error === 11000) {
        return res.status(403).json({ message: "Username is already taken" });
      }
      return res.status(500).json();
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

  return {
    isValid: StringUtility.isEmpty(errors),
    message: errors
  };
}
