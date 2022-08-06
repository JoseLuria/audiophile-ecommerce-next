import { CartProductInterface } from "../interface";
import { handleFormatPrice, handleFormatProductName } from "../utils";

export const createEmail = (
  cartList: CartProductInterface[],
  grandTotal: number
) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Audiophile - Email</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <style>
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
        
          body {
            background-color: #f1f1f1;
            padding: 36px;
            font-family: "Manrope", sans-serif;
            display: flex;
          }
        
          .mail-container {
            font-size: 15px;
            width: 100%;
            max-width: 540px;
            margin: auto;
            background-color: white;
            border-radius: 8px;
            padding: 24px;
          }
        
          .mail-title {
            color: black;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 24px;
            margin-bottom: 16px;
          }
        
          .mail-description {
            color: #858585;
            margin-bottom: 24px;
          }
        
          .mail-items {
            background-color: #f1f1f1;
            padding: 24px;
            border-radius: 8px 8px 0 0;
          }
        
          .mail-items-preview {
            width: 100%;
            display: flex;
            align-items: center;
          }
        
          .mail-items-preview img {
            width: 50px;
            left: 0;
          }
        
          .product-text {
            font-weight: bold;
            margin: 0 auto;
          }
        
          .product-text-price {
            color: #787878;
          }
        
          .product-quantity {
            right: 0;
            font-weight: bold;
            color: #787878;
          }
        
          .product-others {
            width: 100%;
            border-top: solid 1px #dedede;
            margin-top: 12px;
            font-weight: bold;
            text-align: center;
            color: #787878;
          }
        
          .product-others p {
            margin-top: 12px;
            font-size: 12px;
          }
        
          .mail-total {
            background-color: black;
            padding: 15px 24px;
            border-radius: 0 0 8px 8px;
          }
        
          .mail-total-title {
            text-transform: uppercase;
            margin-bottom: 8px;
            color: #808080;
          }
        
          .mail-total-price {
            color: white;
            font-size: 18px;
            font-weight: bold;
          }
        
          @media (min-width: 768px) {
            body {
              padding: 48px;
            }
          
            .mail-container {
              padding: 48px;
            }
          
            .mail-title {
              font-size: 32px;
              margin-bottom: 24px;
            }
          
            .mail-items {
              width: 50%;
              border-radius: 8px 0 0 8px;
            }
          
            .mail-total {
              width: 50%;
              border-radius: 0 8px 8px 0;
              display: flex;
            }
         
            .mail-total-text {
              margin: auto 0;
            }
            
            .mail-items-wrapper {
              display: flex;
              width: 100%;
            }
          }
        </style>
      </head>
      <body>
        <div class="mail-container">
          <h1 class="mail-title">Thank you<br />for your order</h1>
          <p class="mail-description">This is your order confirmation email.</p>
          <div class="mail-items-wrapper">
            <div class="mail-items">
              <div class="mail-items-preview">
                <img
                  width="50"
                  height="50" 
                  src="https://audiophile-ecommerce-website.netlify.app/products/product-xx99-mark-two-headphones/desktop/image-product.jpg"
                  alt="product-image"
                />
                <p class="product-text">
                  ${handleFormatProductName(cartList[0].name)}
                  <br />
                  <span class="product-text-price">
                    ${handleFormatPrice(cartList[0].price)}
                  </span>
                </p>
                <p class="product-quantity">
                  x${cartList[0].quantity}
                </p>
              </div>
              ${
                cartList.length > 1
                  ? `<div class="product-others"><p>and ${
                      cartList.length - 1
                    } other item(s)</p></div>`
                  : ""
              }
            </div>
            <div class="mail-total">
              <div class="mail-total-text">
                <p class="mail-total-title">Grand total</p>
                <p class="mail-total-price">${handleFormatPrice(grandTotal)}</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    `;
};
