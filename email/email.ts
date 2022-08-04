import nodemailer from "nodemailer";
import { createEmail } from "./";
import { CartProductInterface } from "../interface";

export class Email {
  private emails: any;
  private from: string;

  constructor(emails: any) {
    this.emails = emails;
    this.from = process.env.MAIL_FROM!;
  }

  newTransport() {
    return nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
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
      subject: "Your order summary",
    });
  }
}
