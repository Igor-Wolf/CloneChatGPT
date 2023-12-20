// const { OpenAIAPI } = require("openai");
// require("dotenv").config();

// module.exports = class Openai {
//   static createAPI() {
//     return new OpenAIAPI(process.env.OPENAI_API_KEY);
//   }

//   static textCompletion({ prompt }) {
//     return {
//       model: "gpt-3.5-turbo-instruct",
//       prompt: `${prompt}`,
//       temperature: 1,
//       max_tokens: 3500,
//       top_p: 1,
//       frequency_penalty: 0,
//       presence_penalty: 0,
//     };
//   }
// };



 const { Configuration, OpenAIApi } = require("openai");
 require("dotenv").config()


 module.exports = class openai{
    static configuration() {
      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      return new OpenAIApi(configuration);
    }
    static textCompletion({ prompt }) {
      return {
        model: "gpt-3.5-turbo-instruct",
        prompt: `${prompt}`,
        temperature: 1,
        max_tokens: 3500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      } 
    }
  }



// const openai = new OpenAIApi(configuration);

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const response = await openai.completions.create({
//   model: "gpt-3.5-turbo",
//   prompt: "diga um nome legal \n",
//   temperature: 1,
//   max_tokens: 256,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });