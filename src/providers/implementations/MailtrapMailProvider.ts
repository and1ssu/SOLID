import { IMailProvider, IMessage } from "../IMailProvider";
import nodeMailer from "nodemailer";

export class MailtrapMailProvider implements IMailProvider {
  private transporter;

  constructor() {
    this.transporter = nodeMailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "fa9e16d358ac92",
        pass: "46e4b05dec0c9f",
      },
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
        to: {
            name: message.to.name,
            address: message.to.email,
        },
        from: {
            name: message.from.name,
            address: message.from.email,
        },
        subject: message.subject,
        html: message.body,
    });
  }
}
