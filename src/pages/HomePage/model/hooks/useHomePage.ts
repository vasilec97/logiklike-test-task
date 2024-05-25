import { useCallback, useEffect, useMemo, useState } from "react"
import { Course } from "@/modules/CoursesList"
import { DEFAULT_SIDEBAR_VALUE } from "@/modules/Sidebar"
import { getCoursesThemesMap } from "../utils/getCoursesThemes"
import { getCurrentCourses } from "../utils/getCurrentCourses"
import { $fetch } from "@/shared/api/fetch"
import { COURSES } from "@/shared/const/endpoints"
import { COURSES_THEME } from "@/shared/const/queryParams"

export const useHomePage = () => {
  const [sidebarValue, setSidebarValue] = useState<string>()
  const [courses, setCourses] = useState<Course[]>([])
  const [isCoursesLoading, setIsCoursesLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsCoursesLoading(true)

    const sp = new URLSearchParams(window.location.search)
    const querySidebarValue = sp.get(COURSES_THEME)
    querySidebarValue ? setSidebarValue(querySidebarValue) : setSidebarValue(DEFAULT_SIDEBAR_VALUE)

    $fetch(COURSES)
      .then(res => res.json())
      .then(data => setCourses(data))
      .finally(() => setIsCoursesLoading(false))
  }, [])

  const coursesThemesMap = useMemo(() => {
    return getCoursesThemesMap(courses)
  }, [courses])

  const currentCourses = useMemo(() => {
    return getCurrentCourses(courses, sidebarValue, coursesThemesMap)
  }, [sidebarValue, courses, coursesThemesMap])

  const changeCoursesTheme = useCallback((val: string) => {
    const qp = new URLSearchParams({
      [COURSES_THEME]: val
    })
    window.history.pushState(null, '', `?${qp.toString()}`)

    setSidebarValue(val)
  }, [])

  return {
    courses: currentCourses,
    coursesThemesMap,
    sidebarValue,
    changeCoursesTheme,
    isCoursesLoading
  }
}