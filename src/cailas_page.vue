<script>
import {day_of_activities, ActivityCodeList} from './activity'

export default
{
    data()
    {
        return{
            days_of_activities: [new day_of_activities("2025-06-01"), new day_of_activities("2025-06-02")],
            ActivityCodeList: ActivityCodeList
        }
    },
    methods: {
        construct_csv()
        {
            let csvContent = "data:text/csv;charset=utf-8,";

            for (let index = 0; index < this.days_of_activities.length; index++)
            {
                csvContent += this.days_of_activities[index].to_string();
            }

            var encodedUri = encodeURI(csvContent);
            window.open(encodedUri);
        },

        add_new_day()
        {
            //TODO auto iterate to next date
            var nextDate = "2025-06-03"
            var newday = new day_of_activities(nextDate)
            this.days_of_activities.push(newday)
        },  
    }
}
</script>

<template>
<h1 class="page_header">Activity Log</h1>
<table>


    <tbody class="accordion_container" v-for="day in days_of_activities">
        <tr class="accordion_header">
            <td class="">
                <input type="date" v-on:input="" v-model="day.date" placeholder="Enter Date"/>
            </td>
            <td class="medium_cell"      @click="day.toggle_row()"></td>
            <td class="wide_cell"        @click="day.toggle_row()"></td>
            <td class="single_char_cell" @click="day.toggle_row()"></td>
            <td class="medium_cell"      @click="day.toggle_row()"></td>
            <td class="medium_cell"      @click="day.toggle_row()">
                <div>Total:{{ day.total_hours }}</div>
            </td>
            <td class="">
                <button @click="day.add_entry()">+</button>
            </td>
        </tr>

        <tr class="accordion" v-if="day.display">
            <th class=""             ></th>
            <th class="medium_cell"  >Location</th>
            <th class="wide_cell"    >Description</th>
            <th class=""             >Code</th>
            <th class="medium_cell"  >Participants</th>
            <th class="medium_cell"  >Hours</th>
            <th class=""             ></th>
        </tr>

        <tr class="accordion" v-if="day.display" v-for="activity in day.activities">
            <td></td>

            <td class="medium_cell">
                <input class="medium_cell" v-model="activity.location" placeholder="Enter City" />
            </td>
            <td class="wide_cell">
                <input class="wide_cell" v-model="activity.description" placeholder="Enter Activity" />
            </td>

            <td class="single_char_cell">
                <select class="single_char_cell" v-model="activity.activity_code">
                    <option disabled value=""></option>
                    <option v-for="a_code in ActivityCodeList" :value="a_code">{{a_code.get_full_name()}}</option>
                </select>
            </td>

            <td class="medium_cell">
                <input v-model="activity.people_present" class="single_char_cell" min="1" type="number" value="1"/>
            </td>
            <td>
                <input v-on:input="day.calculate_hours()" min="0" max ="10" step="0.5" class="single_char_cell" v-model="activity.time_spent" type="number"/>
            </td>
            <td>
                <button @click="day.delete_entry(activity)">X</button>
            </td>
        </tr>
    </tbody>
</table>

<br></br>

<ul class="horizontal_ul">
    <li class="horizontal_li"><button @click="add_new_day()">Add New Day</button></li>
    <li class="horizontal_li"><button @click="construct_csv()">Download CSV</button></li>
</ul>


</template>
