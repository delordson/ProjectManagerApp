/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Project(entitySet) {
        /// <summary>
        /// Represents the Project entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this project.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this project.
        /// </field>
        /// <field name="ProjectReference" type="String">
        /// Gets or sets the projectReference for this project.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this project.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this project.
        /// </field>
        /// <field name="StartDate" type="Date">
        /// Gets or sets the startDate for this project.
        /// </field>
        /// <field name="EndDate" type="Date">
        /// Gets or sets the endDate for this project.
        /// </field>
        /// <field name="Prority" type="String">
        /// Gets or sets the prority for this project.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this project.
        /// </field>
        /// <field name="Budget" type="String">
        /// Gets or sets the budget for this project.
        /// </field>
        /// <field name="ProjectTasks" type="msls.EntityCollection" elementType="msls.application.ProjectTask">
        /// Gets the projectTasks for this project.
        /// </field>
        /// <field name="ProjectResources" type="msls.EntityCollection" elementType="msls.application.ProjectResource">
        /// Gets the projectResources for this project.
        /// </field>
        /// <field name="ProjectManager" type="msls.application.Employee">
        /// Gets or sets the projectManager for this project.
        /// </field>
        /// <field name="Client" type="msls.application.Client">
        /// Gets or sets the client for this project.
        /// </field>
        /// <field name="ProjectRisks" type="msls.EntityCollection" elementType="msls.application.ProjectRisk">
        /// Gets the projectRisks for this project.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this project.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this project.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this project.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this project.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this project.
        /// </field>
        /// <field name="details" type="msls.application.Project.Details">
        /// Gets the details for this project.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProjectTask(entitySet) {
        /// <summary>
        /// Represents the ProjectTask entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this projectTask.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this projectTask.
        /// </field>
        /// <field name="Title" type="String">
        /// Gets or sets the title for this projectTask.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this projectTask.
        /// </field>
        /// <field name="DueDate" type="Date">
        /// Gets or sets the dueDate for this projectTask.
        /// </field>
        /// <field name="Priority" type="String">
        /// Gets or sets the priority for this projectTask.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this projectTask.
        /// </field>
        /// <field name="PercentCompleted" type="String">
        /// Gets or sets the percentCompleted for this projectTask.
        /// </field>
        /// <field name="DateStarted" type="Date">
        /// Gets or sets the dateStarted for this projectTask.
        /// </field>
        /// <field name="DateCompleted" type="Date">
        /// Gets or sets the dateCompleted for this projectTask.
        /// </field>
        /// <field name="Project" type="msls.application.Project">
        /// Gets or sets the project for this projectTask.
        /// </field>
        /// <field name="ProjectResourceTasks" type="msls.EntityCollection" elementType="msls.application.ProjectResourceTask">
        /// Gets the projectResourceTasks for this projectTask.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this projectTask.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this projectTask.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this projectTask.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this projectTask.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this projectTask.
        /// </field>
        /// <field name="details" type="msls.application.ProjectTask.Details">
        /// Gets the details for this projectTask.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProjectResource(entitySet) {
        /// <summary>
        /// Represents the ProjectResource entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this projectResource.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this projectResource.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this projectResource.
        /// </field>
        /// <field name="Project" type="msls.application.Project">
        /// Gets or sets the project for this projectResource.
        /// </field>
        /// <field name="ProjectResourceTasks" type="msls.EntityCollection" elementType="msls.application.ProjectResourceTask">
        /// Gets the projectResourceTasks for this projectResource.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this projectResource.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this projectResource.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this projectResource.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this projectResource.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this projectResource.
        /// </field>
        /// <field name="details" type="msls.application.ProjectResource.Details">
        /// Gets the details for this projectResource.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Employee(entitySet) {
        /// <summary>
        /// Represents the Employee entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employee.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employee.
        /// </field>
        /// <field name="UserName" type="String">
        /// Gets or sets the userName for this employee.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this employee.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this employee.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this employee.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this employee.
        /// </field>
        /// <field name="EmployeeImage" type="String">
        /// Gets or sets the employeeImage for this employee.
        /// </field>
        /// <field name="ProjectResources" type="msls.EntityCollection" elementType="msls.application.ProjectResource">
        /// Gets the projectResources for this employee.
        /// </field>
        /// <field name="Projects" type="msls.EntityCollection" elementType="msls.application.Project">
        /// Gets the projects for this employee.
        /// </field>
        /// <field name="EmployeeSkillsCollection" type="msls.EntityCollection" elementType="msls.application.EmployeeSkills">
        /// Gets the employeeSkillsCollection for this employee.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employee.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employee.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employee.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employee.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employee.
        /// </field>
        /// <field name="details" type="msls.application.Employee.Details">
        /// Gets the details for this employee.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProjectResourceTask(entitySet) {
        /// <summary>
        /// Represents the ProjectResourceTask entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this projectResourceTask.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this projectResourceTask.
        /// </field>
        /// <field name="AssignedTo" type="msls.application.ProjectResource">
        /// Gets or sets the assignedTo for this projectResourceTask.
        /// </field>
        /// <field name="ProjectTask" type="msls.application.ProjectTask">
        /// Gets or sets the projectTask for this projectResourceTask.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this projectResourceTask.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this projectResourceTask.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this projectResourceTask.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this projectResourceTask.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this projectResourceTask.
        /// </field>
        /// <field name="details" type="msls.application.ProjectResourceTask.Details">
        /// Gets the details for this projectResourceTask.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmployeeSkills(entitySet) {
        /// <summary>
        /// Represents the EmployeeSkills entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employeeSkills.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employeeSkills.
        /// </field>
        /// <field name="Skill" type="String">
        /// Gets or sets the skill for this employeeSkills.
        /// </field>
        /// <field name="SkillYears" type="Number">
        /// Gets or sets the skillYears for this employeeSkills.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this employeeSkills.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employeeSkills.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employeeSkills.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employeeSkills.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employeeSkills.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employeeSkills.
        /// </field>
        /// <field name="details" type="msls.application.EmployeeSkills.Details">
        /// Gets the details for this employeeSkills.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Client(entitySet) {
        /// <summary>
        /// Represents the Client entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this client.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this client.
        /// </field>
        /// <field name="ClientName" type="String">
        /// Gets or sets the clientName for this client.
        /// </field>
        /// <field name="AddressLine1" type="String">
        /// Gets or sets the addressLine1 for this client.
        /// </field>
        /// <field name="AddressLine2" type="String">
        /// Gets or sets the addressLine2 for this client.
        /// </field>
        /// <field name="AddressLine3" type="String">
        /// Gets or sets the addressLine3 for this client.
        /// </field>
        /// <field name="AddressLine4" type="String">
        /// Gets or sets the addressLine4 for this client.
        /// </field>
        /// <field name="AddressLine5" type="String">
        /// Gets or sets the addressLine5 for this client.
        /// </field>
        /// <field name="PostCode" type="String">
        /// Gets or sets the postCode for this client.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this client.
        /// </field>
        /// <field name="Phone1" type="String">
        /// Gets or sets the phone1 for this client.
        /// </field>
        /// <field name="Phone2" type="String">
        /// Gets or sets the phone2 for this client.
        /// </field>
        /// <field name="Fax" type="String">
        /// Gets or sets the fax for this client.
        /// </field>
        /// <field name="Website" type="String">
        /// Gets or sets the website for this client.
        /// </field>
        /// <field name="Projects" type="msls.EntityCollection" elementType="msls.application.Project">
        /// Gets the projects for this client.
        /// </field>
        /// <field name="ClientContacts" type="msls.EntityCollection" elementType="msls.application.ClientContact">
        /// Gets the clientContacts for this client.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this client.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this client.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this client.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this client.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this client.
        /// </field>
        /// <field name="details" type="msls.application.Client.Details">
        /// Gets the details for this client.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ClientContact(entitySet) {
        /// <summary>
        /// Represents the ClientContact entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this clientContact.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this clientContact.
        /// </field>
        /// <field name="ContactName" type="String">
        /// Gets or sets the contactName for this clientContact.
        /// </field>
        /// <field name="ContactJobDescription" type="String">
        /// Gets or sets the contactJobDescription for this clientContact.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this clientContact.
        /// </field>
        /// <field name="Phone" type="String">
        /// Gets or sets the phone for this clientContact.
        /// </field>
        /// <field name="Client" type="msls.application.Client">
        /// Gets or sets the client for this clientContact.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this clientContact.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this clientContact.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this clientContact.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this clientContact.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this clientContact.
        /// </field>
        /// <field name="details" type="msls.application.ClientContact.Details">
        /// Gets the details for this clientContact.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProjectRisk(entitySet) {
        /// <summary>
        /// Represents the ProjectRisk entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this projectRisk.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this projectRisk.
        /// </field>
        /// <field name="RiskTitle" type="String">
        /// Gets or sets the riskTitle for this projectRisk.
        /// </field>
        /// <field name="RiskDescription" type="String">
        /// Gets or sets the riskDescription for this projectRisk.
        /// </field>
        /// <field name="ControlMeasures" type="String">
        /// Gets or sets the controlMeasures for this projectRisk.
        /// </field>
        /// <field name="Likelihood" type="Number">
        /// Gets or sets the likelihood for this projectRisk.
        /// </field>
        /// <field name="Impact" type="Number">
        /// Gets or sets the impact for this projectRisk.
        /// </field>
        /// <field name="Project" type="msls.application.Project">
        /// Gets or sets the project for this projectRisk.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this projectRisk.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this projectRisk.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this projectRisk.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this projectRisk.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this projectRisk.
        /// </field>
        /// <field name="details" type="msls.application.ProjectRisk.Details">
        /// Gets the details for this projectRisk.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Projects" type="msls.EntitySet">
        /// Gets the Projects entity set.
        /// </field>
        /// <field name="ProjectTasks" type="msls.EntitySet">
        /// Gets the ProjectTasks entity set.
        /// </field>
        /// <field name="ProjectResources" type="msls.EntitySet">
        /// Gets the ProjectResources entity set.
        /// </field>
        /// <field name="Employees" type="msls.EntitySet">
        /// Gets the Employees entity set.
        /// </field>
        /// <field name="ProjectResourceTasks" type="msls.EntitySet">
        /// Gets the ProjectResourceTasks entity set.
        /// </field>
        /// <field name="EmployeeSkills" type="msls.EntitySet">
        /// Gets the EmployeeSkills entity set.
        /// </field>
        /// <field name="Clients" type="msls.EntitySet">
        /// Gets the Clients entity set.
        /// </field>
        /// <field name="ClientContacts" type="msls.EntitySet">
        /// Gets the ClientContacts entity set.
        /// </field>
        /// <field name="ProjectRisks" type="msls.EntitySet">
        /// Gets the ProjectRisks entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Project: $defineEntity(Project, [
            { name: "Id", type: Number },
            { name: "ProjectReference", type: String },
            { name: "ProjectName", type: String },
            { name: "Description", type: String },
            { name: "StartDate", type: Date },
            { name: "EndDate", type: Date },
            { name: "Prority", type: String },
            { name: "Status", type: String },
            { name: "Budget", type: String },
            { name: "ProjectTasks", kind: "collection", elementType: ProjectTask },
            { name: "ProjectResources", kind: "collection", elementType: ProjectResource },
            { name: "ProjectManager", kind: "reference", type: Employee },
            { name: "Client", kind: "reference", type: Client },
            { name: "ProjectRisks", kind: "collection", elementType: ProjectRisk },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ProjectTask: $defineEntity(ProjectTask, [
            { name: "Id", type: Number },
            { name: "Title", type: String },
            { name: "Description", type: String },
            { name: "DueDate", type: Date },
            { name: "Priority", type: String },
            { name: "Status", type: String },
            { name: "PercentCompleted", type: String },
            { name: "DateStarted", type: Date },
            { name: "DateCompleted", type: Date },
            { name: "Project", kind: "reference", type: Project },
            { name: "ProjectResourceTasks", kind: "collection", elementType: ProjectResourceTask },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ProjectResource: $defineEntity(ProjectResource, [
            { name: "Id", type: Number },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "Project", kind: "reference", type: Project },
            { name: "ProjectResourceTasks", kind: "collection", elementType: ProjectResourceTask },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Employee: $defineEntity(Employee, [
            { name: "Id", type: Number },
            { name: "UserName", type: String },
            { name: "FirstName", type: String },
            { name: "LastName", type: String },
            { name: "Description", type: String },
            { name: "Email", type: String },
            { name: "EmployeeImage", type: String },
            { name: "ProjectResources", kind: "collection", elementType: ProjectResource },
            { name: "Projects", kind: "collection", elementType: Project },
            { name: "EmployeeSkillsCollection", kind: "collection", elementType: EmployeeSkills },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ProjectResourceTask: $defineEntity(ProjectResourceTask, [
            { name: "Id", type: Number },
            { name: "AssignedTo", kind: "reference", type: ProjectResource },
            { name: "ProjectTask", kind: "reference", type: ProjectTask },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        EmployeeSkills: $defineEntity(EmployeeSkills, [
            { name: "Id", type: Number },
            { name: "Skill", type: String },
            { name: "SkillYears", type: Number },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Client: $defineEntity(Client, [
            { name: "Id", type: Number },
            { name: "ClientName", type: String },
            { name: "AddressLine1", type: String },
            { name: "AddressLine2", type: String },
            { name: "AddressLine3", type: String },
            { name: "AddressLine4", type: String },
            { name: "AddressLine5", type: String },
            { name: "PostCode", type: String },
            { name: "Email", type: String },
            { name: "Phone1", type: String },
            { name: "Phone2", type: String },
            { name: "Fax", type: String },
            { name: "Website", type: String },
            { name: "Projects", kind: "collection", elementType: Project },
            { name: "ClientContacts", kind: "collection", elementType: ClientContact },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ClientContact: $defineEntity(ClientContact, [
            { name: "Id", type: Number },
            { name: "ContactName", type: String },
            { name: "ContactJobDescription", type: String },
            { name: "Email", type: String },
            { name: "Phone", type: String },
            { name: "Client", kind: "reference", type: Client },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ProjectRisk: $defineEntity(ProjectRisk, [
            { name: "Id", type: Number },
            { name: "RiskTitle", type: String },
            { name: "RiskDescription", type: String },
            { name: "ControlMeasures", type: String },
            { name: "Likelihood", type: Number },
            { name: "Impact", type: Number },
            { name: "Project", kind: "reference", type: Project },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Projects", elementType: Project },
            { name: "ProjectTasks", elementType: ProjectTask },
            { name: "ProjectResources", elementType: ProjectResource },
            { name: "Employees", elementType: Employee },
            { name: "ProjectResourceTasks", elementType: ProjectResourceTask },
            { name: "EmployeeSkills", elementType: EmployeeSkills },
            { name: "Clients", elementType: Client },
            { name: "ClientContacts", elementType: ClientContact },
            { name: "ProjectRisks", elementType: ProjectRisk }
        ], [
            {
                name: "Projects_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Projects },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Projects(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ProjectTasks_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ProjectTasks },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProjectTasks(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ProjectResources_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ProjectResources },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProjectResources(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Employees_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Employees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Employees(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ProjectResourceTasks_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ProjectResourceTasks },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProjectResourceTasks(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "MyProjectAssignments", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Projects },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyProjectAssignments()",
                        {
                        });
                }
            },
            {
                name: "MyTasks", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.ProjectResourceTasks },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyTasks()",
                        {
                        });
                }
            },
            {
                name: "EmployeeSkills_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeSkills },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/EmployeeSkills(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Clients_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Clients },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Clients(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ClientContacts_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ClientContacts },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ClientContacts(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ProjectRisks_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ProjectRisks },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/ProjectRisks(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
