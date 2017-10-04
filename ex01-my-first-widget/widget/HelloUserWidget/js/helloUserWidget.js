/**
 *  Hello User Widget v2
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
            isMorning: ko.observable(false),
            onLoad: function (widgetModel) {
                widget = widgetModel;
                console.log("-- helloUserWidget onLoad callback");
            },
            beforeAppear: function (page) {
                console.log("-- helloUserWidget beforeAppear callback");
                var date = new Date();
                if (date.getHours()<12){
                    widget.isMorning(true);
                } else {
                    widget.isMorning(false);
                }
            }
        }
    }
);
