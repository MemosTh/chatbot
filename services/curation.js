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
                url: "https://www.facebook.com/Test_miele_bot-104422437885616/services/?show_upsell=1",
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

                categoryButtons[2].payload="CURATION_COOK_VIEW";
                let video = Response.genGenericMedia("video", "https://www.facebook.com/978507075568723/videos/311974243094592");
                let opts = Response.genQuickReply("",[
                    {

                        title: "Video call",
                        payload: "CURATION_VIDEOCALL",
                    },
                    {

                        title: "Book Appointment",
                        payload:"CURATION_APPOINTMENT"
                    },
                    {
                        type: "postback",
                        title: "View",
                        payload:"CURATION_COOK_VIEW"
                    }
                ]);
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
            case "CURATION_COOK_VIEW":
                // let buttonc = [
                //
                //     {
                //         type: "web_url",
                //         url: "https://www.miele.gr/domestic/baking-and-steam-ovens-1442.htm",
                //         title: "VIEW",
                //     },
                //
                // ]
                let elementCook =[
                    {
                        title: "Ψήσιμο & μαγείρεμα στον ατμό",
                        image_url: "https://www.miele.gr/media/domestic_gr/media/layout/products/2_160397_268x238.jpg",
                        default_action: {
                            type: "web_url",
                            url : "https://www.miele.gr/domestic/baking-and-steam-ovens-1442.htm",
                            webview_height_ratio: "full",
                        }
                    },
                    {
                        title: "Εστίες & Combi sets",
                        image_url: "https://www.miele.gr/media/domestic_gr/media/layout/products/20000154479.png",
                        default_action: {
                            type: "web_url",
                            url : "https://www.miele.gr/domestic/hobs-and-combination-sets-1492.htm ",
                            webview_height_ratio: "full",
                        }
                    },
                    {
                        title: "Απορροφητήρες",
                        image_url: "https://www.miele.gr/media/domestic_gr/media/layout/products/20000153867.png",
                        default_action: {
                            type: "web_url",
                            url : "https://www.miele.gr/domestic/cooker-hoods-1638.htm",
                            webview_height_ratio: "full",
                        }
                    },
                    {
                        title: "Θερμοθάλαμοι",
                        image_url: "https://www.miele.gr/pmedia/06/Z13/20000154132-000-00_20000154132.jpg",
                        default_action: {
                            type: "web_url",
                            url : "https://www.miele.gr/domestic/product-selection-drawers-1489.htm?shop=1#7",
                            webview_height_ratio: "full",
                        }
                    },
                    {
                        title: "Θάλαμοι σφράγισης κενού",
                        image_url: "https://www.miele.gr/pmedia/06/Z13/20000154259-000-00_20000154259.jpg",
                        default_action: {
                            type: "web_url",
                            url : "https://www.miele.gr/domestic/vacuum-seiling-drawer-2977.htm",
                            webview_height_ratio: "full",
                        }
                    },
                ]


                response = Response.genGenericTemplate(elementCook)
                break
            case "CURATION_FRIDGE_VIEW":
                break;
            case "CURATION_COFFEE_VIEW":
                break;
            case "CURATION_WASHER_VIEW":
                break;
            case "CURATION_DRY_VIEW":
                break;
            case "CURATION_IRON_VIEW":
                break;
            case "CURATION_BROOM_VIEW":
                break;

        }

        return response;
    }


};
