/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditEmployeeSkills.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditEmployeesSkills"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};