# Steps

<!-- press "ctrl + /" to make comments. -->
<!-- Space things out (with lines). -->
<!-- Links work like  -->
[Post setup](#yay-you-have-a-good-set-up-now-have-fun) 

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

18. in `package.json` add two scripts to look like bellow
    ```json
    {
        ...,    
        "prestart": "./node_modules/.bin/tsc", 
        "start":"node ./bin/node-project", 
        ...
    }
    ```
19. in terminal type `npm start` to test (use `--silent` to hide all the log junk from showing)
20. while we are here, lets look at our licence (look at the TLDR licesnse website)
21. add yourself as the author `"firstname lastname <email> (website)"`
22. in `index.ts` add `import {capitalise} from './utils';` to the top
23. create the `utils.ts` file in the `app` folder
24. in `utils.ts` add the follwing code
    ```ts
    export const capitalise = (...words: string[]) => {
        return words.map(word => word.toUpperCase()).join('-');
    }
    ```
25. in the `index.ts` file change the code to look like the following
    ```ts
    import {capitalise} from './utils';
    
    const app = () => {
        console.info(capitalise("Hewwo Worwd", "im a good girl")) 
    };

    export default app;
    ```
26. type `npm start --silent` into the terminal

<hr>

## **yay you have a good set up now, have fun**

27. type `npm i --save-dev ava` into the console
28. create a folder called test
29. create a file called `utils.test.ts` in the test folder
30. type `import test from 'ava';` in the `utils.test.ts` file
31. type `npm i --save-dev ts-node` into the console
32. in the `package.json` file, make the code under `"devDependencies"` look like bellow
    ```json
    ...
    "ava": {
        "extensions": ["ts"],
        "require": ["ts-node/register"]
    }
    ...
    ```
33. make `utils.test.ts` look like bellow
    ```ts
    import test from 'ava';
    import {capitalise} from '../app/utils';

    test('capitalise a string',(t) => {
        t.is(capitalise("this is a string"), "THIS IS A STRING");
        t.is(capitalise("this is a cheeky string"), "THIS IS A STRING");
    })
    ```
34. type `.\node_modules\.bin\ava` in the terminal
35. in `package.json` change the `"test": ...` script to `"test": "./node_modules/.bin/ava"`
36. type `npm test` in the terminal to test things out

37. in terminal type `npm i commitizen -g` (only do this once per computer)
38. in terminal type `commitizen init cz-conventional-changelog --save-dev --save-exact` sets the config to commitizens default.
39. type `npx git-cz` in the terminal to commit stuff
40. in `utils.ts` lets add a new function called log, it should look like this:
    ```ts
    ...
    export const log = (message: string) => {
        console.info(message)
    }
    ```
41. in `index.ts` import the log by adding `log` to the import objects from `'./utils'` 
    ```ts
    import {capitalise,log} from './utils';
    ```
42. now lets call the `log` function in the `app` 


<hr>

### Other things

#### npm

`--save-dev` is used for development dependancies, wont be included when built

#### git

A properly formed Git commit subject line should always be able to complete the following sentence:

If applied, this commit will your subject line here

`git log --pretty=oneline` in terminal to  show all the commits

`npx git-cz` to use commitizen to the project


#### markdown

```js 
    // Put javascript code here.
    var name = "steve";
```

#### typescript

`() =>` is better then `function()` unless `function()` is needed 


#### javascript