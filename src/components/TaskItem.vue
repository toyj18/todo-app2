<template>
    <div class="">
        <span class="">
        <h1>{{task.title}}</h1>
        <p> {{ task.day }} <span> {{ task.reminder }} </span> </p>
        <button class="btn btn-primary m-2" @click="$emit('edit-task-item', task.id)">edit</button>
        <button class="btn btn-danger" @click="$emit('del-task-item', task.id)">delete</button>
        </span>
                
    </div>
</template>

<script>
    export default {
        name: "TaskItem",
        props: ["task"]
    }
</script>

<style scoped>
    .glyphicon-pencil, .glyphicon-trash{
        font-size: 15px;
        padding: 4px;
    }
</style>
