import app from "./app.js";


app.get("/", (req, res) => {
    res.send("servidor de comidas funcionando en el puerto 4001 listo para produccion");
})

app.listen(4001, () => console.log("server on port 4001"));