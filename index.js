import app from "./server";

const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});