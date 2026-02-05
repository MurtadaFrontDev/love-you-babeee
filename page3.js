let clickCount = 0;

const questions = [
    "تصيرين الفلنتاين مال اني 🥺 حبابببببة 🥺🥺🥺",
    "شني شعدنا مو بكيفج",
    "يا هاي شبيج وتف 🤨🤨🤨",
    "طيط حسبالج بكيفج هي ؟؟؟ "
];

function handleNo() {
    clickCount++;

    // Elements
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const questionText = document.getElementById('questionText');

    // Grow Yes Button
    const yesStyles = window.getComputedStyle(yesBtn);
    const yesFontSize = parseFloat(yesStyles.fontSize);
    const yesPaddingTop = parseFloat(yesStyles.paddingTop);
    const yesPaddingLeft = parseFloat(yesStyles.paddingLeft);

    yesBtn.style.fontSize = (yesFontSize * 1.4) + 'px';
    yesBtn.style.paddingTop = (yesPaddingTop * 1.2) + 'px';
    yesBtn.style.paddingBottom = (yesPaddingTop * 1.2) + 'px';
    yesBtn.style.paddingLeft = (yesPaddingLeft * 1.2) + 'px';
    yesBtn.style.paddingRight = (yesPaddingLeft * 1.2) + 'px';

    // Shrink No Button
    const noStyles = window.getComputedStyle(noBtn);
    const noFontSize = parseFloat(noStyles.fontSize);
    noBtn.style.fontSize = (noFontSize * 0.7) + 'px';
    noBtn.style.padding = '5px 15px';
    noBtn.style.minWidth = 'auto';

    // Change Text
    if (clickCount < questions.length) {
        questionText.innerText = questions[clickCount];
    } else {
        // If they keep clicking, just keep the last one or do something funny
        questionText.innerText = "طيط حسبالج بكيفج هي ؟؟؟ ";
        noBtn.style.display = 'none'; // Optional: hide it eventually
    }
}

function goToPage4() {
    // Add a simple transition effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';

    setTimeout(() => {
        window.location.href = 'page4.html';
    }, 500);
}
