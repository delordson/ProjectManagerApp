/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseProjects.created = function (screen) {

    if (myapp.permissions["LightSwitchApplication:CanEditProjects"]) {
        screen.findContentItem("AddProject").isEnabled = true;
    }
    else {
        screen.findContentItem("AddProject").isEnabled = false;
    }
};