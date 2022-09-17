# Getting Started with This Scaffold

You can use `git clone` to get initialized scaffolding

## introduction

``` shell
git clone  git@github.com:wujinhjun/electron-react-scaffold.git <your-project-name>
cd your-project-name
npm install
npm run dev
npm run hes
```

>in the commands  
`npm run dev` means you can use the electron and react
`npm run hes` means you can use the scaffold by hot update

**Of course, you can change the command in the `package.json`**

## Available Scripts

*`npm run start`/`npm run test`/`npm run build`... are the commands that comes with react, the description comes from [create react app](https://github.com/facebook/create-react-app)*

In the project directory, you can run:

### `npm run dev`

Runs the app in the electron, but can't hot update for changing the electron file

### `npm run hes`

Runs the app in the electron after use the `dev` command. This can hot update for electron

### `npm run pack`

Builds the app for production to the `dist` folder.\

### `npm run dist`

Builds the app for production install package to the `dist/`

## App configuration

In the package.json, you can freely configure the command and the packaging instructions of the electron-builder

### packaging scope

In the `build\files`:

```json
"files": [
    "...",
    "your other files"
]
```

*the other files mean code outside the src directory*
Because the files in the src directory will be the `build` command builds to the `build` folder. For example the `preload.js` need to used in the `main.js`, if it will be packaged in the `build`, the path of `preload.js` will be error.

In the same way, some files can not be placed in the src directory.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Electron, check out the [Electron documentation](https://www.electronjs.org).
To learn Electron-builder, check out the [Electron-builder](https://www.electron.build/).
