<script>

    export default
    {
        data()
        {
            return {
                sucks: false,
            }
        },
        methods: {
            get_str()
            {
                return "Checked"
            }
        }
    }
</script>

<template>
<h1 class="page_header">This is a page for testing features!</h1>

<label for="checkbox">This is a checkbox that triggers a function ==> </label>
<input type="checkbox" id="checkbox" v-model="sucks" />
<label v-if="sucks">&nbsp;&nbsp;{{get_str()}}</label>
<label v-else="sucks">&nbsp;&nbsp;Not Checked</label>

</template>