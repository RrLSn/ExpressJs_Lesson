let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Doe" },
  { id: 4, name: "Jimmy Doe" },
];

//GET users
export const getUsers = (req, res, next) => {
  //limit
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(users.slice(0, limit));
  }
  res.status(200).json(users);
};

// GET user
export const getUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  //   const usersId = users.filter((user) => user.id === id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    const error = new Error(`user wih the id of ${id} does not exist`);
    // error.status = 404
    return next(error);
  }
  res.status(200).json(user);
};

// POST user
export const postUser = (req, res, next) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  if (!newUser.name) {
    const error = new Error("Please include a name");
    return next(error);
  }
  users.push(newUser);
  res.status(200).json(users);
};

// Update user
export const updateUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    const error = new Error(`user with the id of ${id} does not exist`);
    return next(error);
  }
  user.name = req.body.name;
  res.status(200).json(user);
};

// DELETE user
export const deleteUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    const error = new Error(`user with the id of ${id} does not exist`);
    return next(error);
  }
  users = users.filter((user) => user.id !== id);
  res.status(200).json(users);
};
