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
            payload: "LINK_ORDER"
          }
        ]);
        break;

      case "SEARCH_ORDER":
        response = Response.genGenericTemplate('https://www.miele.gr/media/domestic_gr/media/assets_442_x/MIELE_GR.png','memos','this is trol',)
        break;

      case "ORDER_NUMBER":
        let button = Response.genWebUrlButton('trol','https://www.miele.gr/')
          response = Response.genButtonTemplate("what do you want",button)
        break;

      case "LINK_ORDER":
        response = [
          Response.genText(i18n.__("order.dialog")),
          Response.genText(i18n.__("order.searching")),
          Response.genImageTemplate(
            `https://www.miele.gr/media/domestic_gr/media/assets_442_x/MIELE_GR.png`,
            i18n.__("order.status")
          )
        ];
        break;
    }

    return response;
  }
};
