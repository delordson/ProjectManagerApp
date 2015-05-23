/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditClient.created = function (screen) {
    // Write code here.
    var client;

    if (screen.Client.ClientName !== undefined) {
        client = screen.Client.ClientName;
        screen.details.displayName = "Edit Client: " + client;
    }
    else {
        screen.details.displayName = "Add New Client";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditClients"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("ClientContactsTab").isReadOnly = false;
        screen.findContentItem("ProjectsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("ClientContactsTab").isReadOnly = true;
        screen.findContentItem("ProjectsTab").isReadOnly = true;
    }
};