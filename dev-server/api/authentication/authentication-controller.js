import { StringUtility } from '../../utilities/string-utility.js';

export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.message });
    }

    return res.status(204).json()
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

 