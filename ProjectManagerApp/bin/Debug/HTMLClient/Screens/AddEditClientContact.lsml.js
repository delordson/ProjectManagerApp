/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditClientContact.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditClientContacts"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};