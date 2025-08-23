export class activity
{
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

    date = ""
    description = ""
    location = ""
    activity_code = ""
    people_present = 1
    time_spent = 1
}