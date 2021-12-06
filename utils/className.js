function className(...args) {
  return args.filter(Boolean).join(" ");
}

export default className;