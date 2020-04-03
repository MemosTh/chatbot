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
  Survey = require("./survey"),
  config = require("./config"),
  i18n = require("../i18n.config");

module.exports = class Care {
  constructor(user, webhookEvent) {
    this.user = user;
    this.webhookEvent = webhookEvent;
  }

  handlePayload(payload) {
    let response;


    switch (payload) {
      case "CARE_HELP":
      let opt1 = Response.genText(
        i18n.__("care.opt1"));

      let or = Response.genText(i18n.__("care.or"));
      let opt2 = Response.genText(i18n.__("care.opt2"));

        // let opt1= Response.genImageTemplate(
        //     `${config.appUrl}/order.png`,
        //     i18n.__("care.opt1")
        // );
        // let or = Response.genText(i18n.__("care.or"));
        // let opt2 = Response.genImageTemplate(
        //     `${config.appUrl}/order.png`,
        //     i18n.__("care.opt2")
        // );
        let curation = Response.genQuickReply(i18n.__("care.help"), [

        {
          title: i18n.__("menu.yes"),
          payload: "CARE_HELP_YES"
        },
        {
          title: i18n.__("menu.no"),
          payload: "CARE_HELP_NO"
        },
      ]);
      response = [opt1, or, opt2, curation]
        break;
      case "CARE_HELP_YES":
        // Send using the Persona for order issues

        response = Response.genQuickReply(i18n.__("get_started.help"), [

          {
            title: i18n.__("menu.moreInfo"),
            payload: "CURATION"
          },
          {
            title: i18n.__("menu.shop"),
            payload: "ESHOP"
          },
        ]);

        break;

      case "CARE_HELP_NO":
        // Send using the Persona for billing issues

       response = Response.genText(i18n.__("care.end"));
        break;

      case "CARE_SALES":
        // Send using the Persona for sales questions

        response = [
          Response.genTextWithPersona(
            i18n.__("care.style", {
              userFirstName: this.user.firstName,
              agentFirstName: config.personaSales.name
            }),
            config.personaSales.id
          ),
          Response.genTextWithPersona(
            i18n.__("care.end"),
            config.personaSales.id
          ),
          Survey.genAgentRating(config.personaSales.name)
        ];
        break;

    }

    return response;
  }
};
