<template lang="">
  <center> 
  <div class="row d-flex ">
      <div v-for="blog in blogs" class="col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="card border-info mb-3" style="max-width: 22rem;">
            <div class="card-header">
              {{blog.strMeal}}  
            </div>
            <img class="card-img-top" :src="blog.strMealThumb" alt="Card image cap">
              <div class="card-body">                
                <span class="badge bg-dark ">{{blog.strArea}}</span>
                <span class="badge bg-danger ">{{blog.strTags}}</span>
                <span class="badge bg-warning ">{{blog.strCategory}}</span>
              </div>
              <router-link :to="{name: 'BlogDetails', params: { id: blog.idMeal }}" class="btn btn-secondary">More details</router-link>
          </div>
      </div>
    </div>
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
