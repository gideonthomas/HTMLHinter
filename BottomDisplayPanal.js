define(function (require) {
    "use strict";
    var Resizer             = brackets.getModule('utils/Resizer'),
        WorkspaceManager    = brackets.getModule("view/WorkspaceManager");
    var BottomHTML = require('text!BottomDisplay.html');
    function BottomDisplay()
    {
        var that = this;
        WorkspaceManager.createBottomPanel('Bottom.panel', $(BottomHTML));
        this._panel = $('#bottom-panel-gui');
        this._panel.on('click', '.close', function () { that.panelRender(false); });
    }
    BottomDisplay.prototype.panelRender = function (isVisible)
    {
        if(isVisible)
        {
            Resizer.show(this._panel);
        }
        else
        {
            Resizer.hide(this._panel);
        }
    };
    BottomDisplay.prototype.update = function (text)
    {
        var renderedError = $(text);
        this._panel.find('.table-container').empty().append($(renderedError));
    };
    BottomDisplay.prototype._onClose = function ()
    {
        Resizer.hide(this._panel);
    };
    return BottomDisplay;
}); 