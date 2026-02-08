const button = document.getElementById("convertButton");
const inputText = document.getElementById("textinput");
const styleSelect = document.getElementById("style-select");
const resultSection = document.getElementById("result");
const clearButton = document.getElementById("clearbutton");

const validStyles = [
    "emoji", "genz", "reverse", "caps", "lowercase", "count",
    "aesthetic", "whisper", "shout", "alternate",
    "randomemoji", "highlight", "mirrorwords", "glitch", "sleepy",
    "sarcastic", "underline", "leet", "zalgosoft",
    "bubble", "rainbow", "typing", "echo2", "echo3"
];

button.addEventListener("click", () => {
    const text = inputText.value;
    const style = styleSelect.value;

    if (!validStyles.includes(style)) {
        resultSection.innerHTML = "<p style='color:red;'>Invalid style selected.</p>";
        return;
    }

    if (text.trim() === "") {
        resultSection.innerHTML = "<p style='color:red;'>Please enter some text to convert.</p>";
        return;
    }

    let output = "";

    switch (style) {
        case "emoji":
            output = emojiMode(text);
            break;
        case "genz":
            output = genzMode(text);
            break;
        case "reverse":
            output = reverseMode(text);
            break;
        case "caps":
            output = text.toUpperCase();
            break;
        case "lowercase":
            output = text.toLowerCase();
            break;
        case "count":
            output = countMode(text);
            break;
        case "alternate":
            output = alternateMode(text);
            break;
        case "shout":
            output = shoutMode(text);
            break;
        case "whisper":
            output = whisperMode(text);
            break;
        case "aesthetic":
            output = aestheticMode(text);
            break;
        case "mirrorwords":
            output = mirrorwordsMode(text);
            break;
        case "glitch":
            output = glitchMode(text);
            break;
        case "highlight":
            output = highlightMode(text);
            break;
        case "sleepy":
            output = sleepyMode(text);
            break;
        case "randomemoji":
            output = randomEmojiMode(text);
            break;
        case "sarcastic":
            output = sarcasticMode(text);
            break;
        case "underline":
            output = underlineMode(text);
            break;
        case "leet":
            output = leetMode(text);
            break;
        case "zalgosoft":
            output = zalgosoftMode(text);
            break;
        case "bubble":
            output = bubbleMode(text);
            break;
        case "rainbow":
            output = rainbowMode(text);
            break;
        case "typing":
            typingMode(text);
            return;
        case "echo2":
            output = echoMode(text, 2);
            break;
        case "echo3":
            output = echoMode(text, 3);
            break;
        default:
            output = "The style is not implemented yet";
    }

    resultSection.innerHTML = `<p>${output}</p>`;
});

function emojiMode(text) {
    const emojiDictionary = {
        happy: ["😊", "😁", "✨"],
        joy: ["😁", "😄", "🎉"],
        love: ["❤️", "😍", "💖"],
        excited: ["🎉", "🤩", "🚀"],
        sad: ["😢", "😭", "😔"],
        angry: ["😡", "🤬", "💢"],
        code: ["💻", "🖥️", "⌨️"],
        sleep: ["😴", "💤", "🛌"],
        food: ["🍕", "🍔", "🍟"]
    };

    const emojiDefault = ["😎", "✨", "🔥", "🎶", "💫", "🌟"];

    return text.split(" ").map(word => {
        const cleanWord = word.toLowerCase().replace(/[^a-z]/g, "");
        const emojis = emojiDictionary[cleanWord] || emojiDefault;
        return word + " " + emojis[Math.floor(Math.random() * emojis.length)];
    }).join(" ");
}

function reverseMode(text) {
    return text.split("").reverse().join("");
}

function countMode(text) {
    return `Words: ${text.trim().split(/\s+/).length} | Characters: ${text.length}`;
}

function genzMode(text) {
    return text.replace(/you/gi, "u") + " 💅✨";
}

function alternateMode(text) {
    return text.split('').map((c,i)=> i%2?c.toUpperCase():c.toLowerCase()).join('');
}

function shoutMode(text) {
    return text.toUpperCase() + "!!!";
}

function whisperMode(text) {
    return text.toLowerCase() + "...";
}

function aestheticMode(text) {
    return text.split('').map(c=>c===' '?'   ':String.fromCharCode(c.charCodeAt(0)+65248)).join('');
}

function randomEmojiMode(text) {
    const emojis = ["😀","😂","😍","🤔","🙌","🎉"];
    return text.split(" ").map(w=>w+" "+emojis[Math.floor(Math.random()*emojis.length)]).join(" ");
}

function mirrorwordsMode(text) {
    return text.split(" ").map(w=>w.split("").reverse().join("")).join(" ");
}

function glitchMode(text) {
    const g = ['̷','̸','̴','̵','͢','͟','͠','͡'];
    return text.split('').map(c=>Math.random()<0.3?c+g[Math.floor(Math.random()*g.length)]:c).join('');
}

function sleepyMode(text) {
    return text.split('').map(c=>c+"💤").join('');
}

function highlightMode(text) {
    const keywords = ["important","highlight","note"];
    return text.split('').map(c=>keywords.includes(c.toLowerCase())?c.toUpperCase():c).join('');
}

function leetMode(text) {
    return text.replace(/a/gi,'4').replace(/e/gi,'3').replace(/i/gi,'1').replace(/o/gi,'0').replace(/s/gi,'5').replace(/t/gi,'7');
}

function sarcasticMode(text) {
    return text.split('').map(c=>Math.random()>0.5?c.toUpperCase():c.toLowerCase()).join('');
}

function underlineMode(text) {
    return text.split(" ").map(w=>w.split("").join("_")).join(" ");
}

function zalgosoftMode(text) {
    const z=["̍","̎","̄","̅","̿","̑"];
    return text.split('').map(c=>Math.random()<0.2?c+z[Math.floor(Math.random()*z.length)]:c).join('');
}

function bubbleMode(text) {
    return text.toLowerCase().split('').map(c=>{
        if(c>='a'&&c<='z') return String.fromCharCode(0x24D0+(c.charCodeAt(0)-97));
        return c;
    }).join('');
}

function rainbowMode(text) {
    const colors=["red","orange","yellow","green","blue","purple"];
    return text.split("").map((c,i)=>`<span style="color:${colors[i%colors.length]}">${c}</span>`).join("");
}

function typingMode(text) {
    resultSection.innerHTML="";
    let i=0;
    const interval=setInterval(()=>{
        resultSection.innerHTML+=text[i];
        i++;
        if(i>=text.length) clearInterval(interval);
    },50);
}

function echoMode(text, times) {
    return text.split(" ").map(w=>Array(times).fill(w).join(" ")).join(" ");
}

clearButton.addEventListener("click", () => {
    inputText.value = "";
    resultSection.innerHTML = "";
    styleSelect.selectedIndex = 0;
});
const charCount = document.getElementById("char-count");

inputText.addEventListener("input", () => {
    charCount.textContent = `${inputText.value.length} characters`;
});
const copyButton = document.getElementById('copyButton');

copyButton.addEventListener('click', () => {
    const textToCopy = resultSection.innerText;

    if (!textToCopy.trim()) return;

    navigator.clipboard.writeText(textToCopy); // correction ici
    copyButton.textContent = "Copied ✔️";

    setTimeout(() => {
        copyButton.textContent = "Copy";
    }, 1200);
});

