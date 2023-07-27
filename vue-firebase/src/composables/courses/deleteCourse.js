import { ref } from "vue";
import { db } from '../../firebase/config'

const deleteCourse = () => {
    const error = ref(null);

    const deleteC = async (id) => {
        try {
            const res = await db.collection('courses').doc(id).delete();
        } catch (err) {
            error.value = err.message;
        }
    }

    return { deleteC, error }
}

export default deleteCourse;