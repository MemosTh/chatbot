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

            case "COOK":
                response = Response.genText("Ποια κατηγορία σας ενδιαφέρει;");
                break;
            case "FRIDGE":
                break;
            case "COFFEE":
                break;
            case "WASHER":
                break;
            case "DRY":
                break;
            case "IRON":
                break;
            case "BROOM":
                break;
        }

        return response;
    }


};
