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
        response = Response.genQuickReply(
          i18n.__("care.prompt", {
            userFirstName: this.user.firstName
          }),
          [
            {
              title: i18n.__("care.opt1"),
              payload: "CARE_OPT1"
            },
            {
              title: i18n.__("care.opt2"),
              payload: "CARE_OPT2"
            },
          ]
        );
        break;
      case "CARE_OPT1":
        // Send using the Persona for order issues

       response = [

          Response.genText(i18n.__("care.opt1")),
          Response.genQuickReply(i18n.__("get_started.help"), [
            {
              title: i18n.__("final.yes"),
              payload: "FINAL_YES"
            },
            {
              title: i18n.__("final.no"),
              payload: "FINAL_NO"
            },
          ])
        ];

        // response = [
        //   Response.genTextWithPersona(
        //     i18n.__("care.issue", {
        //       userFirstName: this.user.firstName,
        //       agentFirstName: config.personaOrder.name,
        //       topic: i18n.__("care.order")
        //     }),
        //     config.personaOrder.id
        //   ),
        //   Response.genTextWithPersona(
        //     i18n.__("care.end"),
        //     config.personaOrder.id
        //   ),
        //   Survey.genAgentRating(config.personaOrder.name)
        // ];
        break;

      case "CARE_OPT2":
        // Send using the Persona for billing issues
         response = [

            Response.genText(i18n.__("care.opt2")),
            Response.genQuickReply(i18n.__("get_started.help"), [
              {
                title: i18n.__("final.yes"),
                payload: "FINAL_YES"
              },
              {
                title: i18n.__("final.no"),
                payload: "FINAL_NO"
              },
            ])
          ];
        // response = [
        //   Response.genTextWithPersona(
        //     i18n.__("care.issue", {
        //       userFirstName: this.user.firstName,
        //       agentFirstName: config.personaBilling.name,
        //       topic: i18n.__("care.billing")
        //     }),
        //     config.personaBilling.id
        //   ),
        //   Response.genTextWithPersona(
        //     i18n.__("care.end"),
        //     config.personaBilling.id
        //   ),
        //   Survey.genAgentRating(config.personaBilling.name)
        // ];
        break;

      case "FINAL_YES":
        // Send using the Persona for sales questions

         response = [
          Response.genText(i18n.__("get_started.guidance")),
          Response.genQuickReply(i18n.__("get_started.help"), [

          {
            title: i18n.__("menu.moreInfo"),
            payload: "CURATION"
          },
          {
            title: i18n.__("menu.eshop"),
            payload: "ESHOP"
          }
        ])
      ];
        break;

      case "FINAL_NO":
        // Send using the Persona for customer care issues

        response = Response.genText(i18n.__("final.end"));
        break;
    }

    return response;
  }
};
