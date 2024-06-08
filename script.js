const text = document.getElementById('text')
const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const textValue = text.value;  // Get the value of the textarea
    const textArray = textValue.split('');  // Split the text into an array of characters
    let vowelCount = 0;

    textArray.forEach(function(element) {
        if ('aeiouAEIOU'.includes(element)) {  // Check if the element is a vowel (case-insensitive)
            vowelCount++;
        }
    });

    alert( "The number of vowels in your text is " + vowelCount);  // Display the count of vowels
    text.value = ""
});
