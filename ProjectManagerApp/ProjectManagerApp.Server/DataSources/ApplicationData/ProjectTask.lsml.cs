using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class ProjectTask
    {
        partial void DueDate_Validate(EntityValidationResultsBuilder results)
        {
            if (this.DueDate != null & this.Project.StartDate != null)
            {
                if (this.DueDate < this.Project.StartDate)
                {
                    results.AddPropertyError("A task due date cannot be set to before the project start date");
                }
            }

            if (this.DueDate != null & this.Project.EndDate != null)
            {
                if (this.DueDate > this.Project.EndDate)
                {
                    results.AddPropertyError("A task due date cannot be set to beyond the project end date");
                }
            }
        }
    }
}
