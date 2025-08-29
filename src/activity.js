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



    to_string() {
        return this.description + "," + 
                this.location + "," +
                this.activity_code + "," + 
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

export class ActivityCodeList {
    code_list = []

    constructor()
    {
        this.code_list.push(new ActivityCode("SARB", "S"))
        this.code_list.push(new ActivityCode("Meeting", "M"))
        this.code_list.push(new ActivityCode("Training", "T"))
        this.code_list.push(new ActivityCode("Outreach Event", "OE"))
        this.code_list.push(new ActivityCode("Street Outreach", "SO"))
        this.code_list.push(new ActivityCode("Youth Event", "YE"))
        this.code_list.push(new ActivityCode("Case Management", "CM"))
        this.code_list.push(new ActivityCode("Life Skills", "LS"))
        this.code_list.push(new ActivityCode("Admin", "A"))
        this.code_list.push(new ActivityCode("Social Media", "SM"))
        this.code_list.push(new ActivityCode("Other", "OT"))
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