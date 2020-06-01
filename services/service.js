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

module.exports = class Service {
    constructor(user, webhookEvent) {
        this.user = user;
        this.webhookEvent = webhookEvent;
    }

    handlePayload(payload) {

        let response;
        let help = Response.genQuickReply(i18n.__("care.help"), [

            {
                title: i18n.__("menu.yes"),
                payload: "CARE_HELP_YES"
            },
            {
                title: i18n.__("menu.no"),
                payload: "CARE_HELP_NO"
            },
        ]);

        switch (payload) {
            case "SERVICE":
                let elements = [
                    {
                        image_url:`${config.appUrl}/bots.jpg`,
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
                        title: "Βρείτε το κοντινό σε εσάς Miele Service",
                        subtitle: "Δευτ. - Παρ. 09:00-17:00",
                        buttons: [
                            {

                                type: "web_url",
                                url: "https://www.miele.gr/domestic/miele-service-3744.htm",
                                title: "Μετάβαση"
                            }
                            ]

                    },


                ];

                let curation = Response.genGenericList(elements);


                response =[curation,help]

            break;
            case "SERVICE_CENTER":

            let center = Response.genText("Λεωφ. Μεσογείων 257, Νέο Ψυχικό 154 51,  Τηλ. 21 0679 4444");
                response =[center,help]



        }

        return response;


    }
};
