export function createAction (type, payload = {}, error = false) {
  return { type, payload, error }
}