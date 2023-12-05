const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Make sure to require axios
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "1aa6ce12-e58c-4863-a631-56e208899ae2" } }
    );

    // Assuming successful response from the API
    return res.status(response.status).json(response.data);
  } catch (error) {
    // Handle errors gracefully
    if (error.response) {
      // The request was made, but the server responded with an error status
      return res.status(error.response.status).json(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received from the server:", error.request);
      return res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Something happened in setting up the request that triggered an error
      console.error("Error setting up the request:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
