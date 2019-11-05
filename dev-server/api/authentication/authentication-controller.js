import { StringUtility } from '../../utilities/string-utility.js';

export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid) {
      return res.json({ message: validation.message });
    }
  
    const user = {
        username: req.body.username.toLowerCase(),
        password: req.body.password
    }
    console.log(user);
    return res.json()
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

 