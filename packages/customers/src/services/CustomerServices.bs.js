


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

function read(param) {
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
  read: read,
  remove: remove,
  update: update
};

export {
  Repository ,
  
}
/* No side effect */
