exports.codeMailer = function(email,name,course_n,course_i,code){
    var nodemailer = require('nodemailer')
    const mailConfig = require('../configs/mail.config')
      var mailer = nodemailer.createTransport
      (
        {
        service:'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        ignoreTLS: true,
        auth: {
          user: mailConfig.EMAIL,
          pass: mailConfig.EMAIL_PASSWORD,
        }
      }
      )

      var mailOptions = {
        from:mailConfig.EMAIL,
        to: email,
        subject: 'Course ' +course_n+ " added",
        text:"Hello,"+name+"\n\n"+
      "Your course "+ course_i +":" + course_n+" ,is added successfully please share the following code with your students to eroll with:"+code+
        "\n\n"+"Regards,"+"\n"+"Team Ams"
      }
      mailer.sendMail(mailOptions , function(error, info){
        if (error) 
          console.log(error);
    })
     
  }
