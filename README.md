## Deko Front End Challenge - Akan's version
This project was created using create-react-app

The project is sort of over engineered. It could have been completed with `useReducer` but `redux` was used to 
demonstrate more complex implementation.

### How to run
```
$ yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### How to run
```
$ yarn test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### If I had more time for this task...
I would have added the following:
 * Complete set of tests. I have only added representative samples of tests for example.
   * `actions` - [actions.test.js](./src/redux/merchant/actions.test.js)
   * `reducer` - [reducer.test.js](./src/redux/merchant/reducer.test.js)
   * `middleware` - [middleware.test.js](./src/redux/merchants/middleware.test.js)
   * `selector` - [selector.test.js](./src/redux/merchants/selector.test.js)
   * `component` - [MerchantsComponent.test.js](./src/components/Merchants/MerchantsComponent.test.js)
   * `layout component ` - [MerchantsComponent.test.js](./src/components/Merchant/MerchantLayoutComponent.test.js)
 * Add test coverage.
 * Add `prop-types` validation.
 * Use `ReactRouter` to create paths for merchants e.g. http://localhost:3000/merchant/A1002. This is important 
   for using direct links in documents and communications and bookmarks.
 * Refactor out business logic for calculation of subsidies into separate utility function since this is core business 
   logic. It is currently tested indirectly in [selector test](./src/redux/merchant/selector.test.js).
 * Pixel match UI design. Design commonly comes from `zeplin` where fonts and dimensions are specified. 
   Spec from image requires careful measurements of pixels to reproduce and I didn't have time.
