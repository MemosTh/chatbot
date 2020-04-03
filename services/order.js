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
      case "TRACK_ORDER":
        response = Response.genQuickReply(i18n.__("order.prompt"), [
          {
            title: i18n.__("order.account"),
            payload: "LINK_ORDER"
          },
          {
            title: i18n.__("order.search"),
            payload: "SEARCH_ORDER"
          },
          {
            title: i18n.__("menu.help"),
            payload: "SUMMER_COUPON"
          }
        ]);
        break;

      case "SEARCH_ORDER":
        let button1 = Response.genWebUrlButton('trol','https://www.miele.gr/')
        response = Response.genGenericTemplate('https://www.miele.gr/media/domestic_gr/media/assets_442_x/MIELE_GR.png','memos','this is trol',button1)
        break;

      case "ORDER_NUMBER":
        let button = Response.genWebUrlButton('trol','https://www.miele.gr/')
          response = Response.genButtonTemplate("what do you want",button)
        break;

      case "SUMMER_COUPON":
        response = [
          Response.genText(
              i18n.__("leadgen.promo", {
                userFirstName: this.user.firstName
              })
          ),
          Response.genGenericTemplate(
              `${config.appUrl}/coupon.png`,
              i18n.__("leadgen.title"),
              i18n.__("leadgen.subtitle"),
              [Response.genPostbackButton(i18n.__("leadgen.apply"), "COUPON_50")]
          )
        ];
        break;
    }

    return response;
  }
};
