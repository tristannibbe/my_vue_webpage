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
    <tr>
        <th>Date</th>
        <th class="medium_cell">Location</th>
        <th class="wide_cell">Description</th>
        <th>Code</th>
        <th>Participants</th>
        <th class="single_character_cell">Hours</th>
        <th></th>
    </tr>

    <div v-for="day in days_of_activities">
        <tr class="accordion_header">
            <td><input type="date" v-model="day.date" placeholder="Enter Date"/></td>
            <td @click="toggle_row"></td>
            <td @click="toggle_row" class="wide_cell"></td>
            <td @click="toggle_row" class="single_character_cell"></td>
            <td @click="toggle_row"></td>
            <td @click="toggle_row"><div>Total:{{ day.total_hours }}</div></td>
            <td><button @click="day.add_entry()">+</button></td>
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

            <td><input v-model="activity.people_present" class="single_character_cell" type="number" value="1"/></td>
            <td><input v-on:input="day.calculate_hours()" step="0.5" class="single_character_cell" v-model="activity.time_spent" type="number" value="1.0"/></td>
            <td><button @click="day.delete_entry(activity)">X</button></td>
        </tr>
    </div>
</table>

<br></br>
<button @click="construct_csv">Download</button>

</template>
