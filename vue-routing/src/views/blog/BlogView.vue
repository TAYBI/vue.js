<template lang="">
  <center> 
  <div v-if="blogs.length > 0" class="row d-flex ">
      <div v-for="blog in blogs" class="col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="card alert  alert-secondary mb-3" style="max-width: 22rem;">
            <div class="h4">
              {{blog.strMeal}}  
            </div>
            <img class="card-img-top" :src="blog.strMealThumb" alt="Card image cap">
            <div class="my-1 mt-3">                
              <span class="badge bg-dark ">{{blog.strArea}}</span>
              <span class="badge bg-danger ">{{blog.strTags}}</span>
              <span class="badge bg-warning ">{{blog.strCategory}}</span>
            </div>
            <hr class="mt-2"/>
            <router-link :to="{name: 'BlogDetails', params: { id: blog.idMeal }}" class="btn btn-primary">
                <strong>
                  More details
                </strong>
            </router-link>

          </div>
      </div>
  </div>
  <div v-else class="h3">Loading...</div>
  </center>
</template>
<script>
export default {
  data() {
    return {
      blogs: []
    }
  },
  async mounted() {

    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const data = await response.json();
    const blogs_ = data.meals
    this.blogs = blogs_;
    console.log(this.blogs);

  },
}
</script>

<style scoped>
.card {
  text-align: left !important;
}

.badge {
  margin: 3px;
}
</style>
