/**
 *  Hello User Widget
 *  my-first-extension/widget/HelloUserWidget/js/helloUserWidget.js
 */

define(
    //-------------
    // DEPENDENCIES
    //-------------
    ['knockout'],
    //------------------
    // MODULE DEFINITION
    //------------------
    function (ko) {
        "use strict";
        var widget;
        return {
            onLoad: function (widgetModel) {
                widget = widgetModel;
                console.log("-- helloUserWidget onLoad callback");
            },
            beforeAppear: function (page) {
                console.log("-- helloUserWidget beforeAppear callback");
            }
        }
    }
);
