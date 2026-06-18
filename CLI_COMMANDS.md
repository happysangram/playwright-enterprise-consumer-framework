# Playwright CLI Commands

## Prerequisites

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode (visible browser)

```bash
npx playwright test --headed
```

### Run tests in debug mode (step through with inspector)

```bash
npx playwright test --debug
```

### Run a specific test file

```bash
npx playwright test framework-tests/sanity.spec.js
```

### Run tests matching a title/grep pattern

```bash
npx playwright test --grep "login"
```

### Run tests excluding a pattern

```bash
npx playwright test --grep-invert "slow"
```

---

## Browser-Specific Runs

### Chromium only

```bash
npx playwright test --project=chromium
```

### Firefox only

```bash
npx playwright test --project=firefox
```

### WebKit (Safari) only

```bash
npx playwright test --project=webkit
```

### Multiple projects

```bash
npx playwright test --project=chromium --project=firefox
```

---

## Parallel & Worker Control

### Set number of workers

```bash
npx playwright test --workers=4
```

### Run tests serially (single worker)

```bash
npx playwright test --workers=1
```

---

## Retries & Repeats

### Retry failed tests

```bash
npx playwright test --retries=2
```

### Repeat each test N times (flakiness check)

```bash
npx playwright test --repeat-each=3
```

---

## Reporting

### Generate and view HTML report

```bash
npx playwright test --reporter=html
npx playwright show-report
```

### View existing HTML report (without re-running tests)

```bash
npx playwright show-report
```

### Specify a custom report output directory

```bash
npx playwright show-report ./playwright-report
```

### List reporter (prints results to terminal)

```bash
npx playwright test --reporter=list
```

### Line reporter (concise single-line output)

```bash
npx playwright test --reporter=line
```

### Dot reporter (minimal dots)

```bash
npx playwright test --reporter=dot
```

### JSON reporter (machine-readable output)

```bash
npx playwright test --reporter=json
```

### JUnit reporter (CI-friendly XML)

```bash
npx playwright test --reporter=junit
```

---

## Trace & Debugging

### Record trace for all tests

```bash
npx playwright test --trace=on
```

### View a trace file

```bash
npx playwright show-trace trace.zip
```

### Open Playwright UI mode (interactive test runner)

```bash
npx playwright test --ui
```

### Open Playwright codegen (record actions into code)

```bash
npx playwright codegen https://example.com
```

---

## Screenshots & Video

### Take screenshots on failure (configured in playwright.config.js)

```bash
npx playwright test --screenshot=only-on-failure
```

### Record video for all tests

```bash
npx playwright test --video=on
```

---

## npm Script Shortcuts

These are defined in `package.json`:

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:headed` | Run in headed browser mode |
| `npm run test:debug` | Run with Playwright inspector |
| `npm run test:chromium` | Run on Chromium only |
| `npm run test:firefox` | Run on Firefox only |
| `npm run test:webkit` | Run on WebKit only |
| `npm run clean` | Clean report files |
| `npm run merge-reports` | Merge sharded reports |
| `npm run summary` | Print execution summary |

---

## Useful Flags Reference

| Flag | Description |
|------|-------------|
| `--headed` | Show the browser window |
| `--debug` | Launch Playwright Inspector |
| `--ui` | Open interactive UI mode |
| `--workers=N` | Number of parallel workers |
| `--retries=N` | Retry failed tests N times |
| `--repeat-each=N` | Run each test N times |
| `--grep="pattern"` | Filter tests by title |
| `--grep-invert="pattern"` | Exclude tests by title |
| `--project=name` | Run specific browser project |
| `--reporter=type` | Set reporter (html, list, json, junit) |
| `--trace=on` | Record execution trace |
| `--screenshot=on` | Capture screenshots |
| `--video=on` | Record video |
| `--output=path` | Test artifacts output dir |
| `--config=path` | Use a custom config file |
| `--update-snapshots` | Update visual comparison baselines |
