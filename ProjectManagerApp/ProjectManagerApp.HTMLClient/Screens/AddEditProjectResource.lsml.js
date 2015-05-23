/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditProjectResource.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditProjectResources"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};