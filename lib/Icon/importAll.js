function importAll(r) {
  return r.keys().map(r);
}

try {
  importAll(require.context('../../icons/', true, /\.svg$/));
} catch (error) {
  console.log(error);
}
