<template lang="">
    <div class="container p-3">
        <div class="input-group mb-3">
        <input ref='name' type="text" class="form-control" placeholder="Title..." aria-describedby="basic-addon2">
        <input ref='description'  type="text" class="form-control" placeholder="Description..." aria-describedby="basic-addon2">
        <div class="input-group-append">
            <button @click="addCourse" class="btn btn-outline-secondary" type="button">Add Course</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'AddCources',
    methods: {
        addCourse() {
            let name = this.$refs.name.value;
            let description = this.$refs.description.value;

            this.$emit('addCourse', { name, description })

        }
    }
}
</script>
<style lang="">
    
</style>