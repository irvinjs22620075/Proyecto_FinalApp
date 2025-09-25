
import express from "express";
import bodyParser from "body-parser";
import alumnosRoutes from "./routes/Router.js";


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/api", alumnosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});