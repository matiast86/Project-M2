const app = require("./src/server");
const conDb = require("./src/config/conDb");

const port = 3000;

conDb()
   .then((res) => {
      app.listen(port, () => {
      console.log("Listening to port 3000"); 
});
   })
   .catch((error) => {
      console.log("Failed to connect to the DB");
   });

