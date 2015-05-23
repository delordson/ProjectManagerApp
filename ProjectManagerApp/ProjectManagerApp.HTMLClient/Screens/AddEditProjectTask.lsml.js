/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditProjectTask.created = function (screen) {
    var projectTask;

    if (screen.ProjectTask.Title !== undefined) {
        projectTask = screen.ProjectTask.Title;
        screen.details.displayName = "Edit Task: " + projectTask;
    }
    else {
        screen.details.displayName = "Add New Task";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditProjectTasks"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("TaskResourcesTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("TaskResourcesTab").isReadOnly = true;
    }
};