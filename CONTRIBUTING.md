# Contributing to The Token Lab

We appreciate your interest in contributing to The Token Lab! This document outlines the process for contributing to this project and helps maintain a consistent workflow for all contributors.

## Branching Strategy

### Creating a New Branch

**Always create a new branch when making changes. This helps keep the main branch clean and allows for easier code reviews.**

To create a new branch:

1. Ensure you're on the latest version of the main branch:
   ```
   git checkout master
   git pull origin master
   ```

2. Create a new branch with a descriptive name following the [Branch Naming Convention](#branch-naming-convention):
   ```
   git checkout -b <v#.#.#>
   ```

### Branch Naming Convention

Using the Semantic Versioning approach for branch names keeps the format consistent and can be easily identitfied as to what changes were made. The format would look something like this:

```
v1.0.0
```

## Semantic Versioning

Semantic Versioning (SemVer) is a versioning scheme that uses a three-part version number: **MAJOR.MINOR.PATCH**. Each part of the version number is incremented based on the type of changes made. Below are some examples:

- **MAJOR:** Incompatible (non-backwards-compatible) API changes or core-dependecy related change.
- **MINOR:** Backwards-compatible new features / removal of an entire feature.
- **PATCH:** Backwards-compatible bug fixes, patches, hot fixes.

*Note: The term "backwards-compatible" simply means that the change being made can be reversed.*

### (Example:)

When contributing, consider how your changes might affect the project's version number. For example, say you fixed some grammatical issues or added comments to a line of code, this would be considered a **PATCH** fix, since this wouldn't be considered a new feature or entire feature removal.

## Pull Requests

1. Before submitting a pull request, ensure your code adheres to the project's coding standards and passes all tests (if any).
2. Write a clear and concise description of your changes in the pull request (please be descriptive where necessary).
3. Reference any related issues in your pull request description!
4. Be prepared to make changes based on code review feedback.
5. **Please ensure that someone REVIEWS THE CODE PRIOR TO MERGING**. This is to ensure a "Maker" / "Checker" system.

## Code Style

- Follow the existing code style and conventions used in the project.
- Use consistent indentation (spaces or tabs as per project preference).
- Write clear, self-explanatory code and add comments where necessary.

## Testing

- Ensure all existing tests (whatever it may be) pass before submitting a pull request. **Don't submit a "new feature" that doesn't compile/build.**

## Commit Messages

Write clear commit messages that explain the changes made. Do not name the commit message such as `fixed somthing` or `edits made`. Be a more descriptive such as `fixed code example on page 2`.

## Documentation

Update relevant documentation when making changes to the codebase (if necessary).

## Questions and Support

If you have any questions or need support, please open an issue or reach out to us in our [Discord](https://discord.gg/5asAuY2sR8).

Thank you for contributing to Epicentral Labs!
