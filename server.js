import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;
const CRON_SECRET = process.env.CRON_SECRET;

app.use(express.json());

// 1. Lightweight Health Check (Public - good for uptime pings)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
  });
});

app.get("/hello", (req, res) => {
    res.status(200).json({
        message: "hello joseph",
        uptime: Math.floor(process.uptime()),
        timestamp: new Date().toISOString(),
    })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});