function soma(a, b) {
  return a + b;
}

test('if I call soma(4,5) it should return 9', () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
