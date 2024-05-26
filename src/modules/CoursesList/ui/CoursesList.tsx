import { FC } from 'react'
import CourseCard from '@/components/CourseCard/CourseCard'
import { Course } from '../model/types/types'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import cls from './CoursesList.module.scss'

type CoursesListProps = {
  courses: Course[]
}

export const CoursesList: FC<CoursesListProps> = ({ courses }) => {
  return (
    <div className={cls.CoursesList}>
      {courses.map(({ id, name, image, bgColor }) => {
        return <CourseCard key={id} name={name} image={image} bgColor={bgColor} />
      })}
    </div>
  )
}

export const CoursesListSkeleton = () => {
  return (
    <div className={cls.skeleton}>
      {Array.from({ length: 9 }, (_, idx) => (
        <div key={idx} className={cls.card}>
          <Skeleton width="100%" height="200px" border="18px" />
          <Skeleton width="70%" height="20px" border="5px" />
        </div>
      ))}
    </div>
  )
}