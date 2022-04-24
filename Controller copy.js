const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models=require('./models');


const app = express ();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
let user=models.User;
let tracking=models.Tracking;
let product=models.Product;

//crear usuario no banco
app.get('/create', async (req,res)=>{
    let create = await user.create({
        name: "joao",
        password: "abc",
        createdAt: new Date(),
        updateAt: new Date()
    })
    res.send('usuario criado com sucesso!');
});
//ler usuario no banco
app.get('/read', async (req,res)=>{
    let read = await user.findAll({
        raw:true,
    });
    console.log(read);
});
// atualizar informacoes do usuario ou qualquer tabela q tenha relacionamento.
app.get('/update', async (req,res)=>{
    let update = await user.findByPk(2,
        {include:[{ all:true }]}
        ).then((response)=>{
            console.log(response.Tracking);
      //response.Tracking[0].local='Nova Cidade';
      //response.Tracking[0].save();
    });

});
app.get('/delete', async (req,res)=>{
    user.destroy({
        where: {id: 4}
    });
});

let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
  console.log('Servidor Rodando');
})