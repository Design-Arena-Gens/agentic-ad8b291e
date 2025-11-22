// Example 1: Simple Counter
function runExample1() {
    const output = document.getElementById('output1');
    output.classList.add('active');
    output.innerHTML = '';

    let result = '';
    let counter = 1;

    // Simulate Do...Until loop
    do {
        result += `العدد: ${counter}\n`;
        counter = counter + 1;
    } while (counter <= 5); // Continue until counter > 5

    result += `\n✅ انتهت الحلقة عندما أصبح العداد = ${counter} (أكبر من 5)`;

    output.textContent = result;
}

// Example 2: User Input
function runExample2() {
    const output = document.getElementById('output2');
    output.classList.add('active');
    output.innerHTML = '';

    let result = '';
    let number;
    let attempts = 0;

    // Simulate Do...Until loop
    do {
        number = prompt('أدخل رقماً بين 1 و 10:');
        attempts++;

        if (number === null) {
            output.textContent = '❌ تم إلغاء العملية';
            return;
        }

        number = parseInt(number);
        result += `المحاولة ${attempts}: أدخلت ${number}`;

        if (number < 1 || number > 10 || isNaN(number)) {
            result += ' ❌ غير صحيح!\n';
        } else {
            result += ' ✅ صحيح!\n';
        }

    } while (number < 1 || number > 10 || isNaN(number)); // Continue until valid

    result += `\n🎉 أحسنت! أدخلت رقماً صحيحاً بعد ${attempts} محاولة/محاولات`;
    output.textContent = result;
}

// Example 3: Sum Calculator
function runExample3() {
    const output = document.getElementById('output3');
    output.classList.add('active');
    output.innerHTML = '';

    let result = '';
    let sum = 0;
    let num = 1;

    result += 'عملية الجمع:\n';
    result += '─────────────\n';

    // Simulate Do...Until loop
    do {
        sum = sum + num;
        result += `${num}: المجموع = ${sum}\n`;
        num = num + 1;
    } while (sum < 50); // Continue until sum >= 50

    result += '─────────────\n';
    result += `✅ توقفت الحلقة عندما وصل المجموع إلى ${sum}\n`;
    result += `📊 تم جمع ${num - 1} أرقام`;

    output.textContent = result;
}

// Example 4: Guessing Game
let secretNumber;
let gameAttempts;

function runExample4() {
    const output = document.getElementById('output4');
    output.classList.add('active');
    output.innerHTML = '';

    secretNumber = Math.floor(Math.random() * 20) + 1;
    gameAttempts = 0;

    output.textContent = '🎮 اللعبة بدأت! خمّن الرقم بين 1 و 20\n';

    playGuessingGame();
}

function playGuessingGame() {
    const output = document.getElementById('output4');
    let guess;

    do {
        guess = prompt('خمّن الرقم (بين 1 و 20):');

        if (guess === null) {
            output.textContent += '\n❌ تم إلغاء اللعبة\nالرقم السري كان: ' + secretNumber;
            return;
        }

        guess = parseInt(guess);
        gameAttempts++;

        if (isNaN(guess)) {
            output.textContent += `\nالمحاولة ${gameAttempts}: أدخل رقماً صحيحاً!`;
        } else if (guess < secretNumber) {
            output.textContent += `\nالمحاولة ${gameAttempts}: ${guess} - الرقم أكبر! ⬆️`;
        } else if (guess > secretNumber) {
            output.textContent += `\nالمحاولة ${gameAttempts}: ${guess} - الرقم أصغر! ⬇️`;
        } else {
            output.textContent += `\nالمحاولة ${gameAttempts}: ${guess} - صحيح! 🎉\n`;
            output.textContent += `\n✨ ممتاز! وجدت الرقم ${secretNumber} في ${gameAttempts} محاولة/محاولات`;
            return;
        }

    } while (guess !== secretNumber); // Continue until correct guess
}

// Custom Loop Playground
function runCustomLoop() {
    const output = document.getElementById('customOutput');
    output.classList.add('active');

    const start = parseInt(document.getElementById('startNum').value);
    const end = parseInt(document.getElementById('endNum').value);
    const step = parseInt(document.getElementById('stepNum').value);

    if (isNaN(start) || isNaN(end) || isNaN(step)) {
        output.textContent = '❌ الرجاء إدخال أرقام صحيحة';
        return;
    }

    if (start >= end) {
        output.textContent = '❌ الرقم الابتدائي يجب أن يكون أصغر من النهائي';
        return;
    }

    let result = `تنفيذ الحلقة من ${start} إلى ${end} بخطوة ${step}:\n`;
    result += '═══════════════════════════════\n';

    let counter = start;
    let iterations = 0;

    // Simulate Do...Until loop
    do {
        result += `🔄 التكرار ${iterations + 1}: العدد = ${counter}\n`;
        counter = counter + step;
        iterations++;

        // Safety limit
        if (iterations > 100) {
            result += '\n⚠️ توقفت الحلقة بعد 100 تكرار (حد الأمان)';
            break;
        }
    } while (counter <= end); // Continue until counter > end

    result += '═══════════════════════════════\n';
    result += `✅ انتهت الحلقة بعد ${iterations} تكرار`;

    output.textContent = result;
}

// Quiz Function
function checkAnswer(quizNum, answer) {
    const resultDiv = document.getElementById(`quiz${quizNum}Result`);

    if (quizNum === 1) {
        if (answer === 1) {
            resultDiv.className = 'quiz-result correct';
            resultDiv.textContent = '✅ إجابة صحيحة! الحلقة Do...Until تنفذ الكود مرة واحدة على الأقل، حتى لو كان الشرط محققاً من البداية. لأن x = 10 بالفعل، سيطبع "مرحبا" مرة واحدة ثم يتوقف.';
        } else {
            resultDiv.className = 'quiz-result incorrect';
            if (answer === 0) {
                resultDiv.textContent = '❌ خطأ! الحلقة Do...Until تنفذ الكود مرة واحدة على الأقل قبل فحص الشرط.';
            } else if (answer === 10) {
                resultDiv.textContent = '❌ خطأ! الشرط (x >= 10) محقق من البداية، لذا ستتوقف الحلقة بعد التنفيذ الأول.';
            } else {
                resultDiv.textContent = '❌ خطأ! الحلقة ستتوقف لأن الشرط (x >= 10) سيتحقق بعد التنفيذ الأول.';
            }
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('تطبيق الحلقة التكرارية Do...Until جاهز! 🚀');
});