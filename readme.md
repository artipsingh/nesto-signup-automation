# Nesto Signup Automation

Cypress + TypeScript test suite for the Nesto signup flow

## Tech Stack

- Cypress
- TypeScript

## Prerequisites

- Node.js v18+
- npm v9+

## Setup

```bash
git clone git@github.com:artipsingh/nesto-signup-automation.git
cd nesto-signup-automation
npm install
```

## Available Scripts

| Command                   | Description                               |
| ------------------------- | ----------------------------------------- |
| `npm run lint`            | Run ESLint across all TypeScript files    |
| `npm run lint:fix`        | Run ESLint and auto-fix fixable issues    |
| `npm run format`          | Format all TypeScript files with Prettier |
| `npm run format:check`    | Check formatting without making changes   |
| `npm run cy:open`         | Open Cypress interactive runner           |
| `npm run cy:run`          | Run all tests headless                    |
| `cy:run:createUser`       | Run the test to create user               |
| `npm run cy:run:positive` | Run all positive tests headless           |
| `npm run cy:run:negative` | Run all negative test headless            |

## Test Coverage

- Positive flows
- Negative / validation flows
- API contract testing
- Bilingual (EN/FR)
- Accessibility (cypress-axe)

## Planned Enhancements

- Google Lighthouse scans
- Visual regression via Percy
- Cross-browser via GitHub Actions
- Accessibility tests with cypress-axe

## Bugs Found

See https://docs.google.com/spreadsheets/d/1wHeoHHBcTfsOx23fMY2TuLEQkQ26nJyhYUNymospNys/edit?gid=0#gid=0

## Automation Progress

See https://docs.google.com/spreadsheets/d/1wHeoHHBcTfsOx23fMY2TuLEQkQ26nJyhYUNymospNys/edit?gid=0#gid=0
