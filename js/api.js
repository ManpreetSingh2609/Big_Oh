require('dotenv').config();

import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
  organization: "org-6nbEsI2nYBwlonNiGB2KBvup",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
console.log("hello");
const response = await openai.listEngines();

const codeInput = document.getElementById("codein").value;