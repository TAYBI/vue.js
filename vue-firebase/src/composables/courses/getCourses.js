import { ref } from "vue";
import { db } from '../../firebase/config'

const getCourses = () => {
    const courses = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            const res = await db.collection('courses').get();
            courses.value = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
        } catch (err) {
            error.value = err.message;
        }

    }

    return { load, courses, error }
}

export default getCourses;
