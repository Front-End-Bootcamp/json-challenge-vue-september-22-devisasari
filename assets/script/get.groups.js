import data from "./data.json";

// reducing the groups with gruopBy 

const groupByGroupName = data.reduce((category, person) => {
  const { group } = person;
  category[group] = category[group] ?? [];
  category[group].push(person);
  return category;
}, {});

console.log("Reduce by Group Name", groupByGroupName)

// console.log(JSON.stringify(groupByCategory, null, 2)); 

export default groupByGroupName;

