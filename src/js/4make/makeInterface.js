// makeInterface.js

function makeInterface()
{
    let editorContainer = ce('div');
    ba(editorContainer);

    //-//

    let codeInput = ce('textarea');
    codeInput.id = 'codeInput';
    editorContainer.append(codeInput);

    //-//

    let codeOutput = ce('pre');
    codeOutput.id = 'codeOutput';
    editorContainer.append(codeOutput);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

