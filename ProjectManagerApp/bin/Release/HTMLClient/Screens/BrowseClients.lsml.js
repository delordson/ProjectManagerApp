/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseClients.created = function (screen) {

    if (myapp.permissions["LightSwitchApplication:CanEditClients"]) {
        screen.findContentItem("AddClient").isEnabled = true;
    }
    else {
        screen.findContentItem("AddClient").isEnabled = false;
    }
};