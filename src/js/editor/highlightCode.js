// highlightCode.js

function highlightCode()
{
    let code = escapeHtml(codeInput.value);

    let functionPattern = new RegExp(`\\b(${theFunctions.join('|')})\\b`, 'g');

    let eventPattern = new RegExp(`\\b(${theEvents.join('|')})\\b`, 'g');

    let objectPattern = new RegExp(`\\b(${theObjects.join('|')})\\b`, 'g');

    let highlightedCode = code.replace(functionPattern, '<span style="color: yellow;">$1</span>')

    // events
    .replace(eventPattern, '<span class="flowControl">$1</span>')

    // objects
    .replace(objectPattern, '<span class="objects">$1</span>')

    // function
    .replace(/\bfunction\b/g, '<span class="pink">function</span>')

    // let
    .replace(/\blet\b/g, '<span class="pink">let</span>')

    // new
    .replace(/\bnew\b/g, '<span class="pink">new</span>')

    // digits
    .replace(/\d/g, '<span class="lightGray">$&</span>')

    // flowControl
    .replace(/\b(if|else|do|while|for|forEach|break|continue)\b/g, '<span class="magenta">$1</span>');

    codeOutput.innerHTML = highlightedCode;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

