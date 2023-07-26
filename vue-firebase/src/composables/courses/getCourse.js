import { ref } from "vue";
import { db } from '../../firebase/config'

const getCourse = () => {
    const course = ref({});
    const error = ref(null);

    const load = async (id) => {
        try {
            const res = await db.collection('courses').doc(id).get();


            if (!res.exists)
                throw Error('404 Not found')

            course.value = { ...res.data(), id: res.id }
        } catch (err) {
            error.value = err.message;
        }
    }

    return { load, course, error }
}

export default getCourse;
