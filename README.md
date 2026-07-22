# OpenCart Playwright Automation Framework

End-to-end UI test automation framework built with **Playwright** and **TypeScript** for the OpenCart e-commerce application.

The project demonstrates modern automation testing practices using a scalable **Page Object Model (POM)** architecture, reusable page objects, data-driven testing, and comprehensive reporting.

---

# Project Overview

This framework was developed to automate key user workflows within the OpenCart demo application while following industry-standard automation design principles.

The project focuses on:

- Maintainable Page Object Model architecture
- Reusable and scalable test design
- Data-driven testing
- Reliable end-to-end automation
- Detailed execution reporting
- Easy maintenance and extensibility

---

# Technologies

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- JSON Test Data
- HTML Reports
- Allure Reports

---

# Framework Features

- Page Object Model (POM)
- Reusable Page Objects
- Data-Driven Testing
- Retry Mechanism
- Screenshots on Failure
- Video Recording on Failure
- Trace Collection
- HTML Reporting
- Allure Reporting
- Tag-based Test Execution
- Modular Project Structure

---

# Project Structure

```text
.
├── data/
│   └── Test data
│
├── pages/
│   └── Page Object classes
│
├── tests/
│   └── Test scenarios
│
├── utils/
│   └── Utility classes
│
├── playwright.config.ts
├── test.config.ts
├── package.json
└── README.md
```

---

# Automated Test Scenarios

### Authentication

- User Registration
- Valid Login
- Invalid Login Validation
- Logout

### Product

- Product Search
- Add Product to Cart
- Shopping Cart Validation

### End-to-End

- Complete Purchase Flow

### Data-Driven Testing

- Login using multiple datasets

---

# Reporting

The framework supports multiple reporting solutions.

### HTML Report

Generate and open the Playwright HTML report

```bash
npx playwright show-report
```

### Allure Report

Generate an interactive Allure report

```bash
allure serve allure-results
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/Vuk144/opencart-playwright-project.git
```

Navigate into the project

```bash
cd opencart-playwright-project
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# Running Tests

Run all tests

```bash
npx playwright test
```

Run tests in headed mode

```bash
npx playwright test --headed
```

Run a specific test file

```bash
npx playwright test tests/accountLogin.spec.ts
```

Run tests by tag

```bash
npx playwright test --grep @smoke
```

---

# Current Framework Capabilities

- UI Automation
- Cross-browser support
- Retry mechanism for flaky tests
- Parallel execution support
- Rich reporting
- Failure screenshots
- Failure videos
- Trace files

---

# Planned Improvements

- GitHub Actions CI/CD
- Environment Variables (.env)
- Storage State Authentication
- API Testing using Playwright Request API
- Faker for Dynamic Test Data
- Cross-browser execution matrix
- Docker execution
- Jenkins pipeline

---

# Author

**Vuk Nedeljković**

QA Engineer

GitHub:
https://github.com/Vuk144

LinkedIn:
https://www.linkedin.com/in/vuk-nedeljkovic/

---

## Notes

This project serves as a portfolio project demonstrating modern UI automation practices using Playwright and TypeScript. The framework is continuously improved by incorporating industry best practices and additional automation features.