# CONTRIBUTING.md

Thank you for contributing to HUSTLE!!!

Before contributing your wonderful work to our project, we ask that you take a moment
to read over this file before making your pull request

### Linting

All code contributed to this project is expected to follow clean code practices. We will
be using ESLint and Prettier for this project. Before creating your pull request please be
sure to run the following command to ensure that your code meets our expectations. Any contributions
that do not follow the linting standards will not be merged.

````$ npm lint````

#### Unix users

Any one using Unix is welcome to copy the git-hooks/pre-commit file into your .git/hooks directory.
This will force the linters to be ran everytime you make a commit. Windows users are welcome to
use this hook as well, although modifications may need to be made to ensure it works properly.

NOTE: If the linter makes any changes, these changes are modified locally. Therefore, you will need to recommit
the modifications made by the litners.
