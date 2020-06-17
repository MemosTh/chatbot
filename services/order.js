/**
 * Copyright 2019-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Messenger For Original Coast Clothing
 * https://developers.facebook.com/docs/messenger-platform/getting-started/sample-apps/original-coast-clothing
 */

"use strict";

// Imports dependencies
const Response = require("./response"),
  i18n = require("../i18n.config"),
  config = require("./config");

module.exports = class Order {
  static handlePayload(payload) {
    let response;

    switch (payload) {
      case "ESHOP":
        let button1 = [
          {

            type: "web_url",
            url: "https://www.miele.gr/domestic/shop-2151.htm",
            title: "Μετάβαση στο E-shop"
          }

        ];

         response = Response.genGenericMedia("video", "https://www.facebook.com/Miele.Hellas/videos/962256810875854/", "cc");

    }
    return response;
  }
};
