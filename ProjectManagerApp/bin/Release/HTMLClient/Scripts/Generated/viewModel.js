/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditClient(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditClient screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Client" type="msls.application.Client">
        /// Gets or sets the client for this screen.
        /// </field>
        /// <field name="Projects" type="msls.VisualCollection" elementType="msls.application.Project">
        /// Gets the projects for this screen.
        /// </field>
        /// <field name="ClientContacts" type="msls.VisualCollection" elementType="msls.application.ClientContact">
        /// Gets the clientContacts for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditClient.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditClient", parameters);
    }

    function AddEditClientContact(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditClientContact screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ClientContact" type="msls.application.ClientContact">
        /// Gets or sets the clientContact for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditClientContact.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditClientContact", parameters);
    }

    function AddEditEmployee(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployee screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this screen.
        /// </field>
        /// <field name="EmployeeSkillsCollection" type="msls.VisualCollection" elementType="msls.application.EmployeeSkills">
        /// Gets the employeeSkillsCollection for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployee.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployee", parameters);
    }

    function AddEditEmployeeImage(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployeeImage screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployeeImage.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployeeImage", parameters);
    }

    function AddEditEmployeeSkills(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployeeSkills screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeSkills" type="msls.application.EmployeeSkills">
        /// Gets or sets the employeeSkills for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployeeSkills.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployeeSkills", parameters);
    }

    function AddEditProject(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProject screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Project" type="msls.application.Project">
        /// Gets or sets the project for this screen.
        /// </field>
        /// <field name="ProjectTasks" type="msls.VisualCollection" elementType="msls.application.ProjectTask">
        /// Gets the projectTasks for this screen.
        /// </field>
        /// <field name="ProjectResources" type="msls.VisualCollection" elementType="msls.application.ProjectResource">
        /// Gets the projectResources for this screen.
        /// </field>
        /// <field name="ProjectRisks" type="msls.VisualCollection" elementType="msls.application.ProjectRisk">
        /// Gets the projectRisks for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProject.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProject", parameters);
    }

    function AddEditProjectResource(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProjectResource screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectResource" type="msls.application.ProjectResource">
        /// Gets or sets the projectResource for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProjectResource.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProjectResource", parameters);
    }

    function AddEditProjectResourceTask(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProjectResourceTask screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectResourceTask" type="msls.application.ProjectResourceTask">
        /// Gets or sets the projectResourceTask for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProjectResourceTask.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProjectResourceTask", parameters);
    }

    function AddEditProjectRisk(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProjectRisk screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectRisk" type="msls.application.ProjectRisk">
        /// Gets or sets the projectRisk for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProjectRisk.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProjectRisk", parameters);
    }

    function AddEditProjectTask(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProjectTask screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectTask" type="msls.application.ProjectTask">
        /// Gets or sets the projectTask for this screen.
        /// </field>
        /// <field name="ProjectResourceTasks" type="msls.VisualCollection" elementType="msls.application.ProjectResourceTask">
        /// Gets the projectResourceTasks for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProjectTask.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProjectTask", parameters);
    }

    function BrowseClients(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseClients screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Clients" type="msls.VisualCollection" elementType="msls.application.Client">
        /// Gets the clients for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseClients.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseClients", parameters);
    }

    function BrowseEmployees(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployees screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employees" type="msls.VisualCollection" elementType="msls.application.Employee">
        /// Gets the employees for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployees.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployees", parameters);
    }

    function BrowseMyProjectAssignments(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyProjectAssignments screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyProjectAssignments" type="msls.VisualCollection" elementType="msls.application.Project">
        /// Gets the myProjectAssignments for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyProjectAssignments.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyProjectAssignments", parameters);
    }

    function BrowseMyTasks(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyTasks screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyTasks" type="msls.VisualCollection" elementType="msls.application.ProjectResourceTask">
        /// Gets the myTasks for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyTasks.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyTasks", parameters);
    }

    function BrowseProjects(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProjects screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Projects" type="msls.VisualCollection" elementType="msls.application.Project">
        /// Gets the projects for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProjects.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProjects", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function MobileHome(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MobileHome screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.MobileHome.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MobileHome", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditClient: $defineScreen(AddEditClient, [
            { name: "Client", kind: "local", type: lightSwitchApplication.Client },
            {
                name: "Projects", kind: "collection", elementType: lightSwitchApplication.Project,
                getNavigationProperty: function () {
                    if (this.owner.Client) {
                        return this.owner.Client.details.properties.Projects;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "ClientContacts", kind: "collection", elementType: lightSwitchApplication.ClientContact,
                getNavigationProperty: function () {
                    if (this.owner.Client) {
                        return this.owner.Client.details.properties.ClientContacts;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditClientContact: $defineScreen(AddEditClientContact, [
            { name: "ClientContact", kind: "local", type: lightSwitchApplication.ClientContact }
        ], [
        ]),

        AddEditEmployee: $defineScreen(AddEditEmployee, [
            { name: "Employee", kind: "local", type: lightSwitchApplication.Employee },
            {
                name: "EmployeeSkillsCollection", kind: "collection", elementType: lightSwitchApplication.EmployeeSkills,
                getNavigationProperty: function () {
                    if (this.owner.Employee) {
                        return this.owner.Employee.details.properties.EmployeeSkillsCollection;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditEmployeeImage: $defineScreen(AddEditEmployeeImage, [
            { name: "Employee", kind: "local", type: lightSwitchApplication.Employee }
        ], [
        ]),

        AddEditEmployeeSkills: $defineScreen(AddEditEmployeeSkills, [
            { name: "EmployeeSkills", kind: "local", type: lightSwitchApplication.EmployeeSkills }
        ], [
        ]),

        AddEditProject: $defineScreen(AddEditProject, [
            { name: "Project", kind: "local", type: lightSwitchApplication.Project },
            {
                name: "ProjectTasks", kind: "collection", elementType: lightSwitchApplication.ProjectTask,
                getNavigationProperty: function () {
                    if (this.owner.Project) {
                        return this.owner.Project.details.properties.ProjectTasks;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "ProjectResources", kind: "collection", elementType: lightSwitchApplication.ProjectResource,
                getNavigationProperty: function () {
                    if (this.owner.Project) {
                        return this.owner.Project.details.properties.ProjectResources;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Employee");
                }
            },
            {
                name: "ProjectRisks", kind: "collection", elementType: lightSwitchApplication.ProjectRisk,
                getNavigationProperty: function () {
                    if (this.owner.Project) {
                        return this.owner.Project.details.properties.ProjectRisks;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditProjectResource: $defineScreen(AddEditProjectResource, [
            { name: "ProjectResource", kind: "local", type: lightSwitchApplication.ProjectResource }
        ], [
        ]),

        AddEditProjectResourceTask: $defineScreen(AddEditProjectResourceTask, [
            { name: "ProjectResourceTask", kind: "local", type: lightSwitchApplication.ProjectResourceTask }
        ], [
        ]),

        AddEditProjectRisk: $defineScreen(AddEditProjectRisk, [
            { name: "ProjectRisk", kind: "local", type: lightSwitchApplication.ProjectRisk }
        ], [
        ]),

        AddEditProjectTask: $defineScreen(AddEditProjectTask, [
            { name: "ProjectTask", kind: "local", type: lightSwitchApplication.ProjectTask },
            {
                name: "ProjectResourceTasks", kind: "collection", elementType: lightSwitchApplication.ProjectResourceTask,
                getNavigationProperty: function () {
                    if (this.owner.ProjectTask) {
                        return this.owner.ProjectTask.details.properties.ProjectResourceTasks;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("AssignedTo").expand("AssignedTo.Employee");
                }
            }
        ], [
        ]),

        BrowseClients: $defineScreen(BrowseClients, [
            {
                name: "Clients", kind: "collection", elementType: lightSwitchApplication.Client,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.Clients.filter("(((((" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ClientName)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine1)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine2)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine3)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine4)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AddressLine5)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", PostCode)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseEmployees: $defineScreen(BrowseEmployees, [
            {
                name: "Employees", kind: "collection", elementType: lightSwitchApplication.Employee,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.Employees.filter("((" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", FirstName)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", LastName)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", Description)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", UserName)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMyProjectAssignments: $defineScreen(BrowseMyProjectAssignments, [
            {
                name: "MyProjectAssignments", kind: "collection", elementType: lightSwitchApplication.Project,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.MyProjectAssignments().filter("(" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ProjectName)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ProjectReference)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", Description)") + "").expand("Client");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMyTasks: $defineScreen(BrowseMyTasks, [
            {
                name: "MyTasks", kind: "collection", elementType: lightSwitchApplication.ProjectResourceTask,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.MyTasks().filter("" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ProjectTask/Title)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ProjectTask/Description)") + "").expand("ProjectTask").expand("ProjectTask.Project");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseProjects: $defineScreen(BrowseProjects, [
            {
                name: "Projects", kind: "collection", elementType: lightSwitchApplication.Project,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.Projects.filter("(" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", Description)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ProjectName)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ProjectReference)") + "").expand("Client");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        Home: $defineScreen(Home, [
        ], [
        ]),

        MobileHome: $defineScreen(MobileHome, [
        ], [
        ]),

        showAddEditClient: $defineShowScreen(function showAddEditClient(Client, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditClient screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditClient", parameters, options);
        }),

        showAddEditClientContact: $defineShowScreen(function showAddEditClientContact(ClientContact, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditClientContact screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditClientContact", parameters, options);
        }),

        showAddEditEmployee: $defineShowScreen(function showAddEditEmployee(Employee, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployee screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployee", parameters, options);
        }),

        showAddEditEmployeeImage: $defineShowScreen(function showAddEditEmployeeImage(Employee, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployeeImage screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployeeImage", parameters, options);
        }),

        showAddEditEmployeeSkills: $defineShowScreen(function showAddEditEmployeeSkills(EmployeeSkills, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployeeSkills screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployeeSkills", parameters, options);
        }),

        showAddEditProject: $defineShowScreen(function showAddEditProject(Project, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProject screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProject", parameters, options);
        }),

        showAddEditProjectResource: $defineShowScreen(function showAddEditProjectResource(ProjectResource, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProjectResource screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProjectResource", parameters, options);
        }),

        showAddEditProjectResourceTask: $defineShowScreen(function showAddEditProjectResourceTask(ProjectResourceTask, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProjectResourceTask screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProjectResourceTask", parameters, options);
        }),

        showAddEditProjectRisk: $defineShowScreen(function showAddEditProjectRisk(ProjectRisk, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProjectRisk screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProjectRisk", parameters, options);
        }),

        showAddEditProjectTask: $defineShowScreen(function showAddEditProjectTask(ProjectTask, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProjectTask screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProjectTask", parameters, options);
        }),

        showBrowseClients: $defineShowScreen(function showBrowseClients(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseClients screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseClients", parameters, options);
        }),

        showBrowseEmployees: $defineShowScreen(function showBrowseEmployees(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployees screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployees", parameters, options);
        }),

        showBrowseMyProjectAssignments: $defineShowScreen(function showBrowseMyProjectAssignments(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyProjectAssignments screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyProjectAssignments", parameters, options);
        }),

        showBrowseMyTasks: $defineShowScreen(function showBrowseMyTasks(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyTasks screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyTasks", parameters, options);
        }),

        showBrowseProjects: $defineShowScreen(function showBrowseProjects(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProjects screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProjects", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showMobileHome: $defineShowScreen(function showMobileHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MobileHome screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MobileHome", parameters, options);
        })

    });

}(msls.application));
