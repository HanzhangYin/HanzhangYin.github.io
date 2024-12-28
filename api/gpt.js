const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { prompt } = req.body;
        try {
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                max_tokens: 100,
            });
            res.status(200).json({ text: response.data.choices[0].text });
        } catch (error) {
            res.status(500).json({ error: "Error generating response." });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}