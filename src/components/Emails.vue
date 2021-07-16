<template>
    <div>
        <h2>My Email List</h2>
        <div v-bind:key="my_email.email" v-for="my_email in emails">
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-8 m-auto">
                        <EmailItem 
                        v-bind:my_email="my_email" 
                        v-on:del-email-item="delEmailMethod" 
                        v-on:edit-email-item="editEmailMethod" />
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!emails.length">
            <p>No Email to Read!!</p>
        </div>
    </div>
</template>

<script>
    import EmailItem from "./EmailItem";
    export default {
        name: "Emails",
        props: ["emails"],
        components: {
            EmailItem
        },
        methods: {
            delEmailMethod(id){
                //send to parent
                this.$emit('del-email-event', id);
            },
            editEmailMethod(id){
                //send to parent (App.vue)
                this.$emit('edit-email-event', id)
            }
        }
    }
</script>

<style scoped>

</style>
