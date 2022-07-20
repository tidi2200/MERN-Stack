import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function Header () {
    const [courses, setCourses] = useState();

    const fetchCourses = useCallback(() => {
        axios.get('http://localhost:3002/api/courses', {
        }).then(res => {
            console.log(res.data);
        });
    }, []);

    useEffect(fetchCourses, [fetchCourses]);
    return (
        <>
            <h1>Hello World</h1>
        </>
    );
}