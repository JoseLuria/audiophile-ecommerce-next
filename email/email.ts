import nodemailer from "nodemailer";
import { createEmail } from "@/email";
import { CartProductInterface } from "@/interface";

export class Email {
  private emails: any;
  private from: string;

  constructor(emails: any) {
    this.emails = emails;
    this.from = `Audiophile <${process.env.MAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === "development") {
      return nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAILTRAP_USER,
          pass: process.env.MAILTRAP_PASS,
        },
      });
    }

    return nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: process.env.SENDGRID_USER,
        pass: process.env.SENDGRID_KEY,
      },
    });
  }

  async send(cartList: CartProductInterface[], grandTotal: number) {
    const html = createEmail(cartList, grandTotal);

    await this.newTransport().sendMail({
      from: this.from,
      to: this.emails,
      html,
      text: html,
      subject: "Audiophile - Order summary",
    });
  }
}
