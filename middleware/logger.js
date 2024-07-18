import colors from "colors";

const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    PUT: "blue",
    POST: "yellow",
    DELETE: "red",
  };

  const color = methodColors[req.method] || "#ffffff";

  console.log(
    `${req.method} ${req.protocol}://${req.get("host")} ${req.originalUrl}`[
      color
    ]
  );
  next();
};

export default logger;
