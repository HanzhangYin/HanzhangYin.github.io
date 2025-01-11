import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY, // defaults to process.env["ANTHROPIC_API_KEY"]
});

const response = await anthropic.messages.create({
  model: "claude-3-5-sonnet-20241022",
  max_tokens: 30,
  messages: [{ role: "user", content: "Hello, Claude, what can you do for me?" }],
});

// Output only the content.text information
console.log(response)
console.log(response.content[0].text);
