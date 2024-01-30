import app from "./src/app";
import { sequelize } from "./src/db";

app.listen(3000, () => {
    sequelize.sync({force: true});
    console.log("app is listening in port 3000")
})