export function CleanParams() {
  return (
    target: any,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      Object.keys(args[0]).forEach(
        _key =>
          (args[0][_key] === null ||
            args[0][_key] === "null" ||
            args[0][_key] === "" ||
            args[0][_key] === undefined ||
            args[0][_key] === "undefined") &&
          delete args[0][_key]
      );
      const result = original.apply(this, args);
      return result;
    };
    return descriptor;
  };
}
