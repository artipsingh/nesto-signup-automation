# Nesto Signup Automation

Cypress + TypeScript test suite for the Nesto signup flow

## Tech Stack
- Cypress 
- TypeScript
- cypress-axe (accessibility)

## Prerequisites
- Node.js v18+
- npm v9+

## Setup
```bash
git clone git@github.com:artipsingh/nesto-signup-automation.git
cd nesto-signup-automation
npm install
```

## Running Tests
```bash
# Open Cypress UI
npx cypress open

# Run headless
npx cypress run
```

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

## Bugs Found
See https://docs.google.com/spreadsheets/d/1wHeoHHBcTfsOx23fMY2TuLEQkQ26nJyhYUNymospNys/edit?gid=0#gid=0