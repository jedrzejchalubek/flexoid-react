export const breakpointable = breakpoints => {
  return props => {
    const composition = {}

    Object.keys(props).map(prop => {
      let structure = {}

      props[prop].map((value, index) => {
        if (index === 0) {
          structure[prop] = value
        } else {
          if (breakpoints[index - 1]) {
            structure[breakpoints[index - 1]] = { [prop]: value }
          }
        }
      })

      composition[prop] = structure
    })

    return composition
  }
}
