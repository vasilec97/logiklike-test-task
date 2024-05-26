import { FC, memo } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton"
import cls from "./Sidebar.module.scss"
import { useMediaQuery } from "@/shared/lib/hooks/useMediaQuery/useMediaQuery"

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
  const mobile = useMediaQuery('(max-width: 769px)')

  return (
    <div className={cls.skeleton}>
      {!mobile 
        ? Array.from({ length: 7 }, (_, idx) => (
          <Skeleton key={idx} width="100%" height="36px" border="18px" />
        ))
        : Array.from({ length: 8 }, (_, idx) => (
          <Skeleton key={idx} width="calc(33% - 5.33333px)" height="24px" border="12px" />  
        ))
      }
    </div>
  )
}