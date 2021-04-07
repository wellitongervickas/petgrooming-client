

import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.bs.js";

function useRoute(param) {
  var url = RescriptReactRouter.useUrl(undefined, undefined);
  var hash = url.hash.split("/");
  var len = hash.length;
  if (len !== 2) {
    if (len !== 3) {
      return /* List */0;
    }
    var match = hash[0];
    if (match !== "") {
      return /* List */0;
    }
    var match$1 = hash[1];
    if (match$1 !== "customers") {
      return /* List */0;
    }
    var id = hash[2];
    return /* Read */{
            _0: id
          };
  }
  var match$2 = hash[0];
  if (match$2 !== "") {
    return /* List */0;
  }
  return /* List */0;
}

export {
  useRoute ,
  
}
/* RescriptReactRouter Not a pure module */
