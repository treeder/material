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

// function version of Lit queryAsync: https://github.com/lit/lit/blob/12109c25997ef03180d7eefe05c64e0fb20dd2b0/packages/reactive-element/src/decorators/query-async.ts#L54
export async function queryAsync(component, selector) {
  await component.updateComplete // queryAsync
  return component.renderRoot?.querySelector(selector)
}