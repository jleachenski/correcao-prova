import "dotenv/config";
import "./config/db.js";
import e from "express";
import workshopRoute from "./routes/workshopRoute.js";
import vehicleRoute from "./routes/vehicleRoute.js";
import maintenanceRoute from "./routes/maintenanceRoute.js";

const app = e();

app.use(e.json());

app.use("/workshop", workshopRoute);
app.use("/vehicle", vehicleRoute);
app.use("/maintenance", maintenanceRoute);

app.listen(process.env.PORT, () => console.log("App running!"));
