function createProxy() {
  return new Proxy(() => {}, {
    get: createProxy,
  });
}

export default createProxy();
