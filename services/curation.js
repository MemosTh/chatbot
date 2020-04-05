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
        let categoryButtons=[
            {
                type: "postback",
                title: "Video call",
                payload: "CURATION_VIDEOCALL",
            },
            {
                type: "web_url",
                url: "https://fb.com/book/104422437885616/",
                title: "Book Appointment",
            },
            {
                type: "postback",
                title: "View",
                payload:""
            }
        ];




        switch (payload) {

            case "CURATION":

                let elements = [
                    {
                        image_url: 'https://www.miele.gr/media/domestic_gr/media/assets_288_x/20000154793_Zuschnitt.jpg',
                        title: "Μαγείρεμα",
                        subtitle: "",
                        buttons: []
                    },
                    {
                        image_url: 'https://www.miele.gr/media/domestic_gr/media/assets_288_x/20000154793_Zuschnitt.jpg',
                        title: "Συσκευές Ψύξης & Συντηρητές Κρασιών ",
                        subtitle: "",
                        buttons: []
                    },
                    {
                        image_url: 'https://www.miele.gr/media/domestic_gr/media/assets_288_x/20000154793_Zuschnitt.jpg',
                        title: "Καφετιέρες",
                        subtitle: "",
                        buttons: []
                    },
                    {
                        image_url: 'https://www.miele.gr/media/domestic_gr/media/assets_288_x/20000154793_Zuschnitt.jpg',
                        title: "Πλυντήρια πιάτων & ρούχων ",
                        subtitle: "",
                        buttons: []
                    },
                    {
                        image_url: 'https://www.miele.gr/media/domestic_gr/media/assets_288_x/20000154793_Zuschnitt.jpg',
                        title: "Στεγνωτήρια",
                        subtitle: "",
                        buttons: []
                    },
                    {
                        image_url: 'https://www.miele.gr/media/domestic_gr/media/assets_288_x/20000154793_Zuschnitt.jpg',
                        title: "Συσκευές Σιδερώματος",
                        subtitle: "",
                        buttons: []
                    },
                    {
                        image_url: 'https://www.miele.gr/media/domestic_gr/media/assets_288_x/20000154793_Zuschnitt.jpg',
                        title: "Ηλεκτρικές σκούπες",
                        subtitle: "",
                        buttons: []
                    },


                ];


                let buttons = [
                    {
                        type: "postback",
                        title: "view",
                        payload: "CURATION_COOK"
                    },
                    {
                        type: "postback",
                        title: "view",
                        payload: "CURATION_FRIDGE"
                    },
                    {
                        type: "postback",
                        title: "view",
                        payload: "CURATION_COFFEE"
                    },
                    {
                        type: "postback",
                        title: "view",
                        payload: "CURATION_WASHER"
                    },
                    {
                        type: "postback",
                        title: "view",
                        payload: "CURATION_DRY"
                    },
                    {
                        type: "postback",
                        title: "view",
                        payload: "CURATION_IRON"
                    },
                    {
                        type: "postback",
                        title: "view",
                        payload: "CURATION_BROOM"
                    },

                ];
                let count = 0;
                for (let element of elements) {
                    element["buttons"].push(buttons[count]);
                    count++;
                }

                console.log(elements);

                let list = Response.genGenericList(elements);
                console.log(response);



                let message = Response.genText("Ποια κατηγορία σας ενδιαφέρει;");
                response= [message, list];
                break;

            case "CURATION_COOK":
                categoryButtons[2].payload="CURATION_COOK";
                response = Response.genGenericMedia("video", "https://www.facebook.com/978507075568723/videos/311974243094592",categoryButtons);
                break;
            case "CURATION_FRIDGE":

                break;
            case "CURATION_COFFEE":
                break;
            case "CURATION_WASHER":
                break;
            case "CURATION_DRY":
                break;
            case "CURATION_IRON":
                break;
            case "CURATION_BROOM":
                break;
        }

        return response;
    }


};
