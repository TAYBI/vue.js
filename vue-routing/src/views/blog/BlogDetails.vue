<template >
    <div v-if="blog" class="jumbotron alert alert-secondary">
        <div class="row">
            <div class="col-12 col-md-6">
                <h1 class="display-4 px-3" style="font-weight: bold;">{{ blog.strMeal }}</h1>
                <img class="img-fluid mb-3" style="height: auto; width: 100%;" :src="blog.strMealThumb"
                    alt="Card image cap">
            </div>
            <div class="col-12 col-md-6 mt-2">
                <div class="d-flex mt-2">
                    <span class="badge bg-dark mx-1">{{ blog.strArea }}</span>
                    <span class="badge bg-danger mx-1">{{ blog.strTags }}</span>
                    <span class="badge bg-warning mx-1">{{ blog.strCategory }}</span>
                </div>
                <hr class="my-4">
                <p class="lead">{{ blog.strInstructions }}</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        </div>
    </div>
    <div v-else class="h3">Loading..</div>
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

<style>
img {
    border-radius: 10px;
}
</style>