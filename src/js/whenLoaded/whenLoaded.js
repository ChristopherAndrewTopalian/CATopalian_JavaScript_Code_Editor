// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    let codeInput = ge('codeInput');

    codeInput.value = 'Type Here';

    codeInput.focus();

    let codeOutput = ge('codeOutput');

    codeInput.addEventListener('input', highlightCode);

    codeInput.addEventListener('scroll', function()
    {
        codeOutput.scrollTop = this.scrollTop;
    });

    highlightCode();

    codeInput.addEventListener("keydown", function(event)
    {
        if (event.key === "Tab")
        {
            // prevent default tab behavior
            event.preventDefault();

            // get cursor position
            let start = this.selectionStart;
            let end = this.selectionEnd;

            // insert 4 spaces at cursor position
            this.value = this.value.substring(0, start) + "    " + this.value.substring(end);

            // move cursor position forward by 4 spaces
            this.selectionStart = this.selectionEnd = start + 4;
        }

        highlightCode();
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

