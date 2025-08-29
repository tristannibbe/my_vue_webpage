export class activity
{
    description = "Generic Description"
    location = "Oxnard"
    activity_code = ""
    people_present = 1
    time_spent = 1

    constructor()
    {
    }

    get_activity_code_str()
    {
        var code_str = "";
        ActivityCodeList.forEach((code) =>{
            if (code.code == this.activity_code.code)
            {
                code_str += this.activity_code.code + ","
            }
            else
            {
                code_str += ","
            }
        });
        return code_str
    }

    to_string() {
        return this.description + "," + 
                this.location + "," +
                this.get_activity_code_str() + 
                this.people_present + "," +
                this.time_spent + ","
    }
}

export class day_of_activities
{
    date = ""
    total_hours = 0;
    activities = []
    element = ""
    display = true
    line_return = "\r\n"

    constructor (date)
    {
        this.date = date
        this.add_entry()
    }

    add_entry() {
        this.activities.push(new activity(this.date))
        this.calculate_hours()
    }

    delete_entry(entry)
    {
        this.activities = this.activities.filter(function(item)
        {
            return item !== entry
        })
        this.calculate_hours()
    }

    toggle_row()
    {
        this.display = !this.display
    }

    calculate_hours()
    {
        this.total_hours = 0;
        for (let index = 0; index < this.activities.length; index++) {
            this.total_hours += this.activities[index].time_spent;
        }
    }

    get_date_string_format()
    {
        return this.date.getMonth() + "/" + this.date.getDay() + "/" + this.date.getFullYear()
    }

    update_date()
    {
        this.date = new Date(this.date_str)
    }

    to_string() {
        let csvContent = "";

        for (let index = 0; index < this.activities.length; index++)
        {
            csvContent += this.date + "," + this.activities[index].to_string() + this.line_return;
        }

        return csvContent
    }
}

class ActivityCode{
    name = ""
    code = ""

    constructor(name, code)
    {
        this.name = name
        this.code = code
    }

    get_full_name()
    {
        return this.name + " ("  + this.code + ")"
    }
}

export const ActivityCodeList =
[    
    new ActivityCode("SARB", "S"),
    new ActivityCode("Meeting", "M"),
    new ActivityCode("Training", "T"),
    new ActivityCode("Outreach Event", "OE"),
    new ActivityCode("Street Outreach", "SO"),
    new ActivityCode("Youth Event", "YE"),
    new ActivityCode("Case Management", "CM"),
    new ActivityCode("Life Skills", "LS"),
    new ActivityCode("Admin", "A"),
    new ActivityCode("Social Media", "SM"),
    new ActivityCode("Other", "OT"),
]


