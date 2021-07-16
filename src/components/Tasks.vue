<template>
    <div>
        <h2>My Task List</h2>
        <div v-bind:key="task.id" v-for="task in tasks">
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-8 m-auto">
                        <TaskItem 
                        v-bind:task="task" 
                        v-on:del-task-item="delTaskMethod" 
                        v-on:edit-task-item="editTaskMethod" />
                    </div>
                </div>
            </div>
        </div>

        <div class="card-footer pb-0 pt-3">
            <jw-pagination :items="tasks" @changePage="onChangePage"></jw-pagination>
        </div>
        <div v-if="!tasks.length">
            <p>No Task to Read!!</p>
        </div>
    </div>
</template>

<script>
    import TaskItem from "./TaskItem";
    const exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
    export default {
        name: "Tasks",
        props: ["tasks"],
        
        components: {
            TaskItem
        },
        data() {
            return {
                exampleItems,
                pageOfItems: []
            };
        },
        methods: {
            onChangePage(task) {
            // update page of items
            this.task = task;
            },

            delTaskMethod(id){
                //send to parent
                this.$emit('del-task-event', id);
            },
            editTaskMethod(id){
                //send to parent (App.vue)
                this.$emit('edit-task-event', id)
            }
        }
    }
</script>

<style scoped>

</style>
