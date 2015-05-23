﻿window.myapp=msls.application,function(n){function f(n){i.call(this,n)}function s(n){i.call(this,n)}function e(n){i.call(this,n)}function o(n){i.call(this,n)}function h(n){i.call(this,n)}function l(n){i.call(this,n)}function c(n){i.call(this,n)}function a(n){i.call(this,n)}function v(n){i.call(this,n)}function y(n){p.call(this,n)}function d(){w.call(this)}var i=msls.Entity,p=msls.DataService,w=msls.DataWorkspace,r=msls._defineEntity,b=msls._defineDataService,k=msls._defineDataWorkspace,t=msls.DataServiceQuery,u=msls._toODataString;msls._addToNamespace("msls.application",{Project:r(f,[{name:"Id",type:Number},{name:"ProjectReference",type:String},{name:"ProjectName",type:String},{name:"Description",type:String},{name:"StartDate",type:Date},{name:"EndDate",type:Date},{name:"Prority",type:String},{name:"Status",type:String},{name:"Budget",type:String},{name:"ProjectTasks",kind:"collection",elementType:s},{name:"ProjectResources",kind:"collection",elementType:e},{name:"ProjectManager",kind:"reference",type:o},{name:"Client",kind:"reference",type:c},{name:"ProjectRisks",kind:"collection",elementType:v},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),ProjectTask:r(s,[{name:"Id",type:Number},{name:"Title",type:String},{name:"Description",type:String},{name:"DueDate",type:Date},{name:"Priority",type:String},{name:"Status",type:String},{name:"PercentCompleted",type:String},{name:"DateStarted",type:Date},{name:"DateCompleted",type:Date},{name:"Project",kind:"reference",type:f},{name:"ProjectResourceTasks",kind:"collection",elementType:h},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),ProjectResource:r(e,[{name:"Id",type:Number},{name:"Employee",kind:"reference",type:o},{name:"Project",kind:"reference",type:f},{name:"ProjectResourceTasks",kind:"collection",elementType:h},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),Employee:r(o,[{name:"Id",type:Number},{name:"UserName",type:String},{name:"FirstName",type:String},{name:"LastName",type:String},{name:"Description",type:String},{name:"Email",type:String},{name:"EmployeeImage",type:String},{name:"ProjectResources",kind:"collection",elementType:e},{name:"Projects",kind:"collection",elementType:f},{name:"EmployeeSkillsCollection",kind:"collection",elementType:l},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),ProjectResourceTask:r(h,[{name:"Id",type:Number},{name:"AssignedTo",kind:"reference",type:e},{name:"ProjectTask",kind:"reference",type:s},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),EmployeeSkills:r(l,[{name:"Id",type:Number},{name:"Skill",type:String},{name:"SkillYears",type:Number},{name:"Employee",kind:"reference",type:o},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),Client:r(c,[{name:"Id",type:Number},{name:"ClientName",type:String},{name:"AddressLine1",type:String},{name:"AddressLine2",type:String},{name:"AddressLine3",type:String},{name:"AddressLine4",type:String},{name:"AddressLine5",type:String},{name:"PostCode",type:String},{name:"Email",type:String},{name:"Phone1",type:String},{name:"Phone2",type:String},{name:"Fax",type:String},{name:"Website",type:String},{name:"Projects",kind:"collection",elementType:f},{name:"ClientContacts",kind:"collection",elementType:a},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),ClientContact:r(a,[{name:"Id",type:Number},{name:"ContactName",type:String},{name:"ContactJobDescription",type:String},{name:"Email",type:String},{name:"Phone",type:String},{name:"Client",kind:"reference",type:c},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),ProjectRisk:r(v,[{name:"Id",type:Number},{name:"RiskTitle",type:String},{name:"RiskDescription",type:String},{name:"ControlMeasures",type:String},{name:"Likelihood",type:Number},{name:"Impact",type:Number},{name:"Project",kind:"reference",type:f},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),ApplicationData:b(y,n.rootUri+"/ApplicationData.svc",[{name:"Projects",elementType:f},{name:"ProjectTasks",elementType:s},{name:"ProjectResources",elementType:e},{name:"Employees",elementType:o},{name:"ProjectResourceTasks",elementType:h},{name:"EmployeeSkills",elementType:l},{name:"Clients",elementType:c},{name:"ClientContacts",elementType:a},{name:"ProjectRisks",elementType:v}],[{name:"Projects_SingleOrDefault",value:function(i){return new t({_entitySet:this.Projects},n.rootUri+"/ApplicationData.svc/Projects(Id="+u(i,"Int32?")+")")}},{name:"ProjectTasks_SingleOrDefault",value:function(i){return new t({_entitySet:this.ProjectTasks},n.rootUri+"/ApplicationData.svc/ProjectTasks(Id="+u(i,"Int32?")+")")}},{name:"ProjectResources_SingleOrDefault",value:function(i){return new t({_entitySet:this.ProjectResources},n.rootUri+"/ApplicationData.svc/ProjectResources(Id="+u(i,"Int32?")+")")}},{name:"Employees_SingleOrDefault",value:function(i){return new t({_entitySet:this.Employees},n.rootUri+"/ApplicationData.svc/Employees(Id="+u(i,"Int32?")+")")}},{name:"ProjectResourceTasks_SingleOrDefault",value:function(i){return new t({_entitySet:this.ProjectResourceTasks},n.rootUri+"/ApplicationData.svc/ProjectResourceTasks(Id="+u(i,"Int32?")+")")}},{name:"MyProjectAssignments",value:function(){return new t({_entitySet:this.Projects},n.rootUri+"/ApplicationData.svc/MyProjectAssignments()",{})}},{name:"MyTasks",value:function(){return new t({_entitySet:this.ProjectResourceTasks},n.rootUri+"/ApplicationData.svc/MyTasks()",{})}},{name:"EmployeeSkills_SingleOrDefault",value:function(i){return new t({_entitySet:this.EmployeeSkills},n.rootUri+"/ApplicationData.svc/EmployeeSkills(Id="+u(i,"Int32?")+")")}},{name:"Clients_SingleOrDefault",value:function(i){return new t({_entitySet:this.Clients},n.rootUri+"/ApplicationData.svc/Clients(Id="+u(i,"Int32?")+")")}},{name:"ClientContacts_SingleOrDefault",value:function(i){return new t({_entitySet:this.ClientContacts},n.rootUri+"/ApplicationData.svc/ClientContacts(Id="+u(i,"Int32?")+")")}},{name:"ProjectRisks_SingleOrDefault",value:function(i){return new t({_entitySet:this.ProjectRisks},n.rootUri+"/ApplicationData.svc/ProjectRisks(Id="+u(i,"Int32?")+")")}}]),DataWorkspace:k(d,[{name:"ApplicationData",type:y}])})}(msls.application),function(n){function f(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditClient",t)}function e(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditClientContact",t)}function o(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditEmployee",t)}function s(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditEmployeeImage",t)}function h(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditEmployeeSkills",t)}function c(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditProject",t)}function l(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditProjectResource",t)}function a(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditProjectResourceTask",t)}function v(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditProjectRisk",t)}function y(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditProjectTask",t)}function p(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseClients",t)}function w(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseEmployees",t)}function b(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseMyProjectAssignments",t)}function k(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseMyTasks",t)}function d(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseProjects",t)}function g(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"Home",t)}function nt(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"MobileHome",t)}var i=msls.Screen,r=msls._defineScreen,tt=msls.DataServiceQuery,t=msls._toODataString,u=msls._defineShowScreen;msls._addToNamespace("msls.application",{AddEditClient:r(f,[{name:"Client",kind:"local",type:n.Client},{name:"Projects",kind:"collection",elementType:n.Project,getNavigationProperty:function(){return this.owner.Client?this.owner.Client.details.properties.Projects:null},appendQuery:function(){return this}},{name:"ClientContacts",kind:"collection",elementType:n.ClientContact,getNavigationProperty:function(){return this.owner.Client?this.owner.Client.details.properties.ClientContacts:null},appendQuery:function(){return this}}],[]),AddEditClientContact:r(e,[{name:"ClientContact",kind:"local",type:n.ClientContact}],[]),AddEditEmployee:r(o,[{name:"Employee",kind:"local",type:n.Employee},{name:"EmployeeSkillsCollection",kind:"collection",elementType:n.EmployeeSkills,getNavigationProperty:function(){return this.owner.Employee?this.owner.Employee.details.properties.EmployeeSkillsCollection:null},appendQuery:function(){return this}}],[]),AddEditEmployeeImage:r(s,[{name:"Employee",kind:"local",type:n.Employee}],[]),AddEditEmployeeSkills:r(h,[{name:"EmployeeSkills",kind:"local",type:n.EmployeeSkills}],[]),AddEditProject:r(c,[{name:"Project",kind:"local",type:n.Project},{name:"ProjectTasks",kind:"collection",elementType:n.ProjectTask,getNavigationProperty:function(){return this.owner.Project?this.owner.Project.details.properties.ProjectTasks:null},appendQuery:function(){return this}},{name:"ProjectResources",kind:"collection",elementType:n.ProjectResource,getNavigationProperty:function(){return this.owner.Project?this.owner.Project.details.properties.ProjectResources:null},appendQuery:function(){return this.expand("Employee")}},{name:"ProjectRisks",kind:"collection",elementType:n.ProjectRisk,getNavigationProperty:function(){return this.owner.Project?this.owner.Project.details.properties.ProjectRisks:null},appendQuery:function(){return this}}],[]),AddEditProjectResource:r(l,[{name:"ProjectResource",kind:"local",type:n.ProjectResource}],[]),AddEditProjectResourceTask:r(a,[{name:"ProjectResourceTask",kind:"local",type:n.ProjectResourceTask}],[]),AddEditProjectRisk:r(v,[{name:"ProjectRisk",kind:"local",type:n.ProjectRisk}],[]),AddEditProjectTask:r(y,[{name:"ProjectTask",kind:"local",type:n.ProjectTask},{name:"ProjectResourceTasks",kind:"collection",elementType:n.ProjectResourceTask,getNavigationProperty:function(){return this.owner.ProjectTask?this.owner.ProjectTask.details.properties.ProjectResourceTasks:null},appendQuery:function(){return this.expand("AssignedTo").expand("AssignedTo.Employee")}}],[]),BrowseClients:r(p,[{name:"Clients",kind:"collection",elementType:n.Client,createQuery:function(n){return this.dataWorkspace.ApplicationData.Clients.filter("((((("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", ClientName)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", AddressLine1)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", AddressLine2)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", AddressLine3)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", AddressLine4)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", AddressLine5)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", PostCode)")+"")}},{name:"Search",kind:"local",type:String}],[]),BrowseEmployees:r(w,[{name:"Employees",kind:"collection",elementType:n.Employee,createQuery:function(n){return this.dataWorkspace.ApplicationData.Employees.filter("(("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", FirstName)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", LastName)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", Description)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", UserName)")+"")}},{name:"Search",kind:"local",type:String}],[]),BrowseMyProjectAssignments:r(b,[{name:"MyProjectAssignments",kind:"collection",elementType:n.Project,createQuery:function(n){return this.dataWorkspace.ApplicationData.MyProjectAssignments().filter("("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", ProjectName)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", ProjectReference)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", Description)")+"").expand("Client")}},{name:"Search",kind:"local",type:String}],[]),BrowseMyTasks:r(k,[{name:"MyTasks",kind:"collection",elementType:n.ProjectResourceTask,createQuery:function(n){return this.dataWorkspace.ApplicationData.MyTasks().filter(""+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", ProjectTask/Title)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", ProjectTask/Description)")+"").expand("ProjectTask").expand("ProjectTask.Project")}},{name:"Search",kind:"local",type:String}],[]),BrowseProjects:r(d,[{name:"Projects",kind:"collection",elementType:n.Project,createQuery:function(n){return this.dataWorkspace.ApplicationData.Projects.filter("("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", Description)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", ProjectName)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", ProjectReference)")+"").expand("Client")}},{name:"Search",kind:"local",type:String}],[]),Home:r(g,[],[]),MobileHome:r(nt,[],[]),showAddEditClient:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditClient",r,i)}),showAddEditClientContact:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditClientContact",r,i)}),showAddEditEmployee:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditEmployee",r,i)}),showAddEditEmployeeImage:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditEmployeeImage",r,i)}),showAddEditEmployeeSkills:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditEmployeeSkills",r,i)}),showAddEditProject:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditProject",r,i)}),showAddEditProjectResource:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditProjectResource",r,i)}),showAddEditProjectResourceTask:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditProjectResourceTask",r,i)}),showAddEditProjectRisk:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditProjectRisk",r,i)}),showAddEditProjectTask:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditProjectTask",r,i)}),showBrowseClients:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseClients",i,t)}),showBrowseEmployees:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseEmployees",i,t)}),showBrowseMyProjectAssignments:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseMyProjectAssignments",i,t)}),showBrowseMyTasks:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseMyTasks",i,t)}),showBrowseProjects:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseProjects",i,t)}),showHome:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("Home",i,t)}),showMobileHome:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("MobileHome",i,t)})})}(msls.application),myapp.AddEditClient.created=function(n){var t;n.Client.ClientName!==undefined?(t=n.Client.ClientName,n.details.displayName="Edit Client: "+t):n.details.displayName="Add New Client",myapp.permissions["LightSwitchApplication:CanEditClients"]?(n.findContentItem("DetailsTab").isReadOnly=!1,n.findContentItem("ClientContactsTab").isReadOnly=!1,n.findContentItem("ProjectsTab").isReadOnly=!1):(n.findContentItem("DetailsTab").isReadOnly=!0,n.findContentItem("ClientContactsTab").isReadOnly=!0,n.findContentItem("ProjectsTab").isReadOnly=!0)},myapp.AddEditClientContact.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditClientContacts"]?!1:!0},myapp.AddEditEmployee.created=function(n){var t,i;n.Employee.LastName!==undefined?(t=n.Employee.LastName,i=n.Employee.FirstName,n.details.displayName="Edit Employee: "+i+" "+t):n.details.displayName="Add New Employee",myapp.permissions["LightSwitchApplication:CanEditEmployees"]?(n.findContentItem("DetailsTab").isReadOnly=!1,n.findContentItem("EmployeeSkillsTab").isReadOnly=!1):(n.findContentItem("DetailsTab").isReadOnly=!0,n.findContentItem("EmployeeSkillsTab").isReadOnly=!0)},myapp.AddEditEmployeeImage.EmployeeImage_render=function(n,t){createImageUploader(n,t,"max-width: 300px; max-height: 300px")},myapp.AddEditEmployeeImage.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditEmployees"]?!1:!0},myapp.AddEditEmployeeSkills.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditEmployeesSkills"]?!1:!0},myapp.AddEditProject.created=function(n){var t;n.Project.ProjectName!==undefined?(t=n.Project.ProjectName,n.details.displayName="Edit Project: "+t):n.details.displayName="Add New Project",myapp.permissions["LightSwitchApplication:CanEditProjects"]?(n.findContentItem("DetailsTab").isReadOnly=!1,n.findContentItem("ProjectTasksTab").isReadOnly=!1,n.findContentItem("ProjectResourcesTab").isReadOnly=!1,n.findContentItem("ProjectRisksTab").isReadOnly=!1):(n.findContentItem("DetailsTab").isReadOnly=!0,n.findContentItem("ProjectTasksTab").isReadOnly=!0,n.findContentItem("ProjectResourcesTab").isReadOnly=!0,n.findContentItem("ProjectRisksTab").isReadOnly=!0)},myapp.AddEditProjectResource.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditProjectResources"]?!1:!0},myapp.AddEditProjectResourceTask.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditProjectResourceTasks"]?!1:!0},myapp.AddEditProjectRisk.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditProjectRisks"]?!1:!0},myapp.AddEditProjectTask.created=function(n){var t;n.ProjectTask.Title!==undefined?(t=n.ProjectTask.Title,n.details.displayName="Edit Task: "+t):n.details.displayName="Add New Task",myapp.permissions["LightSwitchApplication:CanEditProjectTasks"]?(n.findContentItem("DetailsTab").isReadOnly=!1,n.findContentItem("TaskResourcesTab").isReadOnly=!1):(n.findContentItem("DetailsTab").isReadOnly=!0,n.findContentItem("TaskResourcesTab").isReadOnly=!0)},myapp.BrowseClients.created=function(n){n.findContentItem("AddClient").isEnabled=myapp.permissions["LightSwitchApplication:CanEditClients"]?!0:!1},myapp.BrowseEmployees.created=function(n){n.findContentItem("AddEmployee").isEnabled=myapp.permissions["LightSwitchApplication:CanEditEmployees"]?!0:!1},myapp.BrowseProjects.created=function(n){n.findContentItem("AddProject").isEnabled=myapp.permissions["LightSwitchApplication:CanEditProjects"]?!0:!1},myapp.Home.AllProjects_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/AllProjects.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.MyProjects_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MyProjects.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.MyTasks_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MyTasks.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.Clients_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Clients.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.Employees_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Employees.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.created=function(){$.getJSON("../UserPermissions/UserPermissions/",function(n){myapp.permissions=n})},myapp.MobileHome.AllProjects_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileAllProjects.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.Clients_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileClients.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.MyProjects_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileMyProjects.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.MyTasks_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileMyTasks.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.Employees_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileEmployees.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.created=function(){$.getJSON("../UserPermissions/UserPermissions/",function(n){myapp.permissions=n})};