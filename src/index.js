import express from "express";
import productsRoutes from "./routes/products.routes.js"
import cartsRoutes from "./routes/carts.routes.js"
import __dirname from "./utils.js";

//declaramos express y asigamos el puerto
const app = express();

//middlewares de configuracion
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Le indicamos al server que el directorio public es publico
app.use(express.static(__dirname + './public'))

//configuracion de puerto
const PORT= 8080;

/* app.use(function(resq,res,next){
    console.log("mi pimer middleware a mi nivel de app")
    console.log("time" + Date().toLocaleString())

    //para salir del Md

    next()
}) */

//crear endpoint

//endpoint de telemetriea
app.get('/ping',(req,res) =>{
    res.send('pong')
})

//Routes
app.use("/api/product", productsRoutes)
app.use("/api/carts", cartsRoutes)

/* let users =[]; */

//LISTAR
/* app.get("/api/users",(req,res)=>{
res.send(users)
}) */

//CREAR
/* app.post("/api/users",(req,res)=>{
let user= req.body */

//asignamos un ide desde nuestro backend
/* const numRandom = Math.floor(Math.random()* 200 + 1)
user.id = numRandom + users.length */

// validamos
/* if(!user.first_name || !user.last_name || !user.email || !user.password){
    return res.status(400).send('Debe enviar todos los datos')
}

users.push(user)
res.send({status: 'success', msg: "usuario creado"})
}) */

//ACTUALIZAR
/* app.put("/api/users/:usersId",(req,res)=>{
    let userId = parseInt(req.params.usersId)
    let userUpdate= req.body
    
    const userPosition = users.findIndex(user => user.id === userId)

    if(userPosition < 0) {
        return res.status(404).send('Usuario no encontrado')
    }

    users[userPosition]= userUpdate
    
    res.send({status: 'success', msg: "usuario actualizado"})
    }) */


//ELMINAR
/* app.delete("/api/users/:usersId",(req,res)=>{
    let userId = parseInt(req.params.usersId)
    
    
    const userPosition = users.findIndex(user => user.id === userId)

    if(userPosition < 0) {
        return res.status(404).send('Usuario no encontrado')
    } */

    //eliminamos al usuario de la lista
   /*  users.splice(userPosition, 1)
    
    res.send({status: 'success', msg: "usuario eliminado"})
    }) */

/* app.get("/saludo",(req,res)=>{
    res.send("hola mundo desde express!")
}) */

/* app.get("/bienvenida",(req,res)=>{
res.send('<p style="color:blue"> Bienvenido a express, estoy usando HTML como respuesta </p>')
}) */

/* app.get("/usuario",(req,res)=>{
const user = {
    nombre: "Alvaro",
    apellido: "Castano",
    edad:"25",
    correo:"alvarocastano_@outlook.com"
}

res.send(user)

}) */

//usando req params

/* app.get("/user/:nombre/:apellido", (req,res)=>{
    console.log(req.params);

    res.send(`Hola, tu nombre completo es: ${req.params.nombre} ${req.params.apellido}`)
}) */

/* const usuarios = [
    {id:1, nombre:"juan", apellido:"torres",edad:"20",genero:"M"},
    {id:2, nombre:"alberto", apellido:"miranda",edad:"21",genero:"M"},
    {id:3, nombre:"maria", apellido:"suarez",edad:"22",genero:"F"},
    {id:4, nombre:"carlos", apellido:"castro",edad:"23",genero:"M"}
] */

/* app.get("/userbyId/:userId", (req,res)=>{
    let {userId} = req.params
    const user = usuarios.find(u => u.id === parseInt(userId))
    if(!user){
        return res.status(404).send("usuario no encontrado");
    }
    res.send(user)
}) */

//usando req query

/* const dataArray =[] */

//http://localhost:8080/createdata/query?nombre=isabella&apellido=cano
/* app.get("/createdata/query", (req,res)=>{
    let data = req.query
    console.log(data)

        dataArray.push(data)

    res.send("se creo el registro de forma correcta")
})

app.get("/findall", (req,res)=>{
    res.send(dataArray)
}) */
 
app.listen(PORT, ()=>{
    console.log(`server corriendo en el puerto ${PORT}`);
    
})