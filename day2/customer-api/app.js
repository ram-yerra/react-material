var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var customers =[
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Vivek Singhwal",
      email: "vivek@pyther.com",
      address: "India",
      phone:'9724232340'
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Vivek",
      email: "vivek@pyther.com",
      address: "India",
      phone:'9724232340'
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Rashid",
      email: "vivek@pyther.com",
      address: "India",
      phone:'9724232340'
    }
  ];


app.post('/login', function (req, res) {
   var email = req.body.email;
   var password = req.body.password;
   console.log("email:"+email);
   console.log("password:"+email);
   if(email == password && email.length > 3 ){
     res.send({result:"success", msg:"user logged in successfully",user:{name:"admin"}});
   }else{
     res.send({result:"fail", msg:"incorect username or password."});
   }
});


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
});

app.get('/app', function (req, res) {
    res.send('hello ')
  });

  
app.get('/customer', function (req, res) {
    res.send(customers);
  });

app.get('/customer/:id', function (req, res) {
    var customer = {};
    var id=req.params.id;
    customers.filter((item)=>{
      if(item.id == id){
        customer = item;
      }
    });
    res.send({result:"success", msg:"record added successfully",data: customer});
  });

app.post('/customer', function (req, res) {
    req.body.id = Date.now() +"r";
    customers.push(req.body);
    res.send({result:"success", msg:"record added successfully"});
});
app.delete('/customer', function (req, res) {
  var id = req.body.id;
  customers = customers.filter((item)=>{
      if(item.id != id){
          return item;
      }
  });
  res.send({result:"success", msg:"record deleted successfully", data: customers});
});

app.put('/customer', function (req, res) {
  var customer = req.body;
  for(var i=0; i<customers.length; i++){
    if(customer.id == customers[i].id){
      customers[i] = customer;
      break;
    }
  }
  res.send({result:"success", msg:"record updated successfully"});
});

app.listen(4000);
