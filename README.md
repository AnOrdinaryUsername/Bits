# Bits
Bits is a simple website designed to help people understand binary digits. Learn and practice the many ways computers and humans interact with these mystifying numbers.

## Features
- [x] Generate practice problems
- [ ] Include helpful resources page
- [ ] Add a page that explains how bits works
- [ ] Create a home page and navbar

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### Setting up your dev environment

If you ever get lost, follow Github's [Fork a repo](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) guide.

We'll also be using [npm](https://www.npmjs.com/get-npm) and [Git](https://git-scm.com/downloads) so make sure you have those installed.

#### Clone the repo
First click the "fork" button to create your own copy of the project.

Then use ssh

```bash
git clone git@github.com:your-username/Bits.git
```

Or https

```bash
git clone https://github.com/your-username/Bits.git
```

Change to the Bits directory

```bash
cd Bits
```

In the repo folder run

```bash
npm install
```

Add the upstream repository
```bash
git remote add upstream https://github.com/AnOrdinaryUsername/Bits.git
```

#### Develop your contribution

Pull the latest changes from upstream

```bash
git checkout master
git pull upstream master
```

Create a branch for feature you want to work on

```bash
git checkout -b branch-feature-name
```

Commit any changes as you make the feature. For a good commit message, use this helpful [guide](https://chris.beams.io/posts/git-commit/).

```bash
git add fileName.ts
git commit -m "Meaningful message here"
```

#### Submit your contribution

Push changes to your fork

```bash
git push origin your-branch-feature-name
```

Now click the green pull request button, add your title and message, and submit your changes! 

#### Commands

| Command            | Description                                |
| ---------------    | -----------------------------              |
| `npm install`      | Install the dependencies                   |
| `npm run lint`     | Lint .ts/.tsx files with ESLint            |
| `npm run lint:fix` | Fix all fixable issues using ESLint        |
| `npm run build`    | Generate dist/bundle.js using src/index.ts |

## License
[MIT](https://choosealicense.com/licenses/mit/)
