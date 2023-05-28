import Button, { ButtonOwnerState, ButtonProps } from "@mui/base/Button";
import * as React from "react";

const MyButton = React.forwardRef(function MyButton(
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <Button
      {...props}
      slotProps={{
        root: (state: ButtonOwnerState) => ({
          className: `hover:text-cyan-500 transition-colors ${
            state.focusVisible ? "outline-0 ring-2 ring-cyan-500" : ""
          }`,
        }),
      }}
      ref={ref}
    />
  );
});

export default MyButton;
