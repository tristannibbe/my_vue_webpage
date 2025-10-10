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
    total_hours = 0;
    activities = []
    display = true
    line_return = "\r\n"
    date = ""

    constructor (year, month, day)
    {
        this.date = new DateWrapper(year, month, day)
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

    update_date(event)
    {
        this.date.update(event.target.valueAsDate)
        console.log(event.target.valueAsDate)
    }

    to_string()
    {
        let csvContent = "";

        for (let index = 0; index < this.activities.length; index++)
        {
            csvContent += this.date.get_str() + "," + this.activities[index].to_string() + this.line_return;
        }

        return csvContent
    }
}

class DateWrapper
{
    date = new Date()
    date_bind = ""

    constructor(year, month, day)
    {
        this.date = new Date(year, month, day)
        this.date_bind = this.get_raw()
    }

    update(date_val)
    {
        this.date = new Date(date_val)
    }

    get_raw()
    {
        //format it like YYYY-MM-DD so html picker can understand
        var day = ("0" + this.date.getDate()).slice(-2)
        var month = ("0" + (this.date.getMonth() + 1)).slice(-2)
        return this.date.getFullYear() + "-" + (month) + "-" + (day)
    }

    get_str()
    {
        var year = this.date.getFullYear()
        //months are 0 indexed
        var month = this.date.getMonth() + 1
        var day = this.date.getDate()

        //format it like MM/DD/YYYY for output
        return month + "/" + day + "/" + year.toString().substring(2)
    }
}

class ActivityCode
{
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


