import app from './index';
import { db } from './db';

const port = process.env.PORT || 4600;

db();
app.listen(port, () => console.log(`App is listening on port: ${port}`));