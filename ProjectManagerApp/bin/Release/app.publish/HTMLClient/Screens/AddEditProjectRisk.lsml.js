/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditProjectRisk.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditProjectRisks"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};