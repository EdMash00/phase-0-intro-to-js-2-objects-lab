let employee = {
    name: "John Smith",
    streetAddress: "123 Main St"
  };
  
  // function to update employee object with a key-value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // function to destructively update employee object with a key-value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // function to delete a key-value pair from employee object
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {
      ...employee
    };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // function to destructively delete a key-value pair from employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  console.log(updateEmployeeWithKeyAndValue(employee, "name", "Mary Jane")); // {name: "Mary Jane", streetAddress: "123 Main St"}
  console.log(employee); 
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Lane St")); // {name: "John Smith", streetAddress: "456 Lane St"}
  console.log(employee);
  console.log(deleteFromEmployeeByKey(employee, "streetAddress"));
  console.log(employee);
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));
  console.log(employee);