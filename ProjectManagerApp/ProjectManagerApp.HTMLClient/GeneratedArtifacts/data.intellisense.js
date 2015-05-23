/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Project, {
        /// <field>
        /// Called when a new project is created.
        /// <br/>created(msls.application.Project entity)
        /// </field>
        created: [lightSwitchApplication.Project]
    });

    msls._addEntryPoints(lightSwitchApplication.ProjectTask, {
        /// <field>
        /// Called when a new projectTask is created.
        /// <br/>created(msls.application.ProjectTask entity)
        /// </field>
        created: [lightSwitchApplication.ProjectTask]
    });

    msls._addEntryPoints(lightSwitchApplication.ProjectResource, {
        /// <field>
        /// Called when a new projectResource is created.
        /// <br/>created(msls.application.ProjectResource entity)
        /// </field>
        created: [lightSwitchApplication.ProjectResource]
    });

    msls._addEntryPoints(lightSwitchApplication.Employee, {
        /// <field>
        /// Called when a new employee is created.
        /// <br/>created(msls.application.Employee entity)
        /// </field>
        created: [lightSwitchApplication.Employee]
    });

    msls._addEntryPoints(lightSwitchApplication.ProjectResourceTask, {
        /// <field>
        /// Called when a new projectResourceTask is created.
        /// <br/>created(msls.application.ProjectResourceTask entity)
        /// </field>
        created: [lightSwitchApplication.ProjectResourceTask]
    });

    msls._addEntryPoints(lightSwitchApplication.EmployeeSkills, {
        /// <field>
        /// Called when a new employeeSkills is created.
        /// <br/>created(msls.application.EmployeeSkills entity)
        /// </field>
        created: [lightSwitchApplication.EmployeeSkills]
    });

    msls._addEntryPoints(lightSwitchApplication.Client, {
        /// <field>
        /// Called when a new client is created.
        /// <br/>created(msls.application.Client entity)
        /// </field>
        created: [lightSwitchApplication.Client]
    });

    msls._addEntryPoints(lightSwitchApplication.ClientContact, {
        /// <field>
        /// Called when a new clientContact is created.
        /// <br/>created(msls.application.ClientContact entity)
        /// </field>
        created: [lightSwitchApplication.ClientContact]
    });

    msls._addEntryPoints(lightSwitchApplication.ProjectRisk, {
        /// <field>
        /// Called when a new projectRisk is created.
        /// <br/>created(msls.application.ProjectRisk entity)
        /// </field>
        created: [lightSwitchApplication.ProjectRisk]
    });

}(msls.application));
