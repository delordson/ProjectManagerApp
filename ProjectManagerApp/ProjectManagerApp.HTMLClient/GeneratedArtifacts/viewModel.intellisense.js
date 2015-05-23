/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditClient.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditClient
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: lightSwitchApplication.AddEditClient
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: lightSwitchApplication.Client
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        ClientName: {
            _$class: msls.ContentItem,
            _$name: "ClientName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        AddressLine1: {
            _$class: msls.ContentItem,
            _$name: "AddressLine1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        AddressLine2: {
            _$class: msls.ContentItem,
            _$name: "AddressLine2",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        AddressLine3: {
            _$class: msls.ContentItem,
            _$name: "AddressLine3",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        AddressLine4: {
            _$class: msls.ContentItem,
            _$name: "AddressLine4",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        AddressLine5: {
            _$class: msls.ContentItem,
            _$name: "AddressLine5",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        PostCode: {
            _$class: msls.ContentItem,
            _$name: "PostCode",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Phone1: {
            _$class: msls.ContentItem,
            _$name: "Phone1",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Phone2: {
            _$class: msls.ContentItem,
            _$name: "Phone2",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Fax: {
            _$class: msls.ContentItem,
            _$name: "Fax",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        Website: {
            _$class: msls.ContentItem,
            _$name: "Website",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Client,
            value: String
        },
        ClientContactsTab: {
            _$class: msls.ContentItem,
            _$name: "ClientContactsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: lightSwitchApplication.AddEditClient
        },
        ClientContacts1: {
            _$class: msls.ContentItem,
            _$name: "ClientContacts1",
            _$parentName: "ClientContactsTab",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditClient,
                _$entry: {
                    elementType: lightSwitchApplication.ClientContact
                }
            }
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "ClientContacts1",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.ClientContact,
            value: lightSwitchApplication.ClientContact
        },
        ContactName: {
            _$class: msls.ContentItem,
            _$name: "ContactName",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.ClientContact,
            value: String
        },
        Email1: {
            _$class: msls.ContentItem,
            _$name: "Email1",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.ClientContact,
            value: String
        },
        Phone11: {
            _$class: msls.ContentItem,
            _$name: "Phone11",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.ClientContact,
            value: String
        },
        ProjectsTab: {
            _$class: msls.ContentItem,
            _$name: "ProjectsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: lightSwitchApplication.AddEditClient
        },
        Projects1: {
            _$class: msls.ContentItem,
            _$name: "Projects1",
            _$parentName: "ProjectsTab",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.AddEditClient,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditClient,
                _$entry: {
                    elementType: lightSwitchApplication.Project
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Projects1",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        ProjectReference: {
            _$class: msls.ContentItem,
            _$name: "ProjectReference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Project,
            value: String
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Project,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Project,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Project,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditClient,
            data: lightSwitchApplication.Project,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditClient
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditClient, {
        /// <field>
        /// Called when a new AddEditClient screen is created.
        /// <br/>created(msls.application.AddEditClient screen)
        /// </field>
        created: [lightSwitchApplication.AddEditClient],
        /// <field>
        /// Called before changes on an active AddEditClient screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditClient screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditClient],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("left"); }],
        /// <field>
        /// Called after the ClientName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientName_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ClientName"); }],
        /// <field>
        /// Called after the AddressLine1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine1_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("AddressLine1"); }],
        /// <field>
        /// Called after the AddressLine2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine2_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("AddressLine2"); }],
        /// <field>
        /// Called after the AddressLine3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine3_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("AddressLine3"); }],
        /// <field>
        /// Called after the AddressLine4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine4_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("AddressLine4"); }],
        /// <field>
        /// Called after the AddressLine5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine5_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("AddressLine5"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("right"); }],
        /// <field>
        /// Called after the PostCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PostCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("PostCode"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Email"); }],
        /// <field>
        /// Called after the Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone1_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Phone1"); }],
        /// <field>
        /// Called after the Phone2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone2_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Phone2"); }],
        /// <field>
        /// Called after the Fax content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Fax_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Fax"); }],
        /// <field>
        /// Called after the Website content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Website_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Website"); }],
        /// <field>
        /// Called after the ClientContactsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientContactsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ClientContactsTab"); }],
        /// <field>
        /// Called after the ClientContacts1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientContacts1_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ClientContacts1"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the ContactName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContactName_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ContactName"); }],
        /// <field>
        /// Called after the Email1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email1_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Email1"); }],
        /// <field>
        /// Called after the Phone11 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone11_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Phone11"); }],
        /// <field>
        /// Called after the ProjectsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ProjectsTab"); }],
        /// <field>
        /// Called after the Projects1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Projects1_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Projects1"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ProjectReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectReference_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ProjectReference"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("Status"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditClient().findContentItem("EndDate"); }]
    });

    lightSwitchApplication.AddEditClientContact.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditClientContact
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditClientContact,
            data: lightSwitchApplication.AddEditClientContact,
            value: lightSwitchApplication.AddEditClientContact
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditClientContact,
            data: lightSwitchApplication.AddEditClientContact,
            value: lightSwitchApplication.ClientContact
        },
        ContactName: {
            _$class: msls.ContentItem,
            _$name: "ContactName",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditClientContact,
            data: lightSwitchApplication.ClientContact,
            value: String
        },
        ContactJobDescription: {
            _$class: msls.ContentItem,
            _$name: "ContactJobDescription",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditClientContact,
            data: lightSwitchApplication.ClientContact,
            value: String
        },
        Phone1: {
            _$class: msls.ContentItem,
            _$name: "Phone1",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditClientContact,
            data: lightSwitchApplication.ClientContact,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditClientContact,
            data: lightSwitchApplication.ClientContact,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditClientContact
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditClientContact, {
        /// <field>
        /// Called when a new AddEditClientContact screen is created.
        /// <br/>created(msls.application.AddEditClientContact screen)
        /// </field>
        created: [lightSwitchApplication.AddEditClientContact],
        /// <field>
        /// Called before changes on an active AddEditClientContact screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditClientContact screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditClientContact],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditClientContact().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditClientContact().findContentItem("columns"); }],
        /// <field>
        /// Called after the ContactName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContactName_postRender: [$element, function () { return new lightSwitchApplication.AddEditClientContact().findContentItem("ContactName"); }],
        /// <field>
        /// Called after the ContactJobDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContactJobDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditClientContact().findContentItem("ContactJobDescription"); }],
        /// <field>
        /// Called after the Phone1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phone1_postRender: [$element, function () { return new lightSwitchApplication.AddEditClientContact().findContentItem("Phone1"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditClientContact().findContentItem("Email"); }]
    });

    lightSwitchApplication.AddEditEmployee.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.Employee
        },
        top: {
            _$class: msls.ContentItem,
            _$name: "top",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        EMail: {
            _$class: msls.ContentItem,
            _$name: "EMail",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        bottom: {
            _$class: msls.ContentItem,
            _$name: "bottom",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "bottom",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        ImageGroup: {
            _$class: msls.ContentItem,
            _$name: "ImageGroup",
            _$parentName: "bottom",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        EmployeeImage: {
            _$class: msls.ContentItem,
            _$name: "EmployeeImage",
            _$parentName: "ImageGroup",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        ShowImageUploader: {
            _$class: msls.ContentItem,
            _$name: "ShowImageUploader",
            _$parentName: "ImageGroup",
            screen: lightSwitchApplication.AddEditEmployee
        },
        EmployeeSkillsTab: {
            _$class: msls.ContentItem,
            _$name: "EmployeeSkillsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        EmployeeSkillsCollection1: {
            _$class: msls.ContentItem,
            _$name: "EmployeeSkillsCollection1",
            _$parentName: "EmployeeSkillsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditEmployee,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeSkills
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "EmployeeSkillsCollection1",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.EmployeeSkills,
            value: lightSwitchApplication.EmployeeSkills
        },
        Skill: {
            _$class: msls.ContentItem,
            _$name: "Skill",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.EmployeeSkills,
            value: String
        },
        SkillYears: {
            _$class: msls.ContentItem,
            _$name: "SkillYears",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.EmployeeSkills,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployee, {
        /// <field>
        /// Called when a new AddEditEmployee screen is created.
        /// <br/>created(msls.application.AddEditEmployee screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called before changes on an active AddEditEmployee screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployee screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("columns"); }],
        /// <field>
        /// Called after the top content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        top_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("top"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("UserName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("LastName"); }],
        /// <field>
        /// Called after the EMail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EMail_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("EMail"); }],
        /// <field>
        /// Called after the bottom content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bottom_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("bottom"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Description"); }],
        /// <field>
        /// Called after the ImageGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ImageGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("ImageGroup"); }],
        /// <field>
        /// Called after the EmployeeImage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeImage_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("EmployeeImage"); }],
        /// <field>
        /// Called after the ShowImageUploader content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowImageUploader_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("ShowImageUploader"); }],
        /// <field>
        /// Called after the EmployeeSkillsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeSkillsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("EmployeeSkillsTab"); }],
        /// <field>
        /// Called after the EmployeeSkillsCollection1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeSkillsCollection1_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("EmployeeSkillsCollection1"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Skill content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Skill_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Skill"); }],
        /// <field>
        /// Called after the SkillYears content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SkillYears_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("SkillYears"); }]
    });

    lightSwitchApplication.AddEditEmployeeImage.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeImage
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployeeImage,
            data: lightSwitchApplication.AddEditEmployeeImage,
            value: lightSwitchApplication.AddEditEmployeeImage
        },
        EmployeeImage: {
            _$class: msls.ContentItem,
            _$name: "EmployeeImage",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployeeImage,
            data: lightSwitchApplication.AddEditEmployeeImage,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeImage
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployeeImage, {
        /// <field>
        /// Called when a new AddEditEmployeeImage screen is created.
        /// <br/>created(msls.application.AddEditEmployeeImage screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployeeImage],
        /// <field>
        /// Called before changes on an active AddEditEmployeeImage screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployeeImage screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployeeImage],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeImage().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called to render the EmployeeImage content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeImage_render: [$element, function () { return new lightSwitchApplication.AddEditEmployeeImage().findContentItem("EmployeeImage"); }]
    });

    lightSwitchApplication.AddEditEmployeeSkills.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeSkills
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployeeSkills,
            data: lightSwitchApplication.AddEditEmployeeSkills,
            value: lightSwitchApplication.AddEditEmployeeSkills
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployeeSkills,
            data: lightSwitchApplication.AddEditEmployeeSkills,
            value: lightSwitchApplication.EmployeeSkills
        },
        Skill: {
            _$class: msls.ContentItem,
            _$name: "Skill",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeSkills,
            data: lightSwitchApplication.EmployeeSkills,
            value: String
        },
        SkillYears: {
            _$class: msls.ContentItem,
            _$name: "SkillYears",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeSkills,
            data: lightSwitchApplication.EmployeeSkills,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeSkills
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployeeSkills, {
        /// <field>
        /// Called when a new AddEditEmployeeSkills screen is created.
        /// <br/>created(msls.application.AddEditEmployeeSkills screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployeeSkills],
        /// <field>
        /// Called before changes on an active AddEditEmployeeSkills screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployeeSkills screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployeeSkills],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeSkills().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeSkills().findContentItem("columns"); }],
        /// <field>
        /// Called after the Skill content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Skill_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeSkills().findContentItem("Skill"); }],
        /// <field>
        /// Called after the SkillYears content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SkillYears_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeSkills().findContentItem("SkillYears"); }]
    });

    lightSwitchApplication.AddEditProject.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProject
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: lightSwitchApplication.AddEditProject
        },
        DetailsLayoutGroup: {
            _$class: msls.ContentItem,
            _$name: "DetailsLayoutGroup",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: lightSwitchApplication.AddEditProject
        },
        Header: {
            _$class: msls.ContentItem,
            _$name: "Header",
            _$parentName: "DetailsLayoutGroup",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: lightSwitchApplication.AddEditProject
        },
        ProjectReference: {
            _$class: msls.ContentItem,
            _$name: "ProjectReference",
            _$parentName: "Header",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: String
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "Header",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "Header",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "Header",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: Date
        },
        Body: {
            _$class: msls.ContentItem,
            _$name: "Body",
            _$parentName: "DetailsLayoutGroup",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: lightSwitchApplication.Project
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "Body",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Client
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Client",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        ProjectManager: {
            _$class: msls.ContentItem,
            _$name: "ProjectManager",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Employee
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ProjectManager",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Prority: {
            _$class: msls.ContentItem,
            _$name: "Prority",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        Budget: {
            _$class: msls.ContentItem,
            _$name: "Budget",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "Body",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.Project,
            value: String
        },
        ProjectTasksTab: {
            _$class: msls.ContentItem,
            _$name: "ProjectTasksTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: lightSwitchApplication.AddEditProject
        },
        ProjectTasks1: {
            _$class: msls.ContentItem,
            _$name: "ProjectTasks1",
            _$parentName: "ProjectTasksTab",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditProject,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectTask
                }
            }
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "ProjectTasks1",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectTask,
            value: lightSwitchApplication.ProjectTask
        },
        Title: {
            _$class: msls.ContentItem,
            _$name: "Title",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectTask,
            value: String
        },
        DueDate: {
            _$class: msls.ContentItem,
            _$name: "DueDate",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectTask,
            value: Date
        },
        Priority: {
            _$class: msls.ContentItem,
            _$name: "Priority",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectTask,
            value: String
        },
        Status1: {
            _$class: msls.ContentItem,
            _$name: "Status1",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectTask,
            value: String
        },
        PercentCompleted: {
            _$class: msls.ContentItem,
            _$name: "PercentCompleted",
            _$parentName: "RowTemplate2",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectTask,
            value: String
        },
        ProjectResourcesTab: {
            _$class: msls.ContentItem,
            _$name: "ProjectResourcesTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: lightSwitchApplication.AddEditProject
        },
        ProjectResources1: {
            _$class: msls.ContentItem,
            _$name: "ProjectResources1",
            _$parentName: "ProjectResourcesTab",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditProject,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectResource
                }
            }
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "ProjectResources1",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectResource,
            value: lightSwitchApplication.ProjectResource
        },
        Employee_EmployeeImage: {
            _$class: msls.ContentItem,
            _$name: "Employee_EmployeeImage",
            _$parentName: "RowTemplate3",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectResource,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "RowTemplate3",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectResource,
            value: lightSwitchApplication.ProjectResource
        },
        Employee_UserName: {
            _$class: msls.ContentItem,
            _$name: "Employee_UserName",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectResource,
            value: String
        },
        Employee_FirstName: {
            _$class: msls.ContentItem,
            _$name: "Employee_FirstName",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectResource,
            value: String
        },
        Employee_LastName: {
            _$class: msls.ContentItem,
            _$name: "Employee_LastName",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectResource,
            value: String
        },
        Employee_EMail: {
            _$class: msls.ContentItem,
            _$name: "Employee_EMail",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectResource,
            value: String
        },
        ProjectRisksTab: {
            _$class: msls.ContentItem,
            _$name: "ProjectRisksTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: lightSwitchApplication.AddEditProject
        },
        ProjectRisks1: {
            _$class: msls.ContentItem,
            _$name: "ProjectRisks1",
            _$parentName: "ProjectRisksTab",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.AddEditProject,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditProject,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectRisk
                }
            }
        },
        RowTemplate5: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate5",
            _$parentName: "ProjectRisks1",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectRisk,
            value: lightSwitchApplication.ProjectRisk
        },
        RiskTitle: {
            _$class: msls.ContentItem,
            _$name: "RiskTitle",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectRisk,
            value: String
        },
        Likelihood: {
            _$class: msls.ContentItem,
            _$name: "Likelihood",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectRisk,
            value: Number
        },
        Impact: {
            _$class: msls.ContentItem,
            _$name: "Impact",
            _$parentName: "RowTemplate5",
            screen: lightSwitchApplication.AddEditProject,
            data: lightSwitchApplication.ProjectRisk,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProject
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProject, {
        /// <field>
        /// Called when a new AddEditProject screen is created.
        /// <br/>created(msls.application.AddEditProject screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProject],
        /// <field>
        /// Called before changes on an active AddEditProject screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProject screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProject],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the DetailsLayoutGroup content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsLayoutGroup_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("DetailsLayoutGroup"); }],
        /// <field>
        /// Called after the Header content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Header_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Header"); }],
        /// <field>
        /// Called after the ProjectReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectReference_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectReference"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the Body content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Body_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Body"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("left"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Client"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the ProjectManager content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectManager_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectManager"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("LastName"); }],
        /// <field>
        /// Called after the Prority content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prority_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Prority"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Status"); }],
        /// <field>
        /// Called after the Budget content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Budget_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Budget"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("right"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Description"); }],
        /// <field>
        /// Called after the ProjectTasksTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectTasksTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectTasksTab"); }],
        /// <field>
        /// Called after the ProjectTasks1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectTasks1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectTasks1"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Title_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Title"); }],
        /// <field>
        /// Called after the DueDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DueDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("DueDate"); }],
        /// <field>
        /// Called after the Priority content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Priority_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Priority"); }],
        /// <field>
        /// Called after the Status1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Status1"); }],
        /// <field>
        /// Called after the PercentCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PercentCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("PercentCompleted"); }],
        /// <field>
        /// Called after the ProjectResourcesTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectResourcesTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectResourcesTab"); }],
        /// <field>
        /// Called after the ProjectResources1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectResources1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectResources1"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the Employee_EmployeeImage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_EmployeeImage_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Employee_EmployeeImage"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Group"); }],
        /// <field>
        /// Called after the Employee_UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Employee_UserName"); }],
        /// <field>
        /// Called after the Employee_FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Employee_FirstName"); }],
        /// <field>
        /// Called after the Employee_LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Employee_LastName"); }],
        /// <field>
        /// Called after the Employee_EMail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_EMail_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Employee_EMail"); }],
        /// <field>
        /// Called after the ProjectRisksTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectRisksTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectRisksTab"); }],
        /// <field>
        /// Called after the ProjectRisks1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectRisks1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("ProjectRisks1"); }],
        /// <field>
        /// Called after the RowTemplate5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate5_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("RowTemplate5"); }],
        /// <field>
        /// Called after the RiskTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("RiskTitle"); }],
        /// <field>
        /// Called after the Likelihood content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Likelihood_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Likelihood"); }],
        /// <field>
        /// Called after the Impact content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Impact_postRender: [$element, function () { return new lightSwitchApplication.AddEditProject().findContentItem("Impact"); }]
    });

    lightSwitchApplication.AddEditProjectResource.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjectResource
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProjectResource,
            data: lightSwitchApplication.AddEditProjectResource,
            value: lightSwitchApplication.AddEditProjectResource
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditProjectResource,
            data: lightSwitchApplication.AddEditProjectResource,
            value: lightSwitchApplication.ProjectResource
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjectResource,
            data: lightSwitchApplication.ProjectResource,
            value: lightSwitchApplication.Employee
        },
        EmployeeTemplate: {
            _$class: msls.ContentItem,
            _$name: "EmployeeTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditProjectResource,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "EmployeeTemplate",
            screen: lightSwitchApplication.AddEditProjectResource,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "EmployeeTemplate",
            screen: lightSwitchApplication.AddEditProjectResource,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjectResource
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProjectResource, {
        /// <field>
        /// Called when a new AddEditProjectResource screen is created.
        /// <br/>created(msls.application.AddEditProjectResource screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProjectResource],
        /// <field>
        /// Called before changes on an active AddEditProjectResource screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProjectResource screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProjectResource],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectResource().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectResource().findContentItem("columns"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectResource().findContentItem("Employee"); }],
        /// <field>
        /// Called after the EmployeeTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectResource().findContentItem("EmployeeTemplate"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectResource().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectResource().findContentItem("LastName"); }]
    });

    lightSwitchApplication.AddEditProjectResourceTask.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjectResourceTask
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProjectResourceTask,
            data: lightSwitchApplication.AddEditProjectResourceTask,
            value: lightSwitchApplication.AddEditProjectResourceTask
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditProjectResourceTask,
            data: lightSwitchApplication.AddEditProjectResourceTask,
            value: lightSwitchApplication.ProjectResourceTask
        },
        AssignedTo: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjectResourceTask,
            data: lightSwitchApplication.ProjectResourceTask,
            value: lightSwitchApplication.ProjectResource
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.AddEditProjectResourceTask,
            data: lightSwitchApplication.ProjectResource,
            value: lightSwitchApplication.ProjectResource
        },
        Employee_FirstName: {
            _$class: msls.ContentItem,
            _$name: "Employee_FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditProjectResourceTask,
            data: lightSwitchApplication.ProjectResource,
            value: String
        },
        Employee_LastName: {
            _$class: msls.ContentItem,
            _$name: "Employee_LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditProjectResourceTask,
            data: lightSwitchApplication.ProjectResource,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjectResourceTask
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProjectResourceTask, {
        /// <field>
        /// Called when a new AddEditProjectResourceTask screen is created.
        /// <br/>created(msls.application.AddEditProjectResourceTask screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProjectResourceTask],
        /// <field>
        /// Called before changes on an active AddEditProjectResourceTask screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProjectResourceTask screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProjectResourceTask],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectResourceTask().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectResourceTask().findContentItem("columns"); }],
        /// <field>
        /// Called after the AssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectResourceTask().findContentItem("AssignedTo"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectResourceTask().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Employee_FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectResourceTask().findContentItem("Employee_FirstName"); }],
        /// <field>
        /// Called after the Employee_LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectResourceTask().findContentItem("Employee_LastName"); }]
    });

    lightSwitchApplication.AddEditProjectRisk.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjectRisk
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProjectRisk,
            data: lightSwitchApplication.AddEditProjectRisk,
            value: lightSwitchApplication.AddEditProjectRisk
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditProjectRisk,
            data: lightSwitchApplication.AddEditProjectRisk,
            value: lightSwitchApplication.ProjectRisk
        },
        RiskTitle: {
            _$class: msls.ContentItem,
            _$name: "RiskTitle",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjectRisk,
            data: lightSwitchApplication.ProjectRisk,
            value: String
        },
        RiskDescription: {
            _$class: msls.ContentItem,
            _$name: "RiskDescription",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjectRisk,
            data: lightSwitchApplication.ProjectRisk,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjectRisk,
            data: lightSwitchApplication.ProjectRisk,
            value: lightSwitchApplication.ProjectRisk
        },
        Likelihood: {
            _$class: msls.ContentItem,
            _$name: "Likelihood",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectRisk,
            data: lightSwitchApplication.ProjectRisk,
            value: Number
        },
        Impact: {
            _$class: msls.ContentItem,
            _$name: "Impact",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectRisk,
            data: lightSwitchApplication.ProjectRisk,
            value: Number
        },
        ControlMeasures: {
            _$class: msls.ContentItem,
            _$name: "ControlMeasures",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjectRisk,
            data: lightSwitchApplication.ProjectRisk,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjectRisk
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProjectRisk, {
        /// <field>
        /// Called when a new AddEditProjectRisk screen is created.
        /// <br/>created(msls.application.AddEditProjectRisk screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProjectRisk],
        /// <field>
        /// Called before changes on an active AddEditProjectRisk screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProjectRisk screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProjectRisk],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectRisk().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectRisk().findContentItem("columns"); }],
        /// <field>
        /// Called after the RiskTitle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskTitle_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectRisk().findContentItem("RiskTitle"); }],
        /// <field>
        /// Called after the RiskDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RiskDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectRisk().findContentItem("RiskDescription"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectRisk().findContentItem("right"); }],
        /// <field>
        /// Called after the Likelihood content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Likelihood_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectRisk().findContentItem("Likelihood"); }],
        /// <field>
        /// Called after the Impact content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Impact_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectRisk().findContentItem("Impact"); }],
        /// <field>
        /// Called after the ControlMeasures content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ControlMeasures_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectRisk().findContentItem("ControlMeasures"); }]
    });

    lightSwitchApplication.AddEditProjectTask.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjectTask
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.AddEditProjectTask,
            value: lightSwitchApplication.AddEditProjectTask
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.AddEditProjectTask,
            value: lightSwitchApplication.ProjectTask
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectTask,
            value: lightSwitchApplication.ProjectTask
        },
        Title: {
            _$class: msls.ContentItem,
            _$name: "Title",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectTask,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectTask,
            value: String
        },
        Priority: {
            _$class: msls.ContentItem,
            _$name: "Priority",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectTask,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectTask,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectTask,
            value: lightSwitchApplication.ProjectTask
        },
        DueDate: {
            _$class: msls.ContentItem,
            _$name: "DueDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectTask,
            value: Date
        },
        DateStarted: {
            _$class: msls.ContentItem,
            _$name: "DateStarted",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectTask,
            value: Date
        },
        PercentCompleted: {
            _$class: msls.ContentItem,
            _$name: "PercentCompleted",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectTask,
            value: String
        },
        DateCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateCompleted",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectTask,
            value: Date
        },
        TaskResourcesTab: {
            _$class: msls.ContentItem,
            _$name: "TaskResourcesTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.AddEditProjectTask,
            value: lightSwitchApplication.AddEditProjectTask
        },
        ProjectResourceTasks1: {
            _$class: msls.ContentItem,
            _$name: "ProjectResourceTasks1",
            _$parentName: "TaskResourcesTab",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.AddEditProjectTask,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditProjectTask,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectResourceTask
                }
            }
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "ProjectResourceTasks1",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectResourceTask,
            value: lightSwitchApplication.ProjectResourceTask
        },
        AssignedTo_Employee_EmployeeImage: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo_Employee_EmployeeImage",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectResourceTask,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectResourceTask,
            value: lightSwitchApplication.ProjectResourceTask
        },
        AssignedTo_Employee_UserName: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo_Employee_UserName",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectResourceTask,
            value: String
        },
        ProjectResource_Employee_FirstName: {
            _$class: msls.ContentItem,
            _$name: "ProjectResource_Employee_FirstName",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectResourceTask,
            value: String
        },
        ProjectResource_Employee_LastName: {
            _$class: msls.ContentItem,
            _$name: "ProjectResource_Employee_LastName",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectResourceTask,
            value: String
        },
        ProjectResource_Employee_EMail: {
            _$class: msls.ContentItem,
            _$name: "ProjectResource_Employee_EMail",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditProjectTask,
            data: lightSwitchApplication.ProjectResourceTask,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjectTask
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProjectTask, {
        /// <field>
        /// Called when a new AddEditProjectTask screen is created.
        /// <br/>created(msls.application.AddEditProjectTask screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProjectTask],
        /// <field>
        /// Called before changes on an active AddEditProjectTask screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProjectTask screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProjectTask],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("left"); }],
        /// <field>
        /// Called after the Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Title_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("Title"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("Description"); }],
        /// <field>
        /// Called after the Priority content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Priority_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("Priority"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("Status"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("right"); }],
        /// <field>
        /// Called after the DueDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DueDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("DueDate"); }],
        /// <field>
        /// Called after the DateStarted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateStarted_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("DateStarted"); }],
        /// <field>
        /// Called after the PercentCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PercentCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("PercentCompleted"); }],
        /// <field>
        /// Called after the DateCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("DateCompleted"); }],
        /// <field>
        /// Called after the TaskResourcesTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TaskResourcesTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("TaskResourcesTab"); }],
        /// <field>
        /// Called after the ProjectResourceTasks1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectResourceTasks1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("ProjectResourceTasks1"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the AssignedTo_Employee_EmployeeImage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_Employee_EmployeeImage_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("AssignedTo_Employee_EmployeeImage"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("Group"); }],
        /// <field>
        /// Called after the AssignedTo_Employee_UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_Employee_UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("AssignedTo_Employee_UserName"); }],
        /// <field>
        /// Called after the ProjectResource_Employee_FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectResource_Employee_FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("ProjectResource_Employee_FirstName"); }],
        /// <field>
        /// Called after the ProjectResource_Employee_LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectResource_Employee_LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("ProjectResource_Employee_LastName"); }],
        /// <field>
        /// Called after the ProjectResource_Employee_EMail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectResource_Employee_EMail_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectTask().findContentItem("ProjectResource_Employee_EMail"); }]
    });

    lightSwitchApplication.BrowseClients.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseClients
        },
        ClientList: {
            _$class: msls.ContentItem,
            _$name: "ClientList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.BrowseClients,
            value: lightSwitchApplication.BrowseClients
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ClientList",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.BrowseClients,
            value: String
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "ClientList",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.BrowseClients,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseClients,
                _$entry: {
                    elementType: lightSwitchApplication.Client
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Client",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.Client,
            value: lightSwitchApplication.Client
        },
        ClientName: {
            _$class: msls.ContentItem,
            _$name: "ClientName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.Client,
            value: String
        },
        AddressLine2: {
            _$class: msls.ContentItem,
            _$name: "AddressLine2",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.Client,
            value: String
        },
        AddressLine3: {
            _$class: msls.ContentItem,
            _$name: "AddressLine3",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.Client,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.Client,
            value: String
        },
        Website: {
            _$class: msls.ContentItem,
            _$name: "Website",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseClients,
            data: lightSwitchApplication.Client,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseClients
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseClients, {
        /// <field>
        /// Called when a new BrowseClients screen is created.
        /// <br/>created(msls.application.BrowseClients screen)
        /// </field>
        created: [lightSwitchApplication.BrowseClients],
        /// <field>
        /// Called before changes on an active BrowseClients screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseClients screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseClients],
        /// <field>
        /// Called after the ClientList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientList_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("ClientList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("Search"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("Client"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ClientName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ClientName_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("ClientName"); }],
        /// <field>
        /// Called after the AddressLine2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine2_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("AddressLine2"); }],
        /// <field>
        /// Called after the AddressLine3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddressLine3_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("AddressLine3"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("Email"); }],
        /// <field>
        /// Called after the Website content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Website_postRender: [$element, function () { return new lightSwitchApplication.BrowseClients().findContentItem("Website"); }]
    });

    lightSwitchApplication.BrowseEmployees.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        },
        EmployeesList: {
            _$class: msls.ContentItem,
            _$name: "EmployeesList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: lightSwitchApplication.BrowseEmployees
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "EmployeesList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: String
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "EmployeesList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployees,
                _$entry: {
                    elementType: lightSwitchApplication.Employee
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        EMail: {
            _$class: msls.ContentItem,
            _$name: "EMail",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployees, {
        /// <field>
        /// Called when a new BrowseEmployees screen is created.
        /// <br/>created(msls.application.BrowseEmployees screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called before changes on an active BrowseEmployees screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployees screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called after the EmployeesList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeesList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("EmployeesList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Search"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("UserName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("LastName"); }],
        /// <field>
        /// Called after the EMail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EMail_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("EMail"); }]
    });

    lightSwitchApplication.BrowseMyProjectAssignments.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyProjectAssignments
        },
        ProjectList: {
            _$class: msls.ContentItem,
            _$name: "ProjectList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyProjectAssignments,
            data: lightSwitchApplication.BrowseMyProjectAssignments,
            value: lightSwitchApplication.BrowseMyProjectAssignments
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ProjectList",
            screen: lightSwitchApplication.BrowseMyProjectAssignments,
            data: lightSwitchApplication.BrowseMyProjectAssignments,
            value: String
        },
        Project: {
            _$class: msls.ContentItem,
            _$name: "Project",
            _$parentName: "ProjectList",
            screen: lightSwitchApplication.BrowseMyProjectAssignments,
            data: lightSwitchApplication.BrowseMyProjectAssignments,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyProjectAssignments,
                _$entry: {
                    elementType: lightSwitchApplication.Project
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Project",
            screen: lightSwitchApplication.BrowseMyProjectAssignments,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        ProjectReference: {
            _$class: msls.ContentItem,
            _$name: "ProjectReference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyProjectAssignments,
            data: lightSwitchApplication.Project,
            value: String
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyProjectAssignments,
            data: lightSwitchApplication.Project,
            value: String
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyProjectAssignments,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Client
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyProjectAssignments,
            data: lightSwitchApplication.Project,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyProjectAssignments,
            data: lightSwitchApplication.Project,
            value: Date
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyProjectAssignments,
            data: lightSwitchApplication.Project,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyProjectAssignments
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyProjectAssignments, {
        /// <field>
        /// Called when a new BrowseMyProjectAssignments screen is created.
        /// <br/>created(msls.application.BrowseMyProjectAssignments screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyProjectAssignments],
        /// <field>
        /// Called before changes on an active BrowseMyProjectAssignments screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyProjectAssignments screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyProjectAssignments],
        /// <field>
        /// Called after the ProjectList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyProjectAssignments().findContentItem("ProjectList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyProjectAssignments().findContentItem("Search"); }],
        /// <field>
        /// Called after the Project content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Project_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyProjectAssignments().findContentItem("Project"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyProjectAssignments().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ProjectReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectReference_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyProjectAssignments().findContentItem("ProjectReference"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyProjectAssignments().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyProjectAssignments().findContentItem("Client"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyProjectAssignments().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyProjectAssignments().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyProjectAssignments().findContentItem("Status"); }]
    });

    lightSwitchApplication.BrowseMyTasks.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyTasks
        },
        ProjectResourceTaskList: {
            _$class: msls.ContentItem,
            _$name: "ProjectResourceTaskList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyTasks,
            data: lightSwitchApplication.BrowseMyTasks,
            value: lightSwitchApplication.BrowseMyTasks
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ProjectResourceTaskList",
            screen: lightSwitchApplication.BrowseMyTasks,
            data: lightSwitchApplication.BrowseMyTasks,
            value: String
        },
        ProjectResourceTask: {
            _$class: msls.ContentItem,
            _$name: "ProjectResourceTask",
            _$parentName: "ProjectResourceTaskList",
            screen: lightSwitchApplication.BrowseMyTasks,
            data: lightSwitchApplication.BrowseMyTasks,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyTasks,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectResourceTask
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ProjectResourceTask",
            screen: lightSwitchApplication.BrowseMyTasks,
            data: lightSwitchApplication.ProjectResourceTask,
            value: lightSwitchApplication.ProjectResourceTask
        },
        ProjectTask_Project_ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectTask_Project_ProjectName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyTasks,
            data: lightSwitchApplication.ProjectResourceTask,
            value: String
        },
        ProjectTask_Title: {
            _$class: msls.ContentItem,
            _$name: "ProjectTask_Title",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyTasks,
            data: lightSwitchApplication.ProjectResourceTask,
            value: String
        },
        ProjectTask_DueDate: {
            _$class: msls.ContentItem,
            _$name: "ProjectTask_DueDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyTasks,
            data: lightSwitchApplication.ProjectResourceTask,
            value: Date
        },
        ProjectTask_Priority: {
            _$class: msls.ContentItem,
            _$name: "ProjectTask_Priority",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyTasks,
            data: lightSwitchApplication.ProjectResourceTask,
            value: String
        },
        ProjectTask_Status: {
            _$class: msls.ContentItem,
            _$name: "ProjectTask_Status",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyTasks,
            data: lightSwitchApplication.ProjectResourceTask,
            value: String
        },
        ProjectTask_PercentCompleted: {
            _$class: msls.ContentItem,
            _$name: "ProjectTask_PercentCompleted",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyTasks,
            data: lightSwitchApplication.ProjectResourceTask,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyTasks
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyTasks, {
        /// <field>
        /// Called when a new BrowseMyTasks screen is created.
        /// <br/>created(msls.application.BrowseMyTasks screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyTasks],
        /// <field>
        /// Called before changes on an active BrowseMyTasks screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyTasks screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyTasks],
        /// <field>
        /// Called after the ProjectResourceTaskList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectResourceTaskList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTasks().findContentItem("ProjectResourceTaskList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTasks().findContentItem("Search"); }],
        /// <field>
        /// Called after the ProjectResourceTask content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectResourceTask_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTasks().findContentItem("ProjectResourceTask"); }],
        /// <field>
        /// Called to render the RowTemplate content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_render: [$element, function () { return new lightSwitchApplication.BrowseMyTasks().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ProjectTask_Project_ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectTask_Project_ProjectName_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTasks().findContentItem("ProjectTask_Project_ProjectName"); }],
        /// <field>
        /// Called after the ProjectTask_Title content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectTask_Title_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTasks().findContentItem("ProjectTask_Title"); }],
        /// <field>
        /// Called after the ProjectTask_DueDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectTask_DueDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTasks().findContentItem("ProjectTask_DueDate"); }],
        /// <field>
        /// Called after the ProjectTask_Priority content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectTask_Priority_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTasks().findContentItem("ProjectTask_Priority"); }],
        /// <field>
        /// Called after the ProjectTask_Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectTask_Status_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTasks().findContentItem("ProjectTask_Status"); }],
        /// <field>
        /// Called after the ProjectTask_PercentCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectTask_PercentCompleted_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyTasks().findContentItem("ProjectTask_PercentCompleted"); }]
    });

    lightSwitchApplication.BrowseProjects.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjects
        },
        ProjectList: {
            _$class: msls.ContentItem,
            _$name: "ProjectList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.BrowseProjects,
            value: lightSwitchApplication.BrowseProjects
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "ProjectList",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.BrowseProjects,
            value: String
        },
        Projects: {
            _$class: msls.ContentItem,
            _$name: "Projects",
            _$parentName: "ProjectList",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.BrowseProjects,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProjects,
                _$entry: {
                    elementType: lightSwitchApplication.Project
                }
            }
        },
        ProjectsTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProjectsTemplate",
            _$parentName: "Projects",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Project
        },
        ProjectReference: {
            _$class: msls.ContentItem,
            _$name: "ProjectReference",
            _$parentName: "ProjectsTemplate",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.Project,
            value: String
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "ProjectsTemplate",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.Project,
            value: String
        },
        Client: {
            _$class: msls.ContentItem,
            _$name: "Client",
            _$parentName: "ProjectsTemplate",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.Project,
            value: lightSwitchApplication.Client
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "ProjectsTemplate",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.Project,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "ProjectsTemplate",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.Project,
            value: Date
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "ProjectsTemplate",
            screen: lightSwitchApplication.BrowseProjects,
            data: lightSwitchApplication.Project,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjects
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProjects, {
        /// <field>
        /// Called when a new BrowseProjects screen is created.
        /// <br/>created(msls.application.BrowseProjects screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProjects],
        /// <field>
        /// Called before changes on an active BrowseProjects screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProjects screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProjects],
        /// <field>
        /// Called after the ProjectList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("ProjectList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("Search"); }],
        /// <field>
        /// Called after the Projects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Projects_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("Projects"); }],
        /// <field>
        /// Called after the ProjectsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("ProjectsTemplate"); }],
        /// <field>
        /// Called after the ProjectReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectReference_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("ProjectReference"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the Client content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Client_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("Client"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjects().findContentItem("Status"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        MenuTab: {
            _$class: msls.ContentItem,
            _$name: "MenuTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        AllProjects: {
            _$class: msls.ContentItem,
            _$name: "AllProjects",
            _$parentName: "MenuTab",
            screen: lightSwitchApplication.Home
        },
        Clients: {
            _$class: msls.ContentItem,
            _$name: "Clients",
            _$parentName: "MenuTab",
            screen: lightSwitchApplication.Home
        },
        MyProjects: {
            _$class: msls.ContentItem,
            _$name: "MyProjects",
            _$parentName: "MenuTab",
            screen: lightSwitchApplication.Home
        },
        MyTasks: {
            _$class: msls.ContentItem,
            _$name: "MyTasks",
            _$parentName: "MenuTab",
            screen: lightSwitchApplication.Home
        },
        SettingsTab: {
            _$class: msls.ContentItem,
            _$name: "SettingsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "SettingsTab",
            screen: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the MenuTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MenuTab_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MenuTab"); }],
        /// <field>
        /// Called after the AllProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllProjects_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("AllProjects"); }],
        /// <field>
        /// Called after the Clients content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Clients_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Clients"); }],
        /// <field>
        /// Called after the MyProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyProjects_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MyProjects"); }],
        /// <field>
        /// Called after the MyTasks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyTasks_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MyTasks"); }],
        /// <field>
        /// Called after the SettingsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SettingsTab_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("SettingsTab"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Employees"); }]
    });

    lightSwitchApplication.MobileHome.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        AllProjects: {
            _$class: msls.ContentItem,
            _$name: "AllProjects",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        Clients: {
            _$class: msls.ContentItem,
            _$name: "Clients",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        MyProjects: {
            _$class: msls.ContentItem,
            _$name: "MyProjects",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        MyTasks: {
            _$class: msls.ContentItem,
            _$name: "MyTasks",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MobileHome, {
        /// <field>
        /// Called when a new MobileHome screen is created.
        /// <br/>created(msls.application.MobileHome screen)
        /// </field>
        created: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called before changes on an active MobileHome screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MobileHome screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Group"); }],
        /// <field>
        /// Called after the AllProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllProjects_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("AllProjects"); }],
        /// <field>
        /// Called after the Clients content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Clients_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Clients"); }],
        /// <field>
        /// Called after the MyProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyProjects_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("MyProjects"); }],
        /// <field>
        /// Called after the MyTasks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyTasks_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("MyTasks"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Employees"); }]
    });

}(msls.application));