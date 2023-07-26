<template>
  <div class="home">
    <h1 ref="header">{{ text.text }}</h1>
    <!-- <button @click="saySalam">Salam</button> -->
    <input v-model="search" type="text">
    <P v-for="course in searchResult">{{ course }}</P>
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchPostEffect } from 'vue';


export default {
  name: 'HomeView',
  setup() {
    //data
    // let text = ref("Home")
    let text = reactive({ text: "Home" })
    let header = ref(null);

    const search = ref('')
    const courses = ref(['js', 'html', 'css', 'c#', 'python', 'C'])
    //Methods

    // computed
    const searchResult = computed(() => {
      return courses.value.filter((course) => {
        return course.includes(search.value)
      })
    })

    // watch 
    watch(search, () => {
      console.log('I see you: ', search.value);
    })

    // watchPostEffect
    watchPostEffect(() => {
      console.log('I see you - watch effect: ', search.value);
    })

    const saySalam = () => {
      // header.value.textContent = 'changed'
      text.text = "second home"
      console.log(text);
    }
    return { text, saySalam, header, courses, searchResult, search }
  }
}
</script>
