# Contributing to Campus Platform

Thank you for your interest in contributing to **Campus Platform**! We welcome contributions from the community to help improve this project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please treat everyone with respect and kindness.

## Getting Started

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** locally:
    ```bash
    git clone https://github.com/mikeu-dev/campus-platform.git
    cd campus-platform
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Create a branch** for your feature or fix:
    ```bash
    git checkout -b feature/amazing-feature
    ```

## Development Workflow

This is a **Monorepo**. Please ensure you understand the structure:
-   `apps/portal`: Main SvelteKit Frontend.
-   `packages/shared-types`: Shared TypeScript definitions.

**Important**: If you modify `shared-types`, remember to rebuild it:
```bash
npm run build -w @campus-platform/shared-types
```

## Submission Guidelines

### Pull Requests
1.  Ensure your code follows the project's coding standards (Prettier/ESLint).
2.  Update documentation if you change logic or add features.
3.  Run tests before submitting:
    ```bash
    npm run checks
    ```
4.  Open a Pull Request against the `main` branch.

### Commit Messages
Please use semantic commit messages:
-   `feat: ...` for new features
-   `fix: ...` for bug fixes
-   `docs: ...` for documentation changes
-   `refactor: ...` for code refactoring
-   `chore: ...` for maintenance tasks

## Reporting Bugs

If you find a bug, please create an Issue with:
1.  Description of the bug.
2.  Steps to reproduce.
3.  Expected vs actual behavior.
4.  Screenshots (if applicable).

Thank you for contributing!
