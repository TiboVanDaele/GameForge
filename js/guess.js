const correctAnswer = "hollow knight";
let attempts = 1;
const maxAttempts = 5;

// Blur levels
const blurLevels = [20, 15, 10, 5, 0];

function submitGuess() {
    const input = document.getElementById("guessInput");
    const feedback = document.getElementById("feedback");
    const image = document.getElementById("gameImage");
    const attemptsText = document.getElementById("attempts");

    const guess = input.value.toLowerCase().trim();

    if (!guess) return;

    if (guess === correctAnswer) {
        feedback.textContent = "✅ Correct!";
        image.style.filter = "blur(0px)";
        return;
    }

    attempts++;

    if (attempts > maxAttempts) {
        feedback.textContent = `❌ Game over! It was "${correctAnswer}"`;
        image.style.filter = "blur(0px)";
        attemptsText.textContent = `Attempt ${maxAttempts}/${maxAttempts}`;
        return;
    }

    // Update blur
    image.style.filter = `blur(${blurLevels[attempts - 1]}px)`;

    // Update attempts
    attemptsText.textContent = `Attempt ${attempts}/${maxAttempts}`;

    feedback.textContent = "❌ Foute Gok!";

    input.value = "";
}