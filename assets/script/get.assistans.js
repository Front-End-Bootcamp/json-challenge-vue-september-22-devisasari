import data from "./data.json";

// filtering by person type

let getAssistans = () => {
  let assistants = data.filter((person) => person.type);
  console.log("Get Assistans", assistants);
};

export default getAssistans;
