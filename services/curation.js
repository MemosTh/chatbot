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

            case "CURATION":


                let response_video = {
                    attachment: {
                        type: "template",
                        payload: {
                            template_type: "media",
                            elements: [
                                {
                                    media_type: "video",
                                    attachment_id: "1088189374915933",
                                    buttons: [
                                        {
                                            type: "postback",
                                            title: "Αγορά Προϊόντος",
                                            payload: "ESHOP",
                                        },
                                        {
                                            type: "postback",
                                            title: "Eπικοινωνία",
                                            payload:"CARE_HELP"
                                        },
                                    ]

                                }
                            ]
                        }
                    }
                };
                    response=[response_video];
                break;
            case "CURATION_SHOW":

                let button1 = [
                    {

                        type: "web_url",
                        url: "https://www.miele.gr/triflex/",
                        title: "Μετάβαση στο site"
                    }

                ];

                var element =[

                    {
                        title: "New Triflex",
                        subtitle:"Περισσότερες πληροφορίες",
                        image_url: "https://www.miele.gr/media/domestic_gr/media/assets_288_x/20000154793_Zuschnitt.jpg",
                        default_action: {
                            type: "web_url",
                            url : "https://www.miele.gr/triflex/",
                            webview_height_ratio: "full",
                        },
                        buttons:button1
                    },

                ]
                response = Response.genGenericTemplate(element);

                break;


            case "CURATION_BUSINESS":

                let elements_Business = [
                    {
                        image_url:`${config.appUrl}/epagelmatika.jpg`,
                        title: "Ενημερωθείτε για τις Επαγγελματικές λύσεις της Miele Professional",
                        subtitle: "",
                        buttons: [
                            {
                                type: "web_url",
                                url: "https://www.miele.gr/professional/index.htm",
                                title: "ΕΝΗΜΕΡΩΣΗ",
                            }
                        ]
                    },
                    ];

                let business = Response.genGenericList(elements_Business);

                response=[business,help]



                break;
            case "CURATION_FEA":

                let elements_Fea = [
                    {
                        image_url:`${config.appUrl}/fournoi.jpg`,
                        title: "Φούρνοι",
                        subtitle: "",
                        buttons: [
                            {
                                type: "web_url",
                                url: "https://www.miele.gr/domestic/baking-and-steam-ovens-1442.htm",
                                title: "ΜΕΤΑΒΑΣΗ ΣΤΟ E-SHOP",
                            }
                        ]
                    },
                    {
                        image_url: `${config.appUrl}/esties.jpg`,
                        title: "Εστίες",
                        subtitle: "",
                        buttons: [
                            {
                                type: "web_url",
                                url: " https://www.miele.gr/domestic/hobs-1492.htm",
                                title: "ΜΕΤΑΒΑΣΗ ΣΤΟ E-SHOP"
                            }
                        ]
                    },
                    {
                        image_url: `${config.appUrl}/aporofitires.jpg`,
                        title: "Απορροφητήρες ",
                        subtitle: "",
                        buttons: [
                            {
                                type: "web_url",
                                url: "https://www.miele.gr/domestic/cooker-hoods-1638.htm",
                                title: "ΜΕΤΑΒΑΣΗ ΣΤΟ E-SHOP"
                            }
                        ]
                    }
                    ];

                let fea= Response.genGenericList(elements_Fea);
                response=[fea,help]

                break;
            case "CURATION_NEWSLETTER":
                let elements_newsletter = [
                    {
                        image_url:`${config.appUrl}/newsletter.jpg`,
                        title: "Αν επιθυμείτε να μαθαίνετε πρώτοι τα νέα μας",
                        subtitle: "εγγραφείτε στο newsletter μας",
                        buttons: [
                            {
                                type: "web_url",
                                url: "https://www.miele.gr/domestic/newsletter-2156.htm",
                                title: "ΕΓΓΡΑΦΗ",
                            }
                        ]
                    }
                    ];


                let newsletter = Response.genGenericList(elements_newsletter);
                response=[newsletter,help]
                break;



            // case "CURATION_COOK":
            //
            //     categoryButtons[2].payload="CURATION_COOK_VIEW";
            //     var video = Response.genGenericMedia("video", "https://www.facebook.com/978507075568723/videos/311974243094592");
            //     var opts = Response.genQuickReply("Διαλέξτε μια απο τις παρακάτω επιλογές",[
            //         {
            //
            //             title: "Video call",
            //             payload: "CURATION_VIDEOCALL",
            //         },
            //         {
            //             type: "postback",
            //             title: "View",
            //             payload:"CURATION_COOK_VIEW"
            //         }
            //     ]);
            //
            //     var viewButton = Response.genPostbackButton("Επιλεξτε",categoryButtons)
            //     var curationTest = Response.genQuickReply(i18n.__("care.help"), [
            //
            //         {
            //             title: i18n.__("menu.yes"),
            //             payload: "CARE_HELP_YES"
            //         },
            //         {
            //             title: i18n.__("menu.no"),
            //             payload: "CARE_HELP_NO"
            //         },
            //     ]);
            //     response=[video,viewButton,curationTest];
            //     break;
            // case "CURATION_FRIDGE":
            //     var video = Response.genGenericMedia("video", "https://www.facebook.com/978507075568723/videos/311974243094592");
            //     var opts = Response.genQuickReply("Διαλέξτε μια απο τις παρακάτω επιλογές",[
            //         {
            //
            //             title: "Video call",
            //             payload: "CURATION_VIDEOCALL",
            //         },
            //         {
            //
            //             title: "Book Appointment",
            //             payload:"CURATION_APPOINTMENT"
            //         },
            //         {
            //             type: "postback",
            //             title: "View",
            //             payload:"CURATION_FRIDGE_VIEW"
            //         }
            //     ]);
            //     response=[video,opts];
            //
            //     break;
            // case "CURATION_COFFEE":
            //     var video = Response.genGenericMedia("video", "https://www.facebook.com/978507075568723/videos/311974243094592");
            //     var opts = Response.genQuickReply("Διαλέξτε μια απο τις παρακάτω επιλογές",[
            //         {
            //
            //             title: "Video call",
            //             payload: "CURATION_VIDEOCALL",
            //         },
            //         {
            //
            //             title: "Book Appointment",
            //             payload:"CURATION_APPOINTMENT"
            //         },
            //         {
            //             type: "postback",
            //             title: "View",
            //             payload:"CURATION_COFFEE_VIEW"
            //         }
            //     ]);
            //     response=[video,opts];
            //     break;
            // case "CURATION_WASHER":
            //     var video = Response.genGenericMedia("video", "https://www.facebook.com/978507075568723/videos/311974243094592");
            //     var opts = Response.genQuickReply("Διαλέξτε μια απο τις παρακάτω επιλογές",[
            //         {
            //
            //             title: "Video call",
            //             payload: "CURATION_VIDEOCALL",
            //         },
            //         {
            //
            //             title: "Book Appointment",
            //             payload:"CURATION_APPOINTMENT"
            //         },
            //         {
            //             type: "postback",
            //             title: "View",
            //             payload:"CURATION_WASHER_VIEW"
            //         }
            //     ]);
            //     response=[video,opts];
            //     break;
            // case "CURATION_DRY":
            //     var video = Response.genGenericMedia("video", "https://www.facebook.com/978507075568723/videos/311974243094592");
            //     var opts = Response.genQuickReply("Διαλέξτε μια απο τις παρακάτω επιλογές",[
            //         {
            //
            //             title: "Video call",
            //             payload: "CURATION_VIDEOCALL",
            //         },
            //         {
            //
            //             title: "Book Appointment",
            //             payload:"CURATION_APPOINTMENT"
            //         },
            //         {
            //             type: "postback",
            //             title: "View",
            //             payload:"CURATION_DRY_VIEW"
            //         }
            //     ]);
            //     response=[video,opts];
            //     break;
            // case "CURATION_IRON":
            //     var video = Response.genGenericMedia("video", "https://www.facebook.com/978507075568723/videos/311974243094592");
            //     var opts = Response.genQuickReply("Διαλέξτε μια απο τις παρακάτω επιλογές",[
            //         {
            //
            //             title: "Video call",
            //             payload: "CURATION_VIDEOCALL",
            //         },
            //         {
            //
            //             title: "Book Appointment",
            //             payload:"CURATION_APPOINTMENT"
            //         },
            //         {
            //             type: "postback",
            //             title: "View",
            //             payload:"CURATION_IRON_VIEW"
            //         }
            //     ]);
            //     response=[video,opts];
            //     break;
            // case "CURATION_BROOM":
            //     var video = Response.genGenericMedia("video", "https://www.facebook.com/978507075568723/videos/311974243094592");
            //     var opts = Response.genQuickReply("Διαλέξτε μια απο τις παρακάτω επιλογές",[
            //         {
            //
            //             title: "Video call",
            //             payload: "CURATION_VIDEOCALL",
            //         },
            //         {
            //
            //             title: "Book Appointment",
            //             payload:"CURATION_APPOINTMENT"
            //         },
            //         {
            //             type: "postback",
            //             title: "View",
            //             payload:"CURATION_BROOM_VIEW"
            //         }
            //     ]);
            //     response=[video,opts];
            //     break;
            // case "CURATION_COOK_VIEW":
            //     // let buttonc = [
            //     //
            //     //     {
            //     //         type: "web_url",
            //     //         url: "https://www.miele.gr/domestic/baking-and-steam-ovens-1442.htm",
            //     //         title: "VIEW",
            //     //     },
            //     //
            //     // ]
            //     let elementCook =[
            //         {
            //             title: "Ψήσιμο & μαγείρεμα στον ατμό",
            //             image_url: "https://www.miele.gr/media/domestic_gr/media/layout/products/2_160397_268x238.jpg",
            //             default_action: {
            //                 type: "web_url",
            //                 url : "https://www.miele.gr/domestic/baking-and-steam-ovens-1442.htm",
            //                 webview_height_ratio: "full",
            //             }
            //         },
            //         {
            //             title: "Εστίες & Combi sets",
            //             image_url: "https://www.miele.gr/media/domestic_gr/media/layout/products/20000154479.png",
            //             default_action: {
            //                 type: "web_url",
            //                 url : "https://www.miele.gr/domestic/hobs-and-combination-sets-1492.htm ",
            //                 webview_height_ratio: "full",
            //             }
            //         },
            //         {
            //             title: "Απορροφητήρες",
            //             image_url: "https://www.miele.gr/media/domestic_gr/media/layout/products/20000153867.png",
            //             default_action: {
            //                 type: "web_url",
            //                 url : "https://www.miele.gr/domestic/cooker-hoods-1638.htm",
            //                 webview_height_ratio: "full",
            //             }
            //         },
            //         {
            //             title: "Θερμοθάλαμοι",
            //             image_url: "https://www.miele.gr/pmedia/06/Z13/20000154132-000-00_20000154132.jpg",
            //             default_action: {
            //                 type: "web_url",
            //                 url : "https://www.miele.gr/domestic/product-selection-drawers-1489.htm?shop=1#7",
            //                 webview_height_ratio: "full",
            //             }
            //         },
            //         {
            //             title: "Θάλαμοι σφράγισης κενού",
            //             image_url: "https://www.miele.gr/pmedia/06/Z13/20000154259-000-00_20000154259.jpg",
            //             default_action: {
            //                 type: "web_url",
            //                 url : "https://www.miele.gr/domestic/vacuum-seiling-drawer-2977.htm",
            //                 webview_height_ratio: "full",
            //             }
            //         },
            //     ]
            //
            //
            //      var carousel = Response.genGenericTemplate(elementCook);
            //     let curation = Response.genQuickReply(i18n.__("care.help"), [
            //
            //         {
            //             title: i18n.__("menu.yes"),
            //             payload: "CARE_HELP_YES"
            //         },
            //         {
            //             title: i18n.__("menu.no"),
            //             payload: "CARE_HELP_NO"
            //         },
            //     ]);
            //
            //     response =[carousel,curation]
            //
            //     break;
            // case "CURATION_FRIDGE_VIEW":
            //     let elementFridge =[
            //         {
            //             title: "Ψυγεία",
            //             image_url: "https://www.miele.gr/pmedia/25/Z13/20000143044-000-00_20000143044.jpg",
            //             default_action: {
            //                 type: "web_url",
            //                 url : "https://www.miele.gr/domestic/refrigerators-1720.htm",
            //                 webview_height_ratio: "full",
            //             }
            //         },
            //         {
            //             title: "Ψυγειοκαταψύκτες",
            //             image_url: "https://www.miele.gr/pmedia/06/Z13/20000142379-000-00_20000142379.jpg",
            //             default_action: {
            //                 type: "web_url",
            //                 url : "https://www.miele.gr/domestic/Fridge-freezers-1728.htm",
            //                 webview_height_ratio: "full",
            //             }
            //         },
            //         {
            //             title: "Καταψύκτες ",
            //             image_url: "https://www.miele.gr/pmedia/06/Z05/20000150483-000-00_20000150483.jpg",
            //             default_action: {
            //                 type: "web_url",
            //                 url : "https://www.miele.gr/domestic/freezers-and-chest-freezers-1737.htm",
            //                 webview_height_ratio: "full",
            //             }
            //         },
            //         {
            //             title: "Συντηρητές κρασιών",
            //             image_url: "https://www.miele.gr/pmedia/06/Z13/20000100729-000-00_20000100729.jpg",
            //             default_action: {
            //                 type: "web_url",
            //                 url : "https://www.miele.gr/domestic/wine-units-1746.htm",
            //                 webview_height_ratio: "full",
            //             }
            //         },
            //
            //     ]
            //
            //     response = Response.genGenericTemplate(elementFridge);
            //
            //     break;
            // case "CURATION_COFFEE_VIEW":
            //     let elementCoffee =[
            //         {
            //             title: "Eντοιχιζόμενες καφετιέρες",
            //             image_url: "https://www.miele.gr/pmedia/06/Z05/20000160029-000-00_20000160029.jpg",
            //             default_action: {
            //                 type: "web_url",
            //                 url : "https://www.miele.gr/domestic/built-in-coffee-machines-1760.htm",
            //                 webview_height_ratio: "full",
            //             }
            //         },
            //         {
            //             title: "Ελευθερες καφετιέρες",
            //             image_url: "https://www.miele.gr/pmedia/25/Z13/20000138860-000-00_20000138860.jpg",
            //             default_action: {
            //                 type: "web_url",
            //                 url : "https://www.miele.gr/domestic/countertop-coffee-machines-1769.htm",
            //                 webview_height_ratio: "full",
            //             }
            //         }
            //     ]
            //
            //     response = Response.genGenericTemplate(elementCoffee);
            //     break;
            // case "CURATION_WASHER_VIEW":
            //     let elementWasher =[
            //         {
            //             title: "Πλυντήρια πιάτων",
            //             image_url: "https://www.miele.gr/media/domestic_gr/media/layout/products/20000149095.png",
            //             default_action: {
            //                 type: "web_url",
            //                 url : "https://www.miele.gr/domestic/dishwashers-1529.htm",
            //                 webview_height_ratio: "full",
            //             }
            //         },
            //         {
            //             title: "Πλυντήρια ρούχων",
            //             image_url: "https://www.miele.gr/media/domestic_gr/media/layout/products/Waschmaschinen-Trockner-Buegelgeraete_158653_Zuschnitt.jpg",
            //             default_action: {
            //                 type: "web_url",
            //                 url : "https://www.miele.gr/domestic/washing-machines-1561.htm",
            //                 webview_height_ratio: "full",
            //             }
            //         },
            //         {
            //             title: "Πλυντοστεγνωστήρια",
            //             image_url: "https://www.miele.gr/pmedia/25/Z13/20000148514-000-00_20000148514.jpg",
            //             default_action: {
            //                 type: "web_url",
            //                 url : "https://www.miele.gr/domestic/washer-dryers-1580.htm",
            //                 webview_height_ratio: "full",
            //             }
            //         },
            //     ]
            //
            //     response = Response.genGenericTemplate(elementCoffee);
            //     break;
            // case "CURATION_DRY_VIEW":
            //     break;
            // case "CURATION_IRON_VIEW":
            //     break;
            // case "CURATION_BROOM_VIEW":
            //     break;
            // case "CURATION_APPOINTMENT":
            //     break

        }

        return response;
    }


};
