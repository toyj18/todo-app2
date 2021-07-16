<template>
    <div>


        <form @submit="addTask">
            <div class="form-group">
                <label for="title">Enter TAsk</label>
                <input type="text" class="form-control" id="title" v-model="title" name="title" placeholder="Add Task">
            </div>
            <div class="form-group">
                <label for="day">Date & Time of the Event</label>
                <input type="datetime-local" class="form-control" id="day" v-model="day" name="day">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="remind" v-model="reminder" name="reminder">
                <label class="form-check-label" for="remind">Reminder</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddTaskItem",
        props: ['edittask'],
        data () {
            return {
                id: '',
                title: '',
                day: '',
                reminder: false,
                edit: false
            }
        },
        methods: {
            addTask(e){
                e.preventDefault();
                if (this.edit === false){
                    // add new task
                    const newTask = {
                        id: Math.floor(Math.random() * 100),
                        title: this.title,
                        day: this.day,
                        reminder: this.reminder
                        
                    };
                    if (newTask.title == ''){
                        alert('Title can not be empty');
                        
                    }else {
                        this.$emit('add-task-event', newTask);
                    }
                    this.title = ''
                }else{
                    //edit Task
                    const TaskItem = {
                        id: this.id,
                        title: this.title,
                        day: this.day,
                        reminder: this.reminder
                        
                    };
                    //send to parent (App.vue)
                    this.$emit('edit-task-event', TaskItem);
                    // clear input field
                    this.title = '';
                    this.day = '';
                    this.reminder = false
                    this.edit = false;
                }
            }
        },
        watch: {
            editTask: {
                handler() {
                    this.id = this.editTask.id;
                    this.title = this.editTask.title;
                    this.day = this.editTask.day;
                    this.reminder = this.editTask.reminder;
                    this.edit = true
                },
                deep: true
            },
            title:{
                handler(){
                    if(this.title === '' || this.day === ''){
                        this.edit = false;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
