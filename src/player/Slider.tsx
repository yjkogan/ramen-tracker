import Slider, { SliderProps, SliderThumbSlotProps } from "@mui/base/Slider";
import * as React from "react";

const Thumb = React.forwardRef(function Thumb(
  props: SliderThumbSlotProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) {
  const { ownerState, className = "", children, ...other } = props;
  return (
    <span
      className={`${className} absolute -ml-2 -mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow ring-2 ring-cyan-500 dark:ring-cyan-400`}
      {...other}
      ref={ref}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 ring-1 ring-inset ring-slate-900/5 dark:bg-cyan-400"></span>
      {children}
    </span>
  );
});

const MySlider = React.forwardRef(function MySlider(
  props: SliderProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) {
  return (
    <Slider
      {...props}
      className="my-class-name"
      ref={ref}
      slots={{
        thumb: Thumb,
      }}
      slotProps={{
        root: { className: "w-full relative inline-block h-2 cursor-pointer" },
        rail: {
          className:
            "bg-slate-100 dark:bg-slate-700 h-2 w-full rounded-full block absolute",
        },
        track: {
          className: "bg-cyan-500 dark:bg-cyan-400 h-2 absolute rounded-full",
        },
      }}
    />
  );
});

export default MySlider;
