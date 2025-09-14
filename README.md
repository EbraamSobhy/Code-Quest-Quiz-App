<div style="text-align: center;">
  <h1 style="color: white">Welcome to Code Quest Quiz App</h1>
<br>
  <img src="public/Code Quest.jpg" alt="image" width="400" height="300">
</div>
<br>

**Code Quest Quiz App** is an interactive coding quiz platform built with [Next.js](https://nextjs.org) that allows users to solve programming problems in JavaScript and Python. The app features an in-browser code editor, a dynamic set of problems, real-time scoring, and a modern UI.

---

## Features

- **Problem Bank:**  
  A curated set of coding problems, each with multiple examples, constraints, starter code, and solutions for JavaScript and Python.
- **Code Editor:**  
  Integrated [Monaco Editor](https://microsoft.github.io/monaco-editor/) supporting syntax highlighting for JavaScript and Python.
- **Language Switching:**  
  Users can toggle between JavaScript and Python for each problem.
- **Real-Time Scoring:**  
  The ScoreBoard component displays your progress as you solve problems.
- **User Login and Persistence:**  
  Username is stored locally for a personalized experience.
- **Responsive and Modern UI:**  
  Styled with Tailwind CSS and Geist font for a clean look.
- **Deployable on Netlify:**  
  Designed for easy deployment using [Netlify](https://www.netlify.com/).

---

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- npm, yarn, pnpm, or bun

### Installation

Clone the repository:

```bash
git clone https://github.com/EbraamSobhy/Code-Quest-Quiz-App.git
cd Code-Quest-Quiz-App
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server

Start the app locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Folder Structure

- `/app`  
  - `/Code-Editor` — Main page containing the code editor and quiz interface  
  - `/Login` — Login page for username entry  
  - `/Score-Resut` — ScoreBoard component  
  - `/Instructions` — Instructions and guidance  
  - `/data/ProblemBank.js` — Problem definitions
- `/components/CodeEditor.js` — The main code editor UI and logic
- `/public/CodeQuestIcon.png` — App icon
- `/styles/globals.css` — Global styles

---

## How It Works

1. **Login:**  
   Enter a username to personalize your session.
2. **Select a Problem:**  
   Problems are listed in a dropdown. Choose one to begin.
3. **Choose a Language:**  
   Switch between JavaScript and Python as preferred.
4. **Edit Code:**  
   Starter code is provided. Write your solution in the Monaco Editor.
5. **Submit Solution:**  
   Click "Submit" to check your code against the expected solution.
6. **Score Tracking:**  
   Your progress and score are displayed on the ScoreBoard.

---

## Adding New Problems

Edit `/app/data/ProblemBank.js` and add a new object to the `ProblemBank` array:

```javascript
{
  id: <number>,
  title: "<Problem Title>",
  description: "<Problem description>",
  examples: [ ... ],
  constraints: [ ... ],
  starterCode: {
    javascript: `...`,
    python: `...`,
  },
  solution: {
    javascript: `...`,
    python: `...`,
  }
}
```

---

## Deployment

Deploy your app easily using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

---

## Contributing

Feel free to fork the repo and open pull requests!

---

## License

MIT

---

## Credits

Created by [EbraamSobhy](https://github.com/EbraamSobhy).

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Tailwind CSS](https://tailwindcss.com/)