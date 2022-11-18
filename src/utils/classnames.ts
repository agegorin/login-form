export default function classnames(...args: ({[name: string]: boolean | undefined} | string)[]): string {
  return args.map((arg) => {
    if (typeof arg === "object") {
      const nextClassnames = [];
      for (const classname in arg) {
        // eslint-disable-next-line no-prototype-builtins
        if( arg.hasOwnProperty(classname) && arg[classname] ) {
          nextClassnames.push(classname);
        }
      }
      return classnames(...nextClassnames);
    }
    return  arg;
  }).join(" ");
}
