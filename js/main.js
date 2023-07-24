// Replace 'YOUR_API_KEY' with the API key you obtained from OpenAI
const API_KEY = 'YOUR_API_KEY';
const API_ENDPOINT = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/answers';

// Function to get time and space complexity using ChatGPT API
async function getTimeSpaceComplexity(question, context) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  };

  const data = {
    prompt: question,
    max_tokens: 100,
    temperature: 0,
    stop: '\n',
  };

  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const result = await response.json();
    // Process the response and extract the relevant information
    const answer = result.answers[0].text;
    return answer;
  } else {
    return null;
  }
}

// Function to detect the language using ChatGPT API
async function detectLanguage(text) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  };

  const data = {
    prompt: `Detect the language of the following text: '${text}'`,
    max_tokens: 100,
    temperature: 0,
    stop: '\n',
  };

  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const result = await response.json();
    // Process the response and extract the detected language
    const language = result.choices[0].text.trim();
    return language;
  } else {
    return null;
  }
}

// Usage example
const question = "What is the time and space complexity of quicksort algorithm?";
const context = "Quicksort is a sorting algorithm...";
getTimeSpaceComplexity(question, context)
  .then(answer => console.log(answer))
  .catch(error => console.error(error));

const textToDetectLanguage = "This is a sample text to detect the language.";
detectLanguage(textToDetectLanguage)
  .then(language => console.log(language))
  .catch(error => console.error(error));
