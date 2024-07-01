# AI-Powered Content Summarizer Dashboard

This project is a React-based dashboard that allows users to input long-form text content or scrape content from web pages and receive AI-generated summaries. The application includes features like user authentication, summarization history, and options for exporting summaries.

## Features

1. **Text Input Area**: Users can paste or type long-form content.
2. **URL Input Field**: Users can input a URL to scrape content.
3. **Web Scraping**: Fetch HTML content from a URL and extract the main text content.
4. **AI Summarization**: Generate summaries using a mock AI API.
5. **Result Display**: Display the original text and AI-generated summary side by side.
6. **Summary Length Options**: Choose between short, medium, or long summaries.
7. **User Authentication**: Simple authentication to personalize the experience.
8. **Export Summaries**: Export summaries in different formats (e.g., plain text, PDF).
9. **Loading State**: Indicate loading while waiting for summarization or scraping.
10. **Summarization History**: Save and display previous summarization requests.
11. **Accessibility Features**: Ensure usability for people with disabilities.
12. **Content Cleaning**: Remove unnecessary HTML elements from scraped content.
13. **Preview and Edit Scraped Content**: Allow users to preview and edit scraped content before summarization.
14. **Error Handling**: Handle errors for API failures, invalid inputs, and web scraping issues.

## Project Structure

├── public
│ └── index.html
├── src
│ ├── components
│ │ ├── Auth.js
│ │ ├── Error.js
│ │ ├── History.js
│ │ ├── Loading.js
│ │ ├── SummaryDisplay.js
│ │ ├── TextInput.js
│ │ └── UrlInput.js
│ ├── styles
│ │ └── styles.css
│ ├── utils
│ │ └── mockSummarize.js
│ ├── App.js
│ ├── index.js
│ └── index.css
├── .gitignore
├── package.json
└── README.md


## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Pratham9798/ai-content-summarizer-dashboard.git
cd ai-content-summarizer-dashboard

npm install
npm start

Open your browser and go to http://localhost:3000.

Usage
Login: Use the username user and password password to log in.
Text Input: Paste or type long-form content in the text input area.
URL Input: Enter a URL and click the "Scrape" button to fetch and display content.
Generate Summary: Select the summary length and click the "Summarize" button.
View Results: The original text and the AI-generated summary are displayed side by side.
Export: Export summaries using the available export options.
History: View the history of previous summarization requests.
File Descriptions
src/components/Auth.js: Handles user authentication.
src/components/Error.js: Displays error messages.
src/components/History.js: Shows summarization history.
src/components/Loading.js: Displays loading state.
src/components/SummaryDisplay.js: Displays original text and summary.
src/components/TextInput.js: Handles text input.
src/components/UrlInput.js: Handles URL input and scraping.
src/styles/styles.css: Contains the CSS styles.
src/utils/mockSummarize.js: Mock AI summarization function.
src/App.js: Main application component.
src/index.js: Entry point for the React application.
public/index.html: HTML template.
Contributing
Feel free to submit issues, fork the repository, and send pull requests.



