import classNames from "classnames";

function Skeleton({ times, className }) {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-current",
    "text-slate-200",
    "rounded",
    "mb-2.5",
    className
  );
  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-current",
    "via-white",
    "to-current"
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });

  return boxes;
}

export default Skeleton;
