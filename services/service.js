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

        switch (payload) {
            case "SERVICE":
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


                ];

                let curation = Response.genGenericList(elements);
                response =[curation]

            break;
            case "SERVICE_TEST":



        }

        return response;


    }
};
