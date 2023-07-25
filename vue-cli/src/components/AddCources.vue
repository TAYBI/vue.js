<template>
    <div class="container p-3 custom-card my-3">
        <div class="form-group mb-3">
            <label for="nom">Nom:</label>
            <input v-model="nom" ref='name' type="text" class="form-control" id="nom" placeholder="Title..."
                aria-describedby="basic-addon2">
        </div>
        <div class="form-group  mb-3">
            <label for="description">Description:</label>
            <input v-model="description" ref='description' type="text" class="form-control" id="description"
                placeholder="Description..." aria-describedby="basic-addon2">
        </div>
        <div class="form-group  mb-3">
            <label for="category">Category:</label>
            <select v-model="selectedCategory" name="category" id="category" class="form-control">
                <option v-for="categoryItem in categories" :value="categoryItem.id" :key="categoryItem.id">
                    {{ categoryItem.name }}
                </option>
            </select>
        </div>

        <div class="form-check form-check-inline  mb-3">
            <input v-model="typePayment" class="form-check-input" type="radio" value="free" name="paymentType">
            <label class="form-check-label" for="flexRadioDefault1">
                Free
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input v-model="typePayment" class="form-check-input" type="radio" value="paying" name="paymentType">
            <label class="form-check-label" for="flexRadioDefault2">
                Paying
            </label>
        </div>


        <div v-for="tag in tags" :key="tag" class="form-check">
            <input class="form-check-input" type="checkbox" :value="tag" v-model="tagsChecked">
            <label class="form-check-label" :for="`flexCheck_${tag}`">
                {{ tag }}
            </label>
        </div>



        <div class="form-group">
            <button @click="addCourse" class="btn btn-outline-success btn-block" type="button">Add Course</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddCourses',
    data() {
        return {
            nom: '',
            description: '',
            selectedCategory: 3,
            categories: [
                { id: 1, name: 'FrontEnd' },
                { id: 2, name: 'BackEnd' },
                { id: 3, name: 'Mobile' },
            ],
            typePayment: 'free',
            tags: ['frentend', 'backend', 'js', 'git'],
            tagsChecked: []
        };
    },
    methods: {
        addCourse() {
            let selectedCategoryObject = this.categories.find(category => category.id === this.selectedCategory);

            let formValues = {
                name: this.nom,
                description: this.description,
                category: selectedCategoryObject.name,
                typePayment: this.typePayment,
                tags: this.tagsChecked
            }

            console.log(formValues);
            this.$emit('addCourse', formValues);
        },
    },
};
</script>

<style scoped>
.custom-card {
    text-align: left;
    display: block;
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.custom-card+.custom-card {
    margin-top: 10px;
}
</style>
