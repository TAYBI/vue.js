<template lang="">
  <center> 
  <div class="row d-flex ">
      <div v-for="blog in blogs" class="col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="card border-info mb-3" style="max-width: 22rem;">
              <div class="card-header">
              <router-link :to="{name: 'BlogDetails', params: { id: blog.id, slug: blog.slug}}">{{blog.name}}</router-link>  
              </div>
              <div class="card-body">
                  <h4 class="card-title">{{blog.name}}</h4>
                  <p class="card-text">{{blog.description}}</p>
              </div>
          </div>
      </div>
    </div>
  </center>
</template>
<script>
export default {
  data() {
    return {
      blogs: [
        {
          id: 1,
          name: "Web Development Bootcamp",
          slug: "web-development-bootcamp",
          description: "Learn web development from scratch and build powerful applications.",
          category: 'FrontEnd',
          typePayment: 'free',
          tags: ['backend', 'js', 'git']
        },
        {
          id: 2,
          name: "Data Science Fundamentals",
          slug: "data-science-fundamentals",
          description: "Discover the world of data science and learn to analyze data effectively.",
          category: 'BackEnd',
          typePayment: 'paying',
          tags: ['data science', 'python', 'machine learning']
        },
        {
          id: 3,
          name: "Digital Marketing Mastery",
          slug: "digital-marketing-mastery",
          description: "Master the art of digital marketing and grow your online presence.",
          category: 'Marketing',
          typePayment: 'free',
          tags: ['digital marketing', 'social media', 'SEO']
        },
        {
          id: 4,
          name: "Mobile App Development",
          slug: "mobile-app-development",
          description: "Create stunning mobile apps for Android and iOS platforms.",
          category: 'Mobile',
          typePayment: 'paying',
          tags: ['mobile development', 'Android', 'iOS']
        },
        {
          id: 5,
          name: "Graphic Design Essentials",
          slug: "graphic-design-essentials",
          description: "Learn the fundamentals of graphic design and unleash your creativity.",
          category: 'Design',
          typePayment: 'free',
          tags: ['graphic design', 'art', 'creativity']
        },
      ]
    }
  },
}
</script>

<style>
.card {
  text-align: left !important;
}
</style>