using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using LightSwitchApplication.UserCode;

namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void MyProjectAssignments_PreprocessQuery(ref IQueryable<Project> query)
        {
            query = from project in query
                    where project.ProjectResources.Any(r => r.Employee.UserName == this.Application.User.Name)
                    select project;
        }

        partial void MyTasks_PreprocessQuery(ref IQueryable<ProjectResourceTask> query)
        {
            query = from task in query
                    where task.AssignedTo.Employee.UserName == this.Application.User.Name
                    select task;
        }

        private void SendEmail(List<string> mailTos, string subject, string message)
        {
            if (System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable())
            {
                if (mailTos.Count() != 0)
                {
                    MailHelper mailHelper = new MailHelper();

                    mailHelper.SendMail(mailTos, subject, message);
                }
            }
        }

        partial void ProjectResources_Inserted(ProjectResource entity)
        {
            if (entity.Employee.Email != string.Empty)
            {
                string subject = "New Project Assignment!";

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>You have been assigned to the following project:<br></br>Project Reference: {2}.<br></br>Project Name: {3}.<br></br>Project Description: {4}.<br></br>The project starts on: {5} and is set to finish on {6}</p></body></html>", entity.Employee.FirstName, entity.Employee.LastName, entity.Project.ProjectReference, entity.Project.ProjectName, entity.Project.Description, entity.Project.StartDate, entity.Project.EndDate);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.Employee.Email);

                SendEmail(mailTos, subject, message);
            }
        }

        partial void ProjectResourceTasks_Inserted(ProjectResourceTask entity)
        {
            if (entity.AssignedTo.Employee.Email != string.Empty)
            {
                string subject = "New Project Task Assignment!";

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>You have been assigned to the following task within project {2} - {3}:<br></br>Task Title: {4}<br></br></p>Task Due Date: {5}<br></br>Task Priority: {6}<br></br></p></p></body></html>", entity.AssignedTo.Employee.FirstName, entity.AssignedTo.Employee.LastName, entity.ProjectTask.Project.ProjectReference, entity.ProjectTask.Project.ProjectName, entity.ProjectTask.Title, entity.ProjectTask.DueDate, entity.ProjectTask.Priority);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.AssignedTo.Employee.Email);

                SendEmail(mailTos, subject, message);
            }
        }

        partial void ClientContacts_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditClientContacts);
        }

        partial void ClientContacts_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditClientContacts);
        }

        partial void ClientContacts_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditClientContacts);
        }

        partial void Clients_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditClients);
        }

        partial void Clients_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditClients);
        }

        partial void Clients_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditClients);
        }

        partial void Employees_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void EmployeeSkills_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeesSkills);
        }

        partial void EmployeeSkills_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeesSkills);
        }

        partial void EmployeeSkills_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployeesSkills);
        }

        partial void ProjectResources_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjectResources);
        }

        partial void ProjectResources_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjectResources);
        }

        partial void ProjectResources_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjectResources);
        }

        partial void ProjectResourceTasks_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjectResourceTasks);
        }

        partial void ProjectResourceTasks_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjectResourceTasks);
        }

        partial void ProjectResourceTasks_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjectResourceTasks);
        }

        partial void ProjectRisks_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjectRisks);
        }

        partial void ProjectRisks_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjectRisks);
        }

        partial void ProjectRisks_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjectRisks);
        }

        partial void Projects_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjects);
        }

        partial void Projects_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjects);
        }

        partial void Projects_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjects);
        }

        partial void ProjectTasks_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjectTasks);
        }

        partial void ProjectTasks_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjectTasks);
        }

        partial void ProjectTasks_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditProjectTasks);
        }

        partial void Projects_Validate(Project entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.EndDate != null & entity.StartDate != null)
            {
                if (entity.EndDate < entity.StartDate)
                {
                    results.AddEntityError("A Project cannot be finished before it has started");
                }
            }
        }

        partial void ProjectTasks_Validate(ProjectTask entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.DateCompleted != null & entity.DateStarted != null)
            {
                if (entity.DateCompleted < entity.DateStarted)
                {
                    results.AddEntityError("A Project Task cannot be completed before it has been started");
                }
            }
        }
    }
}
