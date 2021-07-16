<template>
    <div class="">
        <span class="">
        <h1>{{my_email.email}}</h1>
        <p> {{ my_email.current }} <span> {{ my_email.status }} </span></p>
        
        <button class="btn btn-primary m-2" @click="$emit('edit-email-item', my_email.id)">edit</button>
        <button class="btn btn-danger" @click="$emit('del-email-item', my_email.id)">delete</button>
        </span>
                
    </div>
</template>

<script>
    export default {
        name: "EmailItem",
        props: ["my_email"]
    }
</script>

<style scoped>
    .glyphicon-pencil, .glyphicon-trash{
        font-size: 15px;
        padding: 4px;
    }
</style>
