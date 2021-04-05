


function get(param) {
  return [
          {
            id: "1",
            name: "Welliton"
          },
          {
            id: "2",
            name: "Jhon doe"
          }
        ];
}

var List = {
  get: get
};

function read(param) {
  return {
          id: "1",
          name: "Welliton"
        };
}

var Show = {
  read: read
};

var Repository = {
  List: List,
  Show: Show
};

export {
  Repository ,
  
}
/* No side effect */
