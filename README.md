# Material template

This repository contains both the source code of this course's webpage and the source for the content of the course. The content is located in the `data` folder and everything else is for the website.


## Set Up App


Requirements: recent Node

```sh
npm ci
npm run develop
```
If the above doesnt work try

```sh
rm -rf node_modules
rm package-lock.json
npm install --legacy-peer-deps
npm ci
npm run develop
```

To run in production replace 

```sh
npm run develop
```
With

```sh
gatsby build
```
