const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  console.log("Received signup request:", req.body);
  // Extract data from request body
  const { email, password, name, postCode, address } = req.body;

  try {
    //check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }
    // Hash password for security
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user instance
    const user = new User({
      email,
      password: hashedPassword,
      name,
      postCode,
      address
    });

    // Save the user to the database
    const result = await user.save();

    // Respond with success message and the user ID
    res.status(201).json({ userId: result._id, message: 'User created!' });
  } catch (error) {
    console.error('Error creating user:', error)
    // Handle errors (like duplicate email)
    res.status(500).json({ message: 'Error creating user' });
  }
};

exports.login = async (req, res) => {
  // Extract login credentials from request body
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed: Email not found' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Authentication failed:Incorrect Password' });
    }

    // Respond with the user ID (Session management not included)
    res.status(200).json({ userId: user._id });
  } catch (error) {
    // Handle potential errors
    res.status(500).json({ message: 'Error logging in' });
  }
};

//changepassword

exports.changePassword = async (req, res) => {
  // Extract changepassword credentials from request body
  const { email, newpassword } = req.body;
  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const hashedPassword = await bcrypt.hash(newpassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};