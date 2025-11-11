export function DefaultDict<T, TKey extends symbol | string | number>(
  generator: () => T
): Record<TKey, T> {
  return new Proxy({} as Record<TKey, T>, {
    get(target, name) {
      if (name in target) return target[name as TKey]
      const defaultValue = generator()
      target[name as TKey] = defaultValue
      return defaultValue
    },
  });
}

