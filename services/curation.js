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
  config = require("./config"),
  i18n = require("../i18n.config");

module.exports = class Curation {
  constructor(user, webhookEvent) {
    this.user = user;
    this.webhookEvent = webhookEvent;
  }

  handlePayload(payload) {
    let response;
    let outfit;

    switch (payload) {

      case "CURATION":


        let buttons = [
          {
            type: "postback",
            title: "view",
            payload: "THIS_IS_TEST"
          }
        ]
        console.log(buttons);
        response = Response.genGenericTemplate('https://www.miele.gr/media/domestic_gr/media/assets_288_x/20000154793_Zuschnitt.jpg', 'Επίσημη αντιπροσωπεία Miele', 'Καλώς ήλθατε στο e shop μας', buttons)
        console.log(response);
        break;

    }

    return response;
  }




};
