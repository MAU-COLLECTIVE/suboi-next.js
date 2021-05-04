This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 1. Git workflow
Guide A: `ONLY add` line of code your work to another one work, and `remove` or `edit` are not allowed! And if you wanna improve it, just have a discussion with author to make sure them alright!

Guide B: Gitflow following these step.
- Step 1:  Pull the lastest change in `trunk` branch from this repository.
- Step 2: Create new branch from `trunk` 

Naming convention for git branch:

`a.` feature branches or sometime called topics branch: 

ex: your-task-you-are-working-on

ex: new-music-section

`b.` Hotfix branches: 

ex: hotfix-*

- Step 3: Create a pull request(PR) after you finished the task. The title must be described the task you've done, also link the issues task in project. 

No self-merge. All `PR` should be check and QA carefully before it merge to trunk.

If your codebase in currently branch you're working conflict with trunk when create a PR, you should create a new branch from `trunk` and merge fast forward to your branch, then check it up again. -> Check your PR, if it's green check, that's fine. 

Another note for Conflict problems: NO TOUCHING IN OTHER CODE. Should ask them if you modify or whatever!

Handle the conflict:
- If your code is conflict when create a pull reque
## 2. Project specific
- Yarn as package manager by default
- AirBnB esLint and styleLint for style guide

## 3. Task, Bonus and Minus system
After you read this readme.md, you'all agree my term about quality in work process.

You will have 100 point ~ 100$ and 3 life point ~ maximum three time of mistakes.

`a.1` If you've made so much mistake on gitflow so far, there will minus 10 points.

`a.2` You were not paying enough attention, careful in detail to the task. And you let me QA for many time that mean you just have been minus 30 points.

`a.3` Depend on how hard the task you do, I'll set money on each task. In some case, you don't know how to implements or meet the quality (ex: UI, respondsive, expectation from designer). I will consider about task budget, and take some real insight for it -> money you would get.

`b.1` QA can't find any issues, but later that come couple bugs. Do you get minus points ? Nope You just have to work on `hotfix`

--------

Any new rules will anounce or feedback their by team or project owner.

## 4. Project structure

```
project
│
├─ pages // all the routes of Next.js application
│   ├─ index.js // home page
│   ├─ shop.js
│   └─ music.js
│
├─ public // put all image, icon... here
│
└─ app
    │
    ├─ api // contains all code we need to access the APIs
    │
    ├─ components
    │   │
    │   ├─ elements
    │   │   │
    │   │   ├─ based // basic component  (Button, Card,...)
    │   │   │   ├─ Button
    │   │   │   ├─ Input
    │   │   │   ├─ MixingImage
    │   │   │   ├─ PlayingSong
    │   │   │   ├─ RalatedSongs
    │   │   │   ├─ SubscribeCard
    │   │   │   └─ TourCard
    │   │   │
    │   │   └─ shared // component which is used by all pages
    │   │       ├─ ChooseLanguage
    │   │       ├─ Navigation
    │   │       └─ Social
    │   │
    │   ├─ templates
    │   │   ├─ Home.js
    │   │   ├─ Music.js
    │   │   └─ Shop.js
    │   │
    │   └─ layouts // used to wrap Templates
    │      └─ Layout.js
    │
    ├─ constants // all global constants
    │
    ├─ context
    │
    ├─ hooks
    │
    ├─ styles // all scss files
    │
    └─ utils // put JS functions which can reuse
``` 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```


