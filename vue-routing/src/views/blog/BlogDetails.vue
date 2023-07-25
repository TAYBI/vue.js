<template >
    <div v-if="blog" class="jumbotron alert alert-secondary">
        <div class="row">
            <div class="col-12 col-md-6">
                <h1 class="display-4" style="font-weight: bold;">{{ blog.strMeal }}</h1>
                <img class="img-fluid mb-3" style="max-height: 300px; height: auto; width: 100%;" :src="blog.strMealThumb"
                    alt="Card image cap">
                <p class="lead">{{ blog.strInstructions }}</p>
            </div>
            <div class="col-12 col-md-6">
                <div class="row mb-3">
                    <div class="col-4">
                        <span class="badge bg-dark">{{ blog.strArea }}</span>
                    </div>
                    <div class="col-4">
                        <span class="badge bg-danger">{{ blog.strTags }}</span>
                    </div>
                    <div class="col-4">
                        <span class="badge bg-warning">{{ blog.strCategory }}</span>
                    </div>
                </div>
                <hr class="my-4">
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['id', 'slug'],
    data() {
        return {
            blog: null
        }
    },
    async mounted() {
        const id = this.$route.params.id;
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
        const data_ = await response.json();
        this.blog = data_.meals[0];
        console.log(this.blog);
    },
}
</script>
