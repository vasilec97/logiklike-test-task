import React, { CSSProperties, FC, memo } from 'react'
import cls from './CourseCard.module.scss'

type CourseCardProps = {
  name: string
  image: string
  bgColor: string
}

const CourseCard: FC<CourseCardProps> = memo(({ name, image, bgColor }) => {
  const imageFieldStyles: CSSProperties = {
    backgroundColor: bgColor
  } 

  return (
    <section className={cls.CourseCard}>
      <div className={cls.imageField} style={imageFieldStyles}>
        <div className={cls.imageWrapper}>
          <img src={image} />
        </div>
      </div>
      <h2 className={cls.title}>{name}</h2>
    </section>
  )
})

export default CourseCard