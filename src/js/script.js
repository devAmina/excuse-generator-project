
// This line of code will make sure the page is fully loaded
window.onload = function () {
    // Write the logic in this function

    // 1. Get the excuse element
    const excuse = document.getElementById('excuse');

    // 2. Generate a random excuse

    const arrayExecuteText = ['The dog ate my homework for breakfast',
        'A dragon stole my sword last night',
        'The intern misplaced the report before the meeting',
        'I accidentally forgot your birthday last weekend',
        'Spider-Man webbed my laptop last night',
        'The AI chatbot rewrote my code this morning'];
    const arrayExecuteTextSubject = ['The dog ',
        'A dragon ',
        'The intern ',
        'I ',
        'Spider-Man ',
        'The AI chatbot '];
    const arrayExecuteTextVerb = ['ate ',
        'stole ',
        'misplaced ',
        'accidentally forgot ',
        'webbed ',
        'rewrote '];
    const arrayExecuteTextObject = ['my homework ',
        'my sword ',
        'the report ',
        'your birthday ',
        'my laptop ',
        'my code '];
    const arrayExecuteTextTime = ['for breakfast',
        'last night.',
        'before the meeting.',
        'last weekend.',
        'last night.',
        'this morning.'];
    const excuseTextIndex = Math.floor(Math.random() * arrayExecuteText.length);
   
    // 3. Inseart the excuse into the excuse element
    excuse.innerHTML = arrayExecuteTextSubject[excuseTextIndex] + 
                       arrayExecuteTextVerb[excuseTextIndex] + 
                       arrayExecuteTextObject[excuseTextIndex] + 
                       arrayExecuteTextTime[excuseTextIndex];
}