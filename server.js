const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001; // Choose a port number

app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); // Serve files from the public directory

// Define a route to get the HTML template
app.get('/getTemplate/:type', (req, res) => {
  const type = req.params.type;
  const templatePath = path.join(__dirname, 'public', `${type}.html`);

  //console.log(`Requested template type: ${type}`);
  //console.log(`Resolved template path: ${templatePath}`);

  res.sendFile(templatePath, (err) => {
    if (err) {
      //console.error(`Error sending file: ${err}`);
      res.status(500).send('Error sending template file');
    } else {
      //console.log(`Sent template file: ${templatePath}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
