const employee = {
  name: "Ada Lovelace",
  streetAddress: "123 Infinity Loop"
};
// updateEmployeeWithKeyAndValue()
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}


//destructivelyUpdateEmployeeWithKeyAndValue()
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

//deleteFromEmployeeByKey()
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

//destructivelyDeleteFromEmployeeByKey()
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}


