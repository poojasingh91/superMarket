import { toast } from "react-toastify";
import Product from "../components/Product";
import TemplateProduct from "../components/TemplateProduct";
import { apiKey, cartApiUrl, warehouseId } from "../config";

// function to render Row
const renderItemRow = (
  items: Array<any>,
  rowIndex: number,
  itemsPerRow: number,
  className: string
) => {
  className = !className ? "col-md-4 top_brand_left" : className;
  let row = [];
  // extract each row from products list
  for (
    let i = rowIndex * itemsPerRow;
    i < rowIndex * itemsPerRow + itemsPerRow;
    i++
  ) {
    i < items.length &&
      row.push(
        <div key={i} className={className}>
          <Product {...items[i]} />
        </div>
      );
  }
  return row;
};

// function to render row for tempalte products (needed coz time is different from normal product)
const renderTemplateItemRow = (
  items: Array<any>,
  rowIndex: number,
  itemsPerRow: number,
  className: string
) => {
  className = !className ? "col-md-4 top_brand_left" : className;
  let row = [];
  // extract each row from products list
  for (
    let i = rowIndex * itemsPerRow;
    i < rowIndex * itemsPerRow + itemsPerRow;
    i++
  ) {
    i < items.length &&
      row.push(
        <div key={i} className={className}>
          <TemplateProduct {...items[i]} />
        </div>
      );
  }
  return row;
};

// access Token
const accessToken = JSON.parse(
  localStorage.getItem("super-market-jwt") || "{}"
).access_token;

const isLoggedIn = () => {
  const accessToken = JSON.parse(
    localStorage.getItem("super-market-jwt") || "{}"
  ).access_token;
  const sessionDuration = JSON.parse(
    localStorage.getItem("super-market-jwt") || "{}"
  ).expires_in;
  return accessToken && sessionDuration > 0;
};

// function to get cart (used in multiple places so defined here)
const getCart = () => {
  return new Promise((resolve, reject) => {
    fetch(cartApiUrl, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Api-key": apiKey,
        "Warehouse-Id": warehouseId,
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let cartProducts =
          data.data &&
          data.data.cartProducts &&
          data.data.cartProducts.map((d: any) => ({
            cartProdId: d.id,
            prodId: d.product.id,
            name: d.product.title,
            priceId: d.product.unitPrice[0].id,
            dprice: d.price || d.product.unitPrice[0].sellingPrice,
            mprice: d.product.unitPrice[0].markedPrice,
            quantity: d.quantity,
            imgSrc: d.product.categoryBackgroundImage,
          }));
        resolve(cartProducts);
      })
      .catch((error) => {
        toast("Failed to fetch data! Please try again", { type: "warning" });
        console.error(error);
        reject();
      });
  });
};

// function to add cart (used in multiple places so defined here)
const addToCart = (formdata: any) => {
  return new Promise((resolve, reject) => {
    fetch(cartApiUrl + "-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + accessToken,
        "Api-key": apiKey,
        "Warehouse-Id": warehouseId,
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!data.errors) {
          toast("Item added to Cart Successfully ", { type: "success" });
        } else {
          toast("Failed to add the item to the Cart! Please try again", {
            type: "error",
          });
        }
        const cartProduct = {
          cartProdId: data.data.id,
          prodId: data.data.product.id,
          name: data.data.product.title,
          priceId: data.data.product.unitPrice[0].id,
          dprice:
            data.data.price || data.data.product.unitPrice[0].sellingPrice,
          mprice: data.data.product.unitPrice[0].markedPrice,
          quantity: data.data.quantity,
        };
        resolve(cartProduct);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        toast("Failed to add the item to the Cart! Please try again", {
          type: "error",
        });
        reject();
      });
  });
};

// function to update cart (used in multiple places so defined here)
const updateCart = (formdata: any, cartProdId: number) => {
  return new Promise((resolve, reject) => {
    fetch(cartApiUrl + "-product/" + cartProdId, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + accessToken,
        "Api-key": apiKey,
        "Warehouse-Id": warehouseId,
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status_code < 300) {
          toast("Cart Item updated Successfully ", { type: "success" });
        } else {
          toast("Failed to update the cart item! Please try again", {
            type: "error",
          });
        }
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        toast("Failed to update the cart item! Please try again", {
          type: "error",
        });
      });
  });
};

// function to delete item in cart (used in multiple places so defined here)
const deleteFromCart = (cartProdId: number) => {
  return new Promise((resolve, reject) => {
    fetch(cartApiUrl + "-product/" + cartProdId, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + accessToken,
        "Api-key": apiKey,
        "Warehouse-Id": warehouseId,
      },
    })
      .then((response) => {
        if (response.ok) {
          toast("Item removed from Cart Successfully ", { type: "success" });
          resolve(true);
        } else {
          toast("Failed to delete the cart item! Please try again", {
            type: "error",
          });
          reject();
        }
      })
      .catch((error) => {
        console.error(error);
        toast("Failed to delete the cart item! Please try again", {
          type: "error",
        });
        reject();
      });
  });
};

export {
  accessToken,
  isLoggedIn,
  renderItemRow,
  renderTemplateItemRow,
  getCart,
  addToCart,
  updateCart,
  deleteFromCart,
};
