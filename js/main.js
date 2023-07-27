import { Configuration, OpenAIApi } from "openai";

function analyzeCode() {
  
const configuration = new Configuration({
  organization: "org-6nbEsI2nYBwlonNiGB2KBvup",
  apiKey: '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';
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
  const codeInput = document.getElementById("codein").value;

  // Replace 'YOUR_CHATGPT_API_KEY' with your actual ChatGPT API key
  const apiKey = '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';

  // Make a request to the ChatGPT API using the fetch API
  fetch('https://api.openai.com/v1/engines/code-completion-codex/completions', {
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
}
