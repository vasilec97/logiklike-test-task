import React from 'react'
import { useHomePage } from "../model/hooks/useHomePage"
import { Sidebar, SidebarSkeleton } from "@/modules/Sidebar"
import { CoursesList, CoursesListSkeleton } from "@/modules/CoursesList"
import cls from './HomePage.module.scss'

export const HomePage = () => {
  const {
    courses,
    coursesThemesMap,
    sidebarValue,
    changeCoursesTheme,
    isCoursesLoading,
  } = useHomePage()

  if (isCoursesLoading) return <HomePageSkeleton />

  return (
    <main className={cls.HomePage}>
      <Sidebar items={coursesThemesMap} activeValue={sidebarValue} onValueChange={changeCoursesTheme} />
      <CoursesList courses={courses} />
    </main>
  )
}

export const HomePageSkeleton = () => {
  return (
    <div className={cls.skeleton}>
      <SidebarSkeleton />
      <CoursesListSkeleton />
    </div>
  )
}