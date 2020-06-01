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

module.exports = class Care {
  constructor(user, webhookEvent) {
    this.user = user;
    this.webhookEvent = webhookEvent;
  }

  handlePayload(payload) {
    let response;


    switch (payload) {
      case "CARE_HELP":
      // let opt1 = Response.genText(
      //   i18n.__("care.opt1"));
      //
      // let or = Response.genText(i18n.__("care.or"));
      // let opt2 = Response.genText(i18n.__("care.opt2"));


      //   let image1 = Response.GenericMedia('image',`${config.appUrl}/image004.jpg`);
      // //  let opt1= Response.genText(i18n.__("care.opt1"));
      //     let opt1 = Response.GenericCallButton(i18n.__("care.opt1"),"+302106794444")
      //   let or = Response.genText(i18n.__("care.or"));
      //   let image2 = Response.GenericMedia('image',`${config.appUrl}/image005.jpg`);
      //   //let opt2 = Response.genText(i18n.__("care.opt2"));
      //   let opt2 = Response.GenericCallButton(i18n.__("care.opt2"),"+306974850525")



        let elements = [
          {
            image_url:`${config.appUrl}/epikoinonia.jpg`,
            title: "Καλέστε μας στα τηλέφωνα 801 222 4444 & +30 210 67 94444",
            subtitle: "Δευτέρα έως Παρασκευή 09:00-17:00",
            buttons:[
              {
                type:"phone_number",
                title:"Κληση",
                payload: "+302106794444"
              }
            ]
          },
          {
            image_url: `${config.appUrl}/videoklisi.jpg`,
            title: "Βιντεοκλήση : Δείτε live τα προϊόντα μας στο 6974850525 με Viber, Messenger, Whatsapp:",
            subtitle: "Δευτ. - Παρ. 09:00-17:00",
            buttons:[
              {
                type:"phone_number",
                title:"Κληση",
                payload: "6974850525"
              }
            ]
          },
          {
            image_url: `${config.appUrl}/service.jpg`,
            title: "Service",
            subtitle: "",
            buttons: [
              {
                type: "postback",
                title: "Service",
                payload: "SERVICE"
              }
            ]
          },
          {
            image_url: `${config.appUrl}/katastima.jpg`,
            title: "Επίσκεψη σε κατάστημα",
            subtitle: "",
            buttons: [
              {
                type: "postback",
                title: "Miele Experience Center",
                payload: "SERVICE"
              },
              {
                type: "postback",
                title: "Miele Experience Center",
                payload: "Μiele Points & Miele Stores"
              },

            ]
          }

        ];




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
      response = [image1,opt1, or,image2, opt2, curation]
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
