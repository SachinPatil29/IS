const express=require('express');
const cors=require('cors');
const nodemailer=require('nodemailer');
const app=express();

app.use(cors());
app.use(express.json());


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service:'gmail',
    port: 465,
    secure: true,
    auth: {
      user: 'swaroopanegundi404@gmail.com',
      pass: 'icib apfh qfoi wobf',
    },
  });


app.post('/api',async(req,res,next)=>{
    console.log(req.body);

    const key=Math.floor(Math.random()*(9999-1000)+1000);

    const options = {
        from: 'swaroopanegundi404@gmail.com',
        to: req.body.email,
        subject: 'OTP For Login',
        html: `OTP is ${key}` 
    };
      
    await transporter.sendMail(options); 
    res.status(200).json({otp:key});
})

app.listen(80,()=>{console.log('Listening on port 80')})