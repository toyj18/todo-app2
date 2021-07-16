<template>
  <div id="app">

    <div>
      <div v-if="!emails.length">
        <h1>Please Enter your Email Before you can use this App</h1>
        <div class="container">
          <div class="row">
            <div class="col-5 mx-auto my-5">
              <AddEmailItem 
              v-on:add-email-event="saveEmailItem" 
              v-on:edit-email-event="editEmailItemEvent" 
              v-bind:editEmail="editEmail"/>
            </div>
          </div>
          <div class="row">
            <div class="col-7 mx-auto my-5">
              <Emails :emails="emails" 
              @del-email-event="deleteEmailItem" 
              @edit-email-event="editEmailItem" />
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="container">
          <div class="row">
            <div class="col-7 mx-auto my-5">
              <Emails :emails="emails" 
              @del-email-event="deleteEmailItem" 
              @edit-email-event="editEmailItem" />
            </div>
          </div>
          <div class="row">
            <div class="col-5 mx-auto my-5">
              <AddTaskItem 
              v-on:add-task-event="addTaskItem" 
              v-on:edit-task-event="editTaskItemEvent" 
              v-bind:editTask="editTask"/>
            </div>
          </div>
        </div>
    
        <div>
          <Tasks :tasks="tasks" 
          @del-task-event="deleteTaskItem" 
          @edit-task-event="editTaskItem" />
        </div>
        <div class="">
          <!-- <form class="contact-form" @submit.prevent="sendEmail">
            <label>Name</label>
            <input type="text" name="user_name">
            <label>Email</label>
            <input type="email" name="user_email">
            <label>Message</label>
            <textarea name="message"></textarea>
            <input type="submit" value="Send">
          </form> -->
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  // import emailjs from 'emailjs-com';
  import AddEmailItem from "./components/AddEmailItem";
  import Emails from "./components/Emails.vue";
  import Tasks from "./components/Tasks";
  import AddTaskItem from "./components/AddTaskItem";

export default {
  name: 'App',
  components: {
    AddEmailItem,
    Emails,
    Tasks,
    AddTaskItem
  },
  data () {
    return {
      emails: [],
      editEmail:{
        id: '',
        email: '',
        current: ''
      },
      tasks: [],
      editTask: {
        id: '',
        title: '',
        day: '',
        reminder: ''
        
      }
    }
  },
  methods: {
  
    saveEmailItem(newEmail){
      //  console.log('newemail', newEmail.email);
        this.emails = [...this.emails, newEmail];
    },
    addTaskItem(newTask){
      // console.log('newtask', newTask.title);
        this.tasks = [...this.tasks, newTask];
      // this.tasks.unshift(newTask)
    },
    deleteEmailItem(id) {
      this.emails = this.emails.filter(my_email => my_email.id !== id)
    },
    
    deleteTaskItem(id){
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    // sendEmail(e) {
    //   try {
    //     emailjs.sendForm('gmail', 'service_57wm7yf', e.target,
    //     'user_hWcGkgMymQk6VdUpTtaIS', {
    //       name: this.name,
    //       email: this.email,
    //       message: ''
    //     })

    //   } catch(error) {
    //       console.log({error})
    //   }
    //   // Reset form field
    //   this.name = ''
    //   this.email = ''
    //   this.message = ''
    // },
    // sendEmail(e) {
    //   emailjs.sendForm('gmail', 'template_nuh4agg', e.target, 'user_hWcGkgMymQk6VdUpTtaIS')
    //     .then((result) => {
    //         console.log('SUCCESS!', result.status, result.text);
    //     }, (error) => {
    //         console.log('FAILED...', error);
    //     });
    // },
    editTaskItem(id){
      //find the index of the task's id
      let objIndex = this.tasks.findIndex(obj=> obj.id === id);
      this.editTask.id = id;
      this.editTask.title = this.tasks[objIndex].title;
      this.editTask.day = this.tasks[objIndex].day;
      this.editTask.reminder = this.tasks[objIndex].reminder;
      
    },
    editEmailItemEvent(emailItem){
      //find the index of this id's object
      let objIndex = this.emails.findIndex(obj => obj.id === emailItem.id)
      //update the item
      this.emails[objIndex].email = emailItem.email;
      this.emails[objIndex].current = emailItem.current;
      // this.emails[objIndex].reminder = emailItem.reminder;
      
    },

    editTaskItemEvent(taskItem){
      //find the index of this id's object
      let objIndex = this.tasks.findIndex(obj => obj.id === taskItem.id)
      //update the item
      this.tasks[objIndex].title = taskItem.title;
      this.tasks[objIndex].day = taskItem.day;
      this.tasks[objIndex].reminder = taskItem.reminder;
      
    }
  },
  watch: {
    emails: {
      handler() {
        localStorage.setItem('emails', JSON.stringify(this.emails))
      },
      deep: true
    },
    tasks: {
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("emails")){
      this.emails = JSON.parse(localStorage.getItem("emails"))
    }

    if (localStorage.getItem("tasks")){
      this.tasks = JSON.parse(localStorage.getItem("tasks"))
    }
  }
}
</script>

<style>
/* service_57wm7yf */
#app {
   text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}


</style>
