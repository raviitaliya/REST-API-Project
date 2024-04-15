import connect from "./src/config/db";
import { config } from "./src/config/config";
import app from "./src/App";
const startserver = async () => {
 
  
  await connect();
  const port = config.port || 3000;

  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
};

startserver();
