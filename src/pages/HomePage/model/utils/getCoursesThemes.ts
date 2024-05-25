import { Course } from "@/modules/CoursesList";
import { DEFAULT_SIDEBAR_VALUE } from "@/modules/Sidebar";
import { toCyrillicKebabCase } from "@/shared/utils/toCyrillicKebabCase";

export const getCoursesThemesMap = (courses: Course[]) => {
  const acc: Record<string, string> = {
    [DEFAULT_SIDEBAR_VALUE]: 'Все темы'
  }

  return courses.reduce((acc, course) => {
    const newAcc = acc

    course.tags.forEach(tag => {
      const kebabCase = toCyrillicKebabCase(tag)
      if (acc[kebabCase]) return

      newAcc[kebabCase] = tag
    })
    
    return newAcc
  }, acc)
}