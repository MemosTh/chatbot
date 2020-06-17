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
            url: "https://www.miele.gr/domestic/product-selection-vacuum-cleaners-1783.htm?itm_source=fms_triflex#103",
            title: "Μετάβαση στο E-shop"
          }

        ];

        var element =[

          {
            title: "Επίσημη αντιπροσωπεία Miele",
            subtitle:"Καλώς ήλθατε στο e shop μας",
            image_url: "https://www.miele.gr/media/domestic_gr/media/assets_288_x/20000154793_Zuschnitt.jpg",
            default_action: {
              type: "web_url",
              url : "https://www.miele.gr/domestic/product-selection-vacuum-cleaners-1783.htm?itm_source=fms_triflex#103",
              webview_height_ratio: "full",
            },
            buttons:button1
          },

        ]
        response = Response.genGenericTemplate(element)
    }
    return response;
  }
};
