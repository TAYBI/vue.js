<template lang="">
    <div>
        
    </div>
</template>
<script>
import { ref } from 'vue';
import { db } from '../firebase/config'

export default {
    setup() {
        const posts = ref([])

        const load = async () => {
            const res = await db.collection('courses').get()
            // const doc = await cityRef.get();
            // if (!doc.exists) {
            //     console.log('No such document!');
            // } else {
            //     console.log('Document data:', doc.data());
            // }
            console.log(res);
        }

        load();
    }
}
</script>
<style lang="">
    
</style>