import { FC, memo } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton"
import cls from "./Sidebar.module.scss"

type SidebarProps = {
  items: Record<string, string>
  activeValue: string | undefined
  onValueChange: (val: string) => void
}

export const Sidebar: FC<SidebarProps> = memo(({ items, activeValue, onValueChange }) => {
  const changeValue = (val: string) => () => onValueChange(val)

  return (
    <div className={cls.Sidebar}>
      <ul className={cls.items}>
        {Object.keys(items).map(key => {
          const itemMods = {
            [cls.active]: key === activeValue
          }

          return (
            <li 
              key={key}
              className={classNames(cls.item, itemMods)}
              onClick={changeValue(key)}
            >
              {items[key]}
            </li>
          )
        })}
      </ul>
    </div>
  )
})

export const SidebarSkeleton = () => {
  return (
    <div className={cls.skeleton}>
      {Array.from({ length: 7 }, (_, idx) => (
        <Skeleton key={idx} width="100%" height="36px" border="18px" />
      ))}
    </div>
  )
}