/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditEmployee.created = function (screen) {
    // Write code here.
    var lastname;
    var firstname;

    if (screen.Employee.LastName !== undefined) {
        lastname = screen.Employee.LastName;
        firstname = screen.Employee.FirstName;
        screen.details.displayName = "Edit Employee: " + firstname + " " + lastname;
    }
    else {
        screen.details.displayName = "Add New Employee";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditEmployees"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("EmployeeSkillsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("EmployeeSkillsTab").isReadOnly = true;
    }
};