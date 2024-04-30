# Snappfood Code Challenge

## Introduction

This is the snappfood code challenge for Senior Front-end Engineer position that I have worked on it. I have tried to do it from scratch with webpack and do it in less than two days (deadline). I think I could worked better than this I if had more time.

## Checklist

- [x] Custom Webpack Config
- [x] Typescript Support
- [x] Base Styles Using Sass
- [x] Utility Classes Using Sass
- [x] USing BEM in Sass
- [x] Infinite Scrolling
- [x] Virtualized Lists
- [x] Redux usage
- [x] Git principles

## Git

- I have used Angular Commit Guidelines for commits to be readable.

## Bundler

- This project uses `Webpack` as it's bundler.
- The Webpack config is written in a way that is modular and maintainable.
- All of the configs are written using native ESM modules for easier usage.

## Project structure

- The `index.tsx` is the starting point of the app, it contains the routes and general definitions.
- This project uses a `Fractal` directory structure, It means that every directory can have it's dependencies inside itself to avoid cluttering the project

## Styling

- This project uses `SASS` and `SASS Modules` for the styling.
- The theming part of the App is done by utilizing `CSS Variables` and every color, font, spacing, padding and margin is calculated by the base variables. this makes the project fully flexible and you can modify it very easily

## APIs

- This project does not use any third-party library for it's API's. everything is built around `Fetch` API
- The API's are consisted of 3 parts:
  1- HttpService
  2- useAPI hook
  3- ApiRequestObjects

  ### HttpService

  The HTTPService is the base building block of the API's. It accepts an `ApiRequestObject` as a parameter and runs the desired http request.

  ### What are ApiRequestObjects?

  They are simple javascript objects containing the `endpoint`, the request `method` and other optional properties. they essentially describe the request in a declarative way.
  Here is a sample request object:

  ```typescript
  const getCountryListAPI: ApiRequestObject<object, VendorListResponse> = {
    endpoint: `all/folan`,
    method: "GET",
  };
  ```

  ### useAPI hook

  The `useAPI` hook is a utility to help the developer use the HTTPService in a declarative way. It accepts the `APIRequestObject` and handles the request on itself.

  ```typescript
  const { request, pending, data } = useAPI({
    apiRequestObject: getCountryListAPI,
    fetchOnMount: true,
    successCallback: (data) => {},
    failedCallback: (error) => {},
  });
  ```

  You can either get the response by using the `data` variable or by calling the async `request` function.
  There is a third way, you can pass a callback to the `successCallback` function and do some work when the request is done.

## State Management Using Redux and Redux-Toolkit

This project utilizes Redux store as the global state management solution.
The reducers/actions are created using redux-toolkit slices and all of the stores are completely typed using typescript.
The selectors are also memoized using `createSelector`

I personally think this small project did not need a global state management solution but
I implemented it for the sake of the interview.

## Infinite Loading and Virtualized Lists

I've tried to implement the infinite loading part without using any external library.
It utilizes the `useAPI` hook internally and calls the next page and stores it's data whenever the `handleNextPage` function is called.

I've implemented a `useIntersectionObserver` hook but it got deprecated after implementing the virtualized lists since it covers the usage automatically
