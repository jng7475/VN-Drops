// import priority queue
const PriorityQueue = require('priorityqueuejs');
// get user array and put in a priority queue
export const getMostEligibleUsers = async (
  users,
  bloodType,
  distance,
  healthCondition,
  lastDonate,
  reliability,
) => {
  // assign priority to each user
  const priorityQueue = new PriorityQueue();
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const priority = await getPriority(
      user,
      bloodType,
      distance,
      healthCondition,
      lastDonate,
      reliability,
    ); //get priority of user
    priorityQueue.enqueue(user, priority);
  }
  // get all users with highest priority
  const eligibleUsers = [];
  while (priorityQueue.size() > 0) {
    const user = priorityQueue.dequeue();
    // const priority = await getPriority(user);
    // if (priority === 1) {
    eligibleUsers.push(user);
    // }
  }
  return eligibleUsers;
};

// get priority of a user
const getPriority = async (
  user,
  bloodType,
  distance,
  healthCondition,
  lastDonate,
  reliability, 
) => {
  // assign priority to each user based on blood type, if match blood type, assign 1, else assign 0
  const bloodPriority = user.bloodType === bloodType ? 1 : 0;
  const distancePriority = distance <= 3.0 ? 1 : 0;
  const healthConditionPriority = healthCondition == true ? 1 : 0;
  const lastDonatePriority = lastDonate >= 3.0 ? 1 : 0;
  const reliabilityPriority = reliability > 80 ? 1 : 0;
  const priority =
    (bloodPriority +
      distancePriority +
      healthConditionPriority +
      lastDonatePriority +
      reliabilityPriority) /
    5;
  return priority;
};
