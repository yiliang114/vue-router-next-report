# vue-router-next-report

Step 1

```bash
yarn
```

Step 2

```bash
yarn start
```

Step 3  
open http://localhost:8080/

open console

Step 4

1.  case 1

- Menu switch to `home`
- Menu switch to `main`
- Menu switch to `home` We see console print `BasicLayout:afterEach` every once.

2.  case 2

- Menu switch to `qiankuan: xxx`
- wait seconds and clear console error
- Menu switch to `qiankuan: yyy`
- Menu switch to `qiankuan: xxx` We see console print `BasicLayout:afterEach` every twice
