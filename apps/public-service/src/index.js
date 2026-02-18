const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
    console.log(`Public Service running on port ${PORT}`);
});
