import React from "react";

import { cn } from "../../lib/utils";

const Input = React.forwardRef((props, ref) => {
  const { className, type, ...rest } = props;
  return (
    <input
      type={type}
      className={cn(
        " flex h-[48px] w-full items-center justify-between rounded-md border border-white/10 bg-primary px-4 py-5 text-base text-white/60 outline-none  placeholder:text-white/60 focus:border-[#ADFF2F] ",
      className
      )}
      ref={ref}
      {...rest}
    />
  );
});
Input.displayName = "Input";

export { Input };

