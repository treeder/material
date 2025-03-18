export function queryAssignedElements(component, options) {
  const { slot, selector } = options ?? {}
  const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`

  const slotEl = component.renderRoot?.querySelector(slotSelector)
  const elements = slotEl?.assignedElements(options) ?? []
  return (selector === undefined
    ? elements
    : elements.filter((node) => node.matches(selector)))
}

export function queryAssignedNodes(component, options) {
  const { slot } = options ?? {}
  const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`
  const slotEl = component.renderRoot?.querySelector(slotSelector)
  return (slotEl?.assignedNodes(options) ?? [])
}