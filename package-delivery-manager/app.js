const packages = [
  {
    trackingNumber: "PKG1001",
    customer: "Jordan Lee",
    address: "120 Pine Street",
    priority: 2,
  },
  {
    trackingNumber: "PKG1002",
    customer: "Taylor Smith",
    address: "45 Oak Avenue",
    priority: 1,
  },
  {
    trackingNumber: "PKG1003",
    customer: "Morgan Davis",
    address: "800 River Road",
    priority: 3,
  },
];

function linearsearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].trackingNumber === target) {
      return array[i];
    }
  }
  return null; // Return null if the target is not found
}

console.log(linearsearch(packages, "PKG1003")); // Should return the package object for Morgan Davis
