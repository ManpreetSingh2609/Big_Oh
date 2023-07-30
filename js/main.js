 
// Make a request to the ChatGPT API using the fetch API
let get = document.querySelector("#get");
get.addEventListener('click', (e) => {
  alert('working');
  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: codeInput,
      max_tokens: 150,
      n: 1,
      stop: '\n',
    }),
  })
    .then(response => response.json())
    .then(data => {
      // Process the API response to extract relevant information
      const completion = data.choices[0].text.trim();
      const language = 'JavaScript'; // Since we are detecting JavaScript code, you can expand this to handle multiple languages
      const timeComplexity = 'O(n)'; // Replace this with the actual time complexity determined by your code analysis logic
      const spaceComplexity = 'O(1)'; // Replace this with the actual space complexity determined by your code analysis logic

      // Display the results to the user (you can adjust this to your preferred output format)
      alert(`Detected Language: ${language}\nTime Complexity: ${timeComplexity}\nSpace Complexity: ${spaceComplexity}`);
    })
    .catch(error => {
      // Handle errors if any
      console.error('Error analyzing code:', error);
      alert('An error occurred while analyzing the code.');
    });

})


