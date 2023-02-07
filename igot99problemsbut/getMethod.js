// The function gets the value at path of object. 
//If the resolved value is undefined, the defaultValue is returned in its place. 
//The function signature is as such:
// get(john, 'profile.name.firstName'); // 'John'

const john = {
    profile: {
      name: {
        firstName: "John",
        lastName: "Doe"
      },
      age: 20,
      gender: "Male"
    }
  }

  const jane = {
    profile: {
      age: 19,
      gender: "Female"
    }
  }

  function get(objectParam, pathParam, defaultValue) {
    const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.');
  
    let index = 0;
    let length = path.length;
    let object = objectParam;
  
    while (object != null && index < length) {
      object = object[String(path[index])];
      index++;
    }
  
    const value = index && index === length ? object : undefined;
    console.log("returns: ", value !== undefined ? value : defaultValue);
    return value !== undefined ? value : defaultValue;
  }

  get(john, "profile.name.firstName", "test1");
  get(jane, "profile.name.firstName", "test2");