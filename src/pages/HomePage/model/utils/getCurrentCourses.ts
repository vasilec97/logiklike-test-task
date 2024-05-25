import { Course } from "@/modules/CoursesList"
import { DEFAULT_SIDEBAR_VALUE } from "@/modules/Sidebar"

export const getCurrentCourses = (courses: Course[], sidebarValue: string | undefined, map: Record<string, string>) => {
  if (sidebarValue == DEFAULT_SIDEBAR_VALUE || !sidebarValue) return courses

  return courses.filter(course => course.tags.some(tag => tag == map[sidebarValue]))
}