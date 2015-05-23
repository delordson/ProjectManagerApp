/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditEmployeeImage.EmployeeImage_render = function (element, contentItem) {
    createImageUploader(element, contentItem, "max-width: 300px; max-height: 300px");
};
myapp.AddEditEmployeeImage.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditEmployees"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};