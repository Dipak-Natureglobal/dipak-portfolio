
import * as React from "react";
import { cn } from "../../lib/utils";

const Card = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
      {...rest}
    />
  );
});
Card.displayName = "Card";

const CardContent = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={cn("p-6 pt-0", className)}
      {...rest}
    />
  );
});
CardContent.displayName = "CardContent";

export { Card, CardContent };
