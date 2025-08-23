<script>
    export default
    {
        data()
        {
            return {
                message: "Hello this is my site, there are many like it, but this is mine",
                sucks: false,
                count: 0
            }
        },
        methods: {
            get_random_insult() {
                var insults = Array("bitch","fucker","cockwomble","douchebag","squidtard","dogboy","asslicker");
                return insults[Math.floor(Math.random()*insults.length)];
            }
        }
    }
</script>

<template>
    <h1>{{ message }}</h1>
    <a href="cailas_page.html">Caila's Page</a>

    <hr></hr>

    <label for="checkbox">Does this site suck? If so tick this box ==> </label>
    <input type="checkbox" id="checkbox" v-model="sucks" />
    <label v-if="sucks">&nbsp;&nbsp;&nbsp;&nbsp;{{get_random_insult()}}</label>



    <hr></hr>

    <p>Click button below 20 times and something amazing might happen!</p>
    <button @click="count++">Clicked: {{ count }} times</button>

    <h2 v-if="count>=20">You win...nothing!</h2>
    <h4 v-if="count>=20">Life Lesson: Some things are not worth doing</h4>
    <h4 v-if="count>=30">Why do you persist?</h4>

    <h4 v-if="count>=40">FINE!! Here he is!</h4>
    <img src="./cat_in_hat.jpg" alt="Italian Trulli" v-if="count>=40">
</template>