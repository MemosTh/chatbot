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

        let elements = [
          {
            image_url:'https://www.miele.gr/media/domestic_gr/media/assets_288_x/20000154793_Zuschnitt.jpg',
            title:"Μαγείρεμα",
            subtitle:"",
            buttons:[]
          },
          {
            image_url:'https://www.miele.gr/media/domestic_gr/media/assets_288_x/20000154793_Zuschnitt.jpg',
            title:"Επίσημη αντιπροσωπεία Miele",
            subtitle:"τεστ",
            buttons:[]
          }

        ]


        let buttons = [
          {
            type: "postback",
            title: "view",
            payload: "THIS_IS_TEST"
          },
          {
          type: "postback",
          title: "view",
          payload: "THIS_IS_TEST2"
    }
        ]
        let count= 0;
        for (let element of elements){
            element["buttons"].push(buttons[count])
            count++;
        }

        console.log(elements);

        response = Response.genGenericList(elements)
        console.log(response);
        break;

    }
      let message = Response.genText("Ποια κατηγορία σας ενδιαφέρει;")
    return [message, response];
  }




};
