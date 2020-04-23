# Steps

<!-- press "ctrl + /" to make comments. -->
<!-- Space things out (with lines). -->
<!-- Links work like this but dont preview on Visual Studio. -->
[safasdfasd](#steps) 

<hr>

#### steps to set up node stuff

1. start a new folder without spaces or capitals.
2. In terminal type `npm init -y` to create a package file.
3. Make a mark down file for notes (new file with .md extension).
4. In terminal type `npm i typescript` to create a package lock file.
5. In terminal type `.\node_modules\.bin\tsc --init` to create a tsconfig.json file (if it gives a `UnauthorizedAccess` error then open power shell in admin mode and type `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`).
6. Add the following code to you tsconfig file above the compilerOptions.
    ```json
    "includes": [
        "app/**/*.ts"
    ], 
    ```
7. Make a `.gitignore` file.
8. Add `node_modules` and `app/**/*.js` to `.gitignore`.
9. Make new folders (bin and app).
10. Create a `index.ts` file in the app folder.
11. Create a `node-project` (Name of the project) binary file in the bin file (no extension).
12. Type the following in the project binary file.
    ```js
    #!/usr/bin/env node
    const app = require('../app').default
    ```
13. Write a try, catch for starting the app.
    ```js
    try {
        app(); 
    } catch (error){
        console.error(error.message)
    }
    ```
14. In the index.ts file type.
    ```ts
    const app = () => {

    };

    export default app;
    ```
    *note: the `() =>` is an anon function, use `function app()` to use things like `this.`.*
15. In the terminal type `.\node_modules\.bin\tsc` to create a index.js file.
16. its probably a good time to commit your code now, go to https://github.com/ and make a new repository for it. github will do give you code to enter in to the terminal.
17. type code into your index.ts 

18. I was up to prestart before i stopped


<hr>

#### Other things

```js 
// Put javascript code here.
var name = "steve";
```