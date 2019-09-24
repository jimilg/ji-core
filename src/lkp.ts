// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
// fetch polyfill
import 'whatwg-fetch' // tslint:disable-line:no-import-side-effect

import api from './api'
let lkp

// @ts-ignore-next-line
if (window.lkp) {
  // @ts-ignore-next-line
  lkp = window.lkp
} else {
  // @ts-ignore-next-line
  lkp = window.lkp = {
    api
  }
}
export default lkp
// export default class DummyClass { }
