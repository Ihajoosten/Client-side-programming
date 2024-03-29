import { StringUtility } from "../../utilities/string-utility.js";
import User from "../../model/user-model";
import { generateJWT } from "../../services/auth-service.js";

export function index(req, res) {
  const validation = validateIndex(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ message: validation.message });
  }
  User.findOne({ username: req.body.username.toLowerCase() }, (error, user) => {
    if (error) {
      return res.status(500).json();
    }
    if (!user) {
      return res.status(401).json({message: "Username does not match", status: 401});
    }

    const passwordMatch = User.passwordMatches(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return res.status(401).json({message: "Password does not match", status: 401});
    }
    const token = generateJWT(user);
    return res.status(200).json({ token: token });
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
