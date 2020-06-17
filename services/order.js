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

        var element =[

          {
            title: "Επίσημη αντιπροσωπεία Miele",
            subtitle:"Καλώς ήλθατε στο e shop μας",
            image_url: "https://www.miele.gr/media/domestic_gr/media/assets_288_x/20000154793_Zuschnitt.jpg",
            default_action: {
              type: "web_url",
              url : "https://www.google.com/search?sxsrf=ALeKk03TdaoFAoycJW0WucjdrW6agd6maw:1588849668641&q=miele+service+greece&npsic=0&rflfq=1&rlha=0&rllag=38026745,23773810,6440&tbm=lcl&ved=2ahUKEwiO5-agzqHpAhWJxYUKHfQeAVAQjGp6BAgLEDQ&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:4&rldoc=1#rlfi=hd:;si:;mv:[[42.73397854082312,34.90618672128997],[32.993780256537484,12.494077346289968],null,[38.02546067080482,23.700132033789966],6]",
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
