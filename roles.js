//write a function that takes two parameter(userRole,roles)
//return true or false based on the role check..

const userRole = ["admin", "vendor"];
const roles = ["vendor", "inventoryManager", "receptionist"];
const checkRole = (userRole) => {
  //   return userRole.includes(userRole);
  const check = roles.map((roles) => userRole.includes(roles));
  return check.includes(true);
};

// const res = checkRole("admin");
const res = checkRole(userRole, roles);
console.log(res);
