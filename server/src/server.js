const app = require("./app")
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    next();
});