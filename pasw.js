document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById('copy-btn').addEventListener('click', copyPassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = '';
    if (includeLowercase) allChars += lowercase;
    if (includeUppercase) allChars += uppercase;
    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;

    if (allChars === '') {
        alert('Please select at least one character set!');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomChar = allChars.charAt(Math.floor(Math.random() * allChars.length));
        password += randomChar;
    }

    document.getElementById('password').value = password;
}

function copyPassword() {
    const password = document.getElementById('password');
    const copyButton = document.getElementById('copy-btn');
    
    password.select();
    document.execCommand('copy');
    

    copyButton.textContent = 'Copied!';
    
    setTimeout(() => {
        copyButton.textContent = 'Copy';
    }, 2000);
}

