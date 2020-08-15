import  express from "express";
import routes from './src/routes';
const app = express();



app.use(express.json());
app.use('/api', routes);

app.get("/", function (req, res) {
  res.send("Hello Kisso!");
});


// Error handler
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    error: 'Route not found',
  });
});

// Error handler
app.use((err, req, res, next) => {
  res.status((err.status >= 100 && err.status < 600) ? err.status : 500).json({
    status: err.status ? err.status : 500,
    error: err.message,
  });
});

export default app;

