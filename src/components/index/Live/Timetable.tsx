import s from "../Highlights/Highlights.module.css";
import React from "react";

export const Timetable = ({...restProps}) => {
  return (
    <div {...restProps}>
      <object className="mt-4 w-295px h-487px md:w-594px md:h-965px" data="./vectors/Timetable12.svg" type="image/svg+xml"/>
      <object className="mt-4 w-295px h-487px md:w-594px md:h-965px" data="./vectors/Timetable13.svg" type="image/svg+xml"/>
    </div>
  )
}
