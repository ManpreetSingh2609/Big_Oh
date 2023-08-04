require('dotenv').config();

// Import modules from the openai package
import { Configuration, OpenAIApi } from "../node_modules/openai";

// Configure the OpenAI API with your API key
const configuration = new Configuration({
  organization: "org-6nbEsI2nYBwlonNiGB2KBvup",
  apiKey: process.env.OPENAI_API_KEY,    
});

// Create an instance of the OpenAIApi using the configured options
const openai = new OpenAIApi(configuration);

// Now you can use the `openai` instance to interact with the API
// For example:
async function generateText() {
    const response = await openai.createCompletion({
        model: "text-davinci-003", // Replace with the desired model
        prompt: "Once upon a time",
        max_tokens: 50,
    });

    return console.log(response.data.choices[0].text);
}

export async function reply() {
  try {
      const generatedText = await generateText();
      console.log("Generated Text:", generatedText);
  } catch (error) {
      console.error("Error generating text:", error);
  }
}
