<template>
    <div>


        <form @submit="addEmail">
            <div class="form-group">
                <label for="email">Enter Email</label>
                <input type="email" class="form-control" id="email" v-model="email" name="email" placeholder="Add Email">
            </div>
            
            <button type="submit" class="btn btn-primary">login</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddEmailItem",
        props: ['editEmail'],
        data () {
            return {
                id: '',
                email: '',
                current: '',
                status: false
            }
        },
        methods: {
            validEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },

            addEmail(e){
                e.preventDefault();
                if (this.status === false){
                    // add new Email
                    const newEmail = {
                        id: Math.floor(Math.random() * 100),
                        email: this.email,
                        current: new Date(),
                        
                    };
                    if (!newEmail.email){
                        alert('Email can not be empty');
                        
                    }else if (!this.validEmail(newEmail.email)) {
                        alert("invalid email")                        
                    } else {
                        this.$emit('add-email-event', newEmail);
                    }
                    this.email = ''
                }else{
                    //edit Email
                    const EmailItem = {
                        id: this.id,
                        email: this.email,
                        current: this.day,                        
                    };
                    //send to parent (App.vue)
                    this.$emit('edit-email-event', EmailItem);
                    // clear input field
                    this.email = '';
                    this.current = 'Email';
                    this.status = false;
                }
            }
        },
        watch: {
            editEmail: {
                handler() {
                    this.id = this.editEmail.id;
                    this.email = this.editEmail.email;
                    this.current = this.editEmail.current;
                    this.status = true
                },
                deep: true
            },
            title:{
                handler(){
                    if(this.email === ''){
                        this.status = false;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
