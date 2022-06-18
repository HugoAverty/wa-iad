/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

import {getLayersMap} from '@workadventure/scripting-api-extra';

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {

    /* BUGGY
    console.log("START");
    const layers = await getLayersMap();

    // Access a layer directly by name
    const mylayer = layers.get('TEST');

    // Iterate over all layers
    for (const layer of layers.values()) {
        console.log(layer);
    }
    console.log("END");
    */

    // TOP LEFT ZONE
    WA.room.onEnterLayer('topleftZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("topleftPopup","L’association Toit à Moi œuvre en faveur :",[{
            label: "Des réfugiés politiques",
            className: "normal",
            callback: (popup) => {

            }
        },
        {
            label: "Des personnes sans-abri",
            className: "normal",
            callback: (popup) => {
                // Close the popup when the "Close" button is pressed
                WA.room.showLayer("homeOKTopLeft1");
                WA.room.showLayer("homeOKTopLeft2");
                WA.room.showLayer("homeOKTopLeft3");
                popup.close();
            }
        },
        {
            label: "Des mineurs isolés",
            className: "normal",
            callback: (popup) => {

            }
        },
        {
            label: "Des femmes",
            className: "normal",
            callback: (popup) => {

            }
        },
        ]);
    })

    WA.room.onLeaveLayer('topleftZone').subscribe(closePopUp)

    // TOP RIGHT ZONE
    WA.room.onEnterLayer('toprightZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("toprightPopup"," L’association Habitâge intervient en priorité auprès de personnes âgées",[{
            label: "En milieu rural",
            className: "normal",
            callback: (popup) => {
                // Close the popup when the "Close" button is pressed
                WA.room.showLayer("homeOKTopRight1");
                WA.room.showLayer("homeOKTopRight2");
                WA.room.showLayer("homeOKTopRight3");
                popup.close();
            }
        },
        {
            label: "En milieu urbain",
            className: "normal",
            callback: (popup) => {

            }
        },
        {
            label: "Vivant dans des ZAC (Zones d’Aménagement Concerté)",
            className: "normal",
            callback: (popup) => {

            }
        },
        {
            label: "En Ile-de-France",
            className: "normal",
            callback: (popup) => {

            }
        },
        ]); 
    })

    WA.room.onLeaveLayer('toprightZone').subscribe(closePopUp)

    // BOT LEFT ZONE
    WA.room.onEnterLayer('botleftZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("botleftPopup","Quel lieu historique a été investi par l’association Le Village de François ?",
        [{
            label: "Un stade de foot",
            className: "normal",
            callback: (popup) => {

            }
            },
            {
                label: "Une école",
                className: "normal",
                callback: (popup) => {

                }
            },
            {
                label: "Une ferme",
                className: "normal",
                callback: (popup) => {

                }
            },
            {
                label: "Une abbaye",
                className: "normal",
                callback: (popup) => {
                    // Close the popup when the "Close" button is pressed
                    WA.room.showLayer("homeOKBotLeft1");
                    WA.room.showLayer("homeOKBotLeft2");
                    WA.room.showLayer("homeOKBotLeft3");
                    popup.close();
                }
            },
        ]); 
    })

    WA.room.onLeaveLayer('botleftZone').subscribe(closePopUp)

    WA.room.onEnterLayer('botrightZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("botrightPopup","BOT RIGHT",[]);
    })

    WA.room.onLeaveLayer('botrightZone').subscribe(closePopUp)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
