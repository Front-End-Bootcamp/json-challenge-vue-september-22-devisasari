import DATA from "./data.json";

const filterByGroupName = () => {
  // reducing DATA to an object with groups as keys and empty arrays as values
  let groupNames = DATA.reduce((result, item) => {
    result[item.group] = [];
    return result;
  }, {});

  // Using Object.keys to get an array of group names
  Object.keys(groupNames).forEach((group) => {
    let findStudents = DATA.filter((student) => student.group == group);
    groupNames[group] = findStudents;
  });

  console.log("Filter by Group Name", groupNames);
};

export default filterByGroupName;
