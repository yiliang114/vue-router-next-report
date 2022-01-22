# vue-router-next-report

Step 1

```bash
$ yarn
```

Step 2

```bash
$ cd ./packages/main/
$ yarn start
```

Step 3  
brower http://localhost:7100/

open console

Step 4

1.  case 1

- Menu switch to `Home`
- Menu switch to `MainDemo`
- Menu switch to `Home` We see console print `BasicLayout:afterEach` every once.

2.  case 2

- Menu switch to `Sys2Demo1`
- wait seconds and clear console error
- Menu switch to `Sys2Demo2`
- Menu switch to `Sys2Demo1` We see console print `BasicLayout:afterEach` every twice

Is here [signle-spa](https://github.com/single-spa/single-spa/blob/master/src/navigation/navigation-events.js#L105) something wrong ?
