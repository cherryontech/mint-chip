# Mint Chip 🍃
[![Netlify Status](https://api.netlify.com/api/v1/badges/9fa45353-e5f9-4bcc-978e-57f607862e6d/deploy-status)](https://app.netlify.com/projects/mint-chip/deploys)

## 🌐 Live Site
**[mint-chip.netlify.app](https://mint-chip.netlify.app)**

## 🛠️ Tech Stack

- **React** 19.1.1
- **Vite** 7.1.7
- **Tailwind CSS** 4.1.14
- **ESLint** 9.36.0
- **Prettier** 3.6.2

## 🚀 Getting Started

* ### Installation

  ```bash
  npm install
  ```

* ### Available Scripts

  - #### Development
    ```bash
    npm run dev
    ```
    Starts the development server locally.

  - #### Build
    ```bash
    npm run build
    ```
    Creates an optimized production build.

  - #### Preview
    ```bash
    npm run preview
    ```
    Previews the production build locally.

  - #### Linting
    ```bash
    npm run lint
    ```
    Analyzes code with ESLint to find issues.

  - #### Formatting
    ```bash
    npm run format
    ```
    Formats all code with Prettier.

## ⚙️ Configuration

* ### Tailwind CSS
  Tailwind directives are imported in `src/index.css`:
  ```css
  @import "tailwindcss";
  ```

* ### ESLint
  Configured in `eslint.config.js` with support for React Hooks and React Refresh.

* ### Prettier
  Configured in `.prettierrc` with the following options:
  ```json
  {
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "es5"
  }
  ```
  - Semicolons: enabled
  - Single quotes
  - Tab width: 2
  - Trailing commas: ES5

## ⚡ Deployment

This project uses Netlify as a tool for continuous integration and continuous deployment (CI/CD) to streamline our development workflow. This allows us to test changes efficiently and quickly deliver new features and bug fixes to end-users.

### How Deployment Works
- All changes merged into the main branch are automatically deployed 
- Deployment previews are available for open PRs, generating unique links to test potential changes

## 📝 License

