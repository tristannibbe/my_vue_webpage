<script>
import { activity, day_of_activities } from './activity'

export default
{
    data()
    {
        return{
            days_of_activities: [new day_of_activities("2025-06-01"), new day_of_activities("2025-06-02")],
        }
    },
    methods: {
        construct_csv()
        {
            console.log("enter")
            let csvContent = "data:text/csv;charset=utf-8,";

            for (let index = 0; index < this.activities.length; index++)
            {
                csvContent += this.activities[index].to_string() + "\r\n";
            }

            var encodedUri = encodeURI(csvContent);
            window.open(encodedUri);
        },

        add_new_day()
        {
            this.days_of_activities.push(new day_of_activities("2025-06-03"))
        },  

        toggle_row()
        {
            console.log("toggle_row enter")
            var elements = document.querySelectorAll(".accordion")

            elements.forEach(function(element)
            {
                element.classList.toggle("collapse")   
            })
        }
    }
}
</script>

<template>
<h1>Caila's Page</h1>
<table>


    <div class="accordion_container" v-for="day in days_of_activities">
        <tr class="accordion_header">
            <td><input type="date" v-model="day.date" placeholder="Enter Date"/></td>
            <td class="medium_cell" @click="toggle_row"></td>
            <td class="wide_cell" @click="toggle_row"></td>
            <td class="single_character_cell" @click="toggle_row"></td>
            <td class="medium_cell" @click="toggle_row"></td>
            <td class="medium_cell" @click="toggle_row"><div>Total:{{ day.total_hours }}</div></td>
            <td><button @click="day.add_entry()">+</button></td>
        </tr>

        <tr class="accordion">
            <th></th>
            <th class="medium_cell">Location</th>
            <th class="wide_cell">Description</th>
            <th>Code</th>
            <th class="medium_cell">Participants</th>
            <th class="medium_cell">Hours</th>
            <th></th>
        </tr>

        <tr class="accordion" v-for="activity in day.activities">
            <td></td>

            <td class="medium_cell"><input class="medium_cell" v-model="activity.location" placeholder="Enter City" /></td>
            <td class="wide_cell"><input class="wide_cell" v-model="activity.description" placeholder="Enter Activity" /></td>

            <td class="single_character_cell">
                <select class="single_character_cell" v-model="activity.activity_code">
                    <option disabled value=""></option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </td>

            <td class="medium_cell"><input v-model="activity.people_present" class="single_character_cell" type="number" value="1"/></td>
            <td><input v-on:input="day.calculate_hours()" step="0.5" class="single_character_cell" v-model="activity.time_spent" type="number" value="1.0"/></td>
            <td><button @click="day.delete_entry(activity)">X</button></td>
        </tr>
    </div>
</table>

<br></br>

<ul class="horizontal_ul">
    <li class="horizontal_li"><button @click="add_new_day()">Add New Day</button></li>
    <li class="horizontal_li"><button @click="construct_csv()">Download CSV</button></li>
</ul>


</template>
