


function list(param) {
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

function show(param) {
  return {
          id: "1",
          name: "Welliton"
        };
}

function remove(param) {
  
}

function update(param) {
  
}

var Repository = {
  list: list,
  show: show,
  remove: remove,
  update: update
};

export {
  Repository ,
  
}
/* No side effect */
