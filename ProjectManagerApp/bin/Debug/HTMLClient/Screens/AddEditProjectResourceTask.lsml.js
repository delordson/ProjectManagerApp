/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditProjectResourceTask.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditProjectResourceTasks"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};