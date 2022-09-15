import DATA from "./data.json";

const getAssistans = () => {
  // filtering DATA by assistans and creating an array of assistans
  let assistants = DATA.filter((person) => person.type == "assistant");
  let nonAssistanst = DATA.filter((person) => !person.type == "assistant");

  // creating an object with assistans as keys and empty arrays as values
  nonAssistanst.forEach((student) => {
    let findAssistantIndex = assistants.findIndex(
      (person) => person.group == student.group
    );
    assistants[findAssistantIndex].student.push(student);
  });

  console.log("Get Assistans", assistants);
};

export default getAssistans;
