# Bits

<p align="center">
    <a href="https://anordinaryusername.github.io/Bits/">
        <img alt="Bits Homepage"src="https://i.imgur.com/lBIKYPC_d.webp?maxwidth=1520&fidelity=grand">
    </a>
</p>

Bits is a simple website designed to help people understand binary digits. Learn and practice the many ways computers and humans interact with these mystifying numbers.

## Features

- [x] Generate practice problems
- [ ] Include helpful resources page
- [ ] Add a page that explains how bits works
- [x] Create a home page and navbar

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Setting up your dev environment

Clone the repo with ssh

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

### Using npm

In the repo folder run

```bash
npm install
```

Then start up the dev server. It should automatically open [http://localhost:8080](http://localhost:8080) in Google Chrome Incognito mode.

```bash
npm start
```

### Using Docker

In the repo folder run

```bash
docker-compose up
```

And now go to [http://localhost:8080](http://localhost:8080)

#### Stop the server

To stop dev server and remove the Docker container run

```bash
docker-compose down
```

To temporarily stop the dev server and NOT remove the Docker container run

```bash
docker-compose stop
```

You can then bring the server back up with `docker-compose up`.

#### Commands

| Command               | Description                           |
| --------------------- | ------------------------------------- |
| `npm install`         | Install the dependencies              |
| `npm start`           | Start a dev server with HMR           |
| `npm run analyze`     | Analyze bundle sizes                  |
| `npm run build`       | Build minified bundles ready for prod |
| `npm run check-types` | Check for errors in ts/tsx files      |
| `npm run deploy`      | Deploy contents of dist to gh-pages   |
| `npm run docker-init` | Used for Dockerfile                   |
| `npm run lint-css`    | Check for browser compatibilty        |
| `npm run lint-js`     | Lint .ts/.tsx files with ESLint       |
| `npm run lint-js:fix` | Fix all fixable issues using ESLint   |
| `npm run start-prod`  | Start a local prod server             |
| `npm run test`        | Run all jest tests                    |

These commands also work with Docker. Here's a command that builds for production.

```bash
docker-compose run web npm run build
```

## ~~Frequently~~ Asked Question

### Isn't this overkill for a small site?

Yes.

## License

[MIT](https://choosealicense.com/licenses/mit/)
