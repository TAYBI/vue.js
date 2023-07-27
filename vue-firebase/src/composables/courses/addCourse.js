import { ref } from "vue";
import { db } from '../../firebase/config'

const addCourse = () => {
    const error = ref(null);

    const load = async (course) => {
        try {
            const res = await db.collection('courses').add(course);
        } catch (err) {
            error.value = err.message;
        }
    }

    return { load, error }
}

export default addCourse;