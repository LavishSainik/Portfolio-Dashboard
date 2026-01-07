const express = require('express');
const cors = require('cors');

 const app = express();
 app.use(cors());
 app.use(express.json());

 app.get('/health', (_, res) => {
     res.json({status})
 });

 app.listen(5000, () => {
     console.log('Server is running on port 3000');
 });

 const stockRoutes = require("./routes/stocks");
app.use("/api/stocks", stockRoutes);
