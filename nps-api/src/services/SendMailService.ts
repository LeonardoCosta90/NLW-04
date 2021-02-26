import nodemailder, { Transporter } from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";

class SendMailService{
  private client: Transporter;
  constructor(){
    nodemailder.createTestAccount().then(account => {
      let transporter = nodemailder.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });
  }
  async execute(to: string, subject: string, variables: object, path: string){
    
    const templateFileContent = fs.readFileSync(path).toString("utf-8");

    const mailTemplateParse = handlebars.compile(templateFileContent);

    const html = mailTemplateParse(variables);

    const message = await this.client.sendMail({
      to,
      subject,
      html,
      from: "NPS <noreply@nps.com.br>"
    })

    console.log("Message sent: %", message.messageId);
    console.log("Previw URL: %", nodemailder.getTestMessageUrl(message));
  }
}

export default new SendMailService();