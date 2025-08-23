export class activity
{
    date = ""
    description = ""
    location = ""
    activity_code = ""
    people_present = 1
    time_spent = 1

    constructor(date, description, location, activity_code, people_present, time_spent)
    {
        this.date = date 
    }

    to_string() {
        return this.date + "," +
                this.description + "," + 
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

    constructor (date)
    {
        this.date = date
        this.activities.push(new activity(this.date))
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

    calculate_hours()
    {
        this.total_hours = 0;
        for (let index = 0; index < this.activities.length; index++) {
            this.total_hours += this.activities[index].time_spent;
        }
    }
}