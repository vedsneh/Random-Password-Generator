const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const includeSymbolsEl = document.getElementById('includeSymbols');
const includeNumbersEl = document.getElementById('includeNumbers');
const includeUppercaseEl = document.getElementById('includeUppercase');
const includeLowercaseEl = document.getElementById('includeLowercase');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const strengthIndicator = document.getElementById('strengthIndicator').querySelector('span');

const symbols = '!@#$%^&*(){}[]=<>/,.';
const numbers = '0123456789';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';

function generatePassword() {
  let charSet = '';
  if (includeSymbolsEl.checked) charSet += symbols;
  if (includeNumbersEl.checked) charSet += numbers;
  if (includeUppercaseEl.checked) charSet += uppercase;
  if (includeLowercaseEl.checked) charSet += lowercase;

  if (!charSet) {
    alert('Please select at least one character set!');
    return '';
  }

  let password = '';
  const length = parseInt(lengthEl.value);

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  return password;
}

function checkStrength(pwd) {
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[\W_]/.test(pwd)) score++;

  switch (score) {
    case 0:
    case 1:
      return 'Weak';
    case 2:
      return 'Fair';
    case 3:
      return 'Good';
    case 4:
      return 'Strong';
  }
}

generateBtn.addEventListener('click', () => {
  const pwd = generatePassword();
  if (pwd) {
    passwordEl.value = pwd;
    strengthIndicator.textContent = checkStrength(pwd);
  }
});

copyBtn.addEventListener('click', () => {
  if (!passwordEl.value) return;
  navigator.clipboard.writeText(passwordEl.value)
    .then(() => {
      copyBtn.textContent = '✔️';
      setTimeout(() => (copyBtn.textContent = '📋'), 1500);
    })
    .catch(() => alert('Failed to copy!'));
});

