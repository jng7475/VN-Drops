// import priority queue
const PriorityQueue = require('priorityqueuejs');
// get user array and put in a priority queue
export const getMostEligibleUsers = async (users, bloodType) => {
  // assign priority to each user
  const priorityQueue = new PriorityQueue();
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const priority = await getPriority(user);
    priorityQueue.enqueue(user, priority);
  }
  // get all users with highest priority
  const eligibleUsers = [];
  while (priorityQueue.size() > 0) {
    const user = priorityQueue.dequeue();
    const priority = await getPriority(user);
    if (priority === 1) {
      eligibleUsers.push(user);
    }
  }
  return eligibleUsers;
};

// get priority of a user
const getPriority = async (user, bloodType) => {
  // assign priority to each user based on blood type, if match blood type, assign 1, else assign 0
  const priority = user.bloodType === bloodType ? 1 : 0;
  return priority;
};
