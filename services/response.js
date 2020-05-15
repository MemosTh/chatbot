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

const Response = require("./response"),
    config = require("./config"),
    i18n = require("../i18n.config");

module.exports = class Response {
  static genQuickReply(text, quickReplies) {
    let response = {
      text: text,
      quick_replies: []
    };

    for (let quickReply of quickReplies) {
      response["quick_replies"].push({
        content_type: "text",
        title: quickReply["title"],
        payload: quickReply["payload"]
      });
    }

    return response;
  }

  static genGenericTemplate(elements) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: elements
        }
      }
    };
    return response;
  }
  static genGenericList(elements){


    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: elements
        }
      }
    };


    return response;

  }

  static genGenericMedia(media_type, url) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "media",
          elements: [
            {
              media_type: media_type,
              url: url
            }
          ]
        }
      }
    };



    return response;
  }
  static GenericCallButton(text, number) {

    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: text,
          buttons:[
            {
              type:"phone_number",
              title:"Κληση",
              payload: number
            }
          ]
        }
      }
    };

    return response;
  }

  static GenericMedia(media_type, url) {

    let response = {
      attachment: {
        type: media_type,
        payload: {
          url: url,

        }
      }
    };

    return response;
  }

  static genImageTemplate(image_url, title, subtitle = "") {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: title,
              subtitle: subtitle,
              image_url: image_url
            }
          ]
        }
      }
    };

    return response;
  }

  static genButtonTemplate(title, buttons) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: "memos",
          buttons: buttons
        }
      }
    };

    return response;
  }

  static genText(text) {
    let response = {
      text: text
    };

    return response;
  }

  static genTextWithPersona(text, persona_id) {
    let response = {
      text: text,
      persona_id: persona_id
    };

    return response;
  }

  static genPostbackButton(title,buttons) {
    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: title,
          buttons:buttons

        }
      }
    };

    return response;
  }

  static genWebUrlButton(title,btnName,url) {
    // let response = {
    //   type: "web_url",
    //   title: title,
    //   url: url,
    //   messenger_extensions: true
    // };

    let response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: title,
          buttons:[
            {
              type:"web_url",
              title:btnName,
              url: url
            }
          ]
        }
      }
    };

    return response;

  }

  static genNuxMessage(user) {
    let welcome = this.genText(
      i18n.__("get_started.welcome", {
        userFirstName: user.firstName
      })
    );

    let guide = this.genText(i18n.__("get_started.guidance"));

    let elements = [
      {
        image_url:`${config.appUrl}/image004.jpg`,
        title: "",
        subtitle: "",
        buttons: [
          {
            type: "postback",
            title: "Επικοινωνια μαξι μας",
            payload: "CARE_HELP"
          }
        ]
      },
      {
        image_url: `${config.appUrl}/mieleBots596x335px.jpg`,
        title: "",
        subtitle: "",
        buttons: [
          {
            type: "postback",
            title: "Πληροφοριες προιοντος",
            payload: "CURATION"
          }
        ]
      },
      {
        image_url: `${config.appUrl}/image005.jpg`,
        title: "",
        subtitle: "",
        buttons: [
          {
            type: "postback",
            title: "Aγορασετε προιον",
            payload: "CURATION"
          }
        ]
      }


    ];

    // let curation = this.genQuickReply(i18n.__("get_started.help"), [
    //
    //   {
    //     title: i18n.__("menu.help"),
    //     payload: "CARE_HELP"
    //   },
    //   {
    //     title: i18n.__("menu.moreInfo"),
    //     payload: "CURATION"
    //   },
    //   {
    //     title: i18n.__("menu.shop"),
    //     payload: "ESHOP"
    //   },
    //   {
    //     title:"test1",
    //     payload: "TEST"
    //   },
    //   {
    //     title:"test2",
    //     payload: "TEST"
    //   }
    // ]);

    // let curation = this.genPostbackButton(i18n.__("get_started.help"), [
    //
    //   {
    //     type: "postback",
    //     title: i18n.__("menu.help"),
    //     payload: "CARE_HELP"
    //   },
    //   {
    //     type: "postback",
    //     title: i18n.__("menu.moreInfo"),
    //     payload: "CURATION"
    //   },
    //   {
    //     type: "postback",
    //     title: i18n.__("menu.shop"),
    //     payload: "ESHOP"
    //   },
    // ])
    let curation = Response.genGenericList(elements);

    return [welcome, guide, curation];
  }
};
