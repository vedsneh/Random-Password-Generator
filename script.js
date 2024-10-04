const passwordField = document.getElementById('password');
const generateBtn = document.getElementById('generateBtn');
const includeUppercase = document.getElementById('includeUppercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const passwordLength = document.getElementById('passwordLength');

// Character sets
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

// Function to generate password
function generatePassword() {
  let charset = lowercaseLetters;
  if (includeUppercase.checked) charset += uppercaseLetters;
  if (includeNumbers.checked) charset += numbers;
  if (includeSymbols.checked) charset += symbols;

  let generatedPassword = '';
  const length = parseInt(passwordLength.value, 10);
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    generatedPassword += charset[randomIndex];
  }

  passwordField.value = generatedPassword;
}

// Event listener for the button
generateBtn.addEventListener('click', generatePassword);
