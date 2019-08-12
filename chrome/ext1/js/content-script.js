chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "copy") {
            var ctrl = $("#sb_form_q");
            if (ctrl.length > 0) {
                if (sendResponse) sendResponse(ctrl.val());
            } else {
                alert("No data");
            }
        } else if (request.action === "paste") {
            var ctrl = $("#input");
            if (ctrl.length > 0) {
                ctrl.val(request.data);
                sendResponse("OK");
            } else {
                alert("No data");
            }
        }

    }
);