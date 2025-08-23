<script>
import { activity } from './activity'

export default
{
    data()
    {
        return{
            date: "2025-06-01",
            total_hours: 0,
            activities: [new activity("2025-06-01")],
        }
    },
    methods: {
        add_entry() {
            this.activities.push(new activity(this.date))
            this.total_hours_spent()
        },

        total_hours_spent()
        {
            this.total_hours = 0;
            for (let index = 0; index < this.activities.length; index++) {
                this.total_hours += this.activities[index].time_spent;
            }
        },

        delete_entry(entry)
        {
            this.activities = this.activities.filter(function(item)
            {
                return item !== entry
            })
            this.total_hours_spent()
        },

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
        
        <tr class="accordion_header">
            <td><input type="date" v-model="date" placeholder="Enter Date"/></td>
            <td @click="toggle_row"></td>
            <td @click="toggle_row" class="wide_cell"></td>
            <td @click="toggle_row" class="single_character_cell"></td>
            <td @click="toggle_row"></td>
            <td @click="toggle_row"><div>Total:{{ total_hours }}</div></td>
            <td><button @click="add_entry">+</button></td>

        </tr>

        <tr class="accordion" v-for="entry in activities">
                <td></td>

                <td class="medium_cell"><input class="medium_cell" v-model="entry.location" placeholder="Enter City" /></td>
                <td class="wide_cell"><input class="wide_cell" v-model="entry.description" placeholder="Enter Activity" /></td>

                <td class="single_character_cell">
                    <select class="single_character_cell" v-model="entry.activity_code">
                        <option disabled value=""></option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                </td>

                <td><input v-model="entry.people_present" class="single_character_cell" type="number" value="1"/></td>
                <td><input v-on:input="total_hours_spent" step="0.5" class="single_character_cell" v-model="entry.time_spent" type="number" value="1.0"/></td>
                <td><button @click="delete_entry(entry)">X</button></td>
        </tr>

    </table>
    <button @click="construct_csv">Download</button>

</template>
