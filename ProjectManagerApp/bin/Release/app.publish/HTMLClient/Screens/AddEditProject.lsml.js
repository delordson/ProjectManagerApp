/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditProject.created = function (screen) {
    var projectName;

    if (screen.Project.ProjectName !== undefined) {
        projectName = screen.Project.ProjectName;
        screen.details.displayName = "Edit Project: " + projectName;
    }
    else {
        screen.details.displayName = "Add New Project";
    }


    if (myapp.permissions["LightSwitchApplication:CanEditProjects"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("ProjectTasksTab").isReadOnly = false;
        screen.findContentItem("ProjectResourcesTab").isReadOnly = false;
        screen.findContentItem("ProjectRisksTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("ProjectTasksTab").isReadOnly = true;
        screen.findContentItem("ProjectResourcesTab").isReadOnly = true;
        screen.findContentItem("ProjectRisksTab").isReadOnly = true;
    }
};