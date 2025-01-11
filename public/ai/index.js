import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Check if running in a browser environment
if (typeof document !== 'undefined') {
  // Constants
  const feedbackDisplayTime = 3000;

  // Element Selectors
  const textInputArea = document.getElementById('text-input-area');
  const summaryLengthInput = document.getElementById('summary-length-input');
  const summaryLengthText = document.getElementById('summary-length-text');
  const summarizeButton = document.getElementById('summarize-button');
  const summaryContent = document.getElementById('summary-content');
  const copyButton = document.getElementById('copy-button');
  const clearButton = document.getElementById('clear-button');
  const loadingSection = document.getElementById('loading-section');
  const errorSection = document.getElementById('error-section');
  const errorMessage = document.getElementById('error-message');
  const dismissErrorButton = document.getElementById('dismiss-error-button');

  // Button Event Listeners
  summarizeButton.addEventListener('click', summarize);
  copyButton.addEventListener('click', copy);
  clearButton.addEventListener('click', clear);
  dismissErrorButton.addEventListener('click', dismissError);

  // Other Event Listeners
  document.addEventListener('DOMContentLoaded', focusOnTextInputArea);
  textInputArea.addEventListener('input', enableControls);
  summaryLengthInput.addEventListener('input', updateSummaryLengthText);

  // Button Event Handlers
  async function summarize() {
    startLoading();
    const text = textInputArea.value;


    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          "role": "user",
          "content": `Summarize the following prompt:\n\n ${text}`
        }
      ],
      max_tokens: 300,
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });
      
    endLoading();
    
    console.log(response);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(summaryContent.textContent);
      showCopyFeedback('😄 Copied', 'success');
    } catch (err) {
      showCopyFeedback('😔 Failed', 'failure');
    }
  }

  function clear() {
    textInputArea.value = '';
    summaryContent.textContent = '';
    enableControls();
    focusOnTextInputArea();
  }

  function dismissError() {
    hideErrorSection();
    clear();
  }

  // Other Event Handlers
  function focusOnTextInputArea() {
    textInputArea.focus();
  }

  function updateSummaryLengthText() {
    summaryLengthText.textContent = `Summary Length: ${summaryLengthInput.value} Words`;
  }

  // Helper Functions
  function enableControls() {
    const isTextNotEmpty = textInputArea.value.trim() !== '';
    summaryLengthInput.disabled = !isTextNotEmpty;
    summarizeButton.disabled = !isTextNotEmpty;
    clearButton.disabled = !isTextNotEmpty;
    copyButton.disabled = summaryContent.textContent.trim() === '';
  }

  function startLoading() {
    summaryContent.style.display = 'none';
    loadingSection.style.display = 'block';
  }

  function endLoading() {
    loadingSection.style.display = 'none';
    summaryContent.style.display = 'block';
  }

  function handleError(error) {
    loadingSection.style.display = 'none';
    summaryContent.style.display = 'none';
    errorMessage.textContent = `There was an error processing the text: ${error.message}`;
    errorSection.style.display = 'block';
  }

  function showCopyFeedback(message, status) {
    const feedbackClass = status === 'success' ? 'copied' : 'failed';
    copyButton.classList.add(feedbackClass);
    copyButton.textContent = message;
    setTimeout(() => {
      copyButton.classList.remove(feedbackClass);
      copyButton.textContent = 'Copy';
    }, feedbackDisplayTime);
  }
}
