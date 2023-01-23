const { encode, decode } = require('./script');

test('Testa a função encode', () => {
  expect(encode('aeiou')).toEqual('12345');
});
test('Testa a função decode', () => {
  expect(decode('12345')).toEqual('aeiou');
});
test('Testa se as demais letras não são convertidas na função encode', () => {
  expect(encode('aeioubcdf')).toEqual('12345bcdf');
});
test('Testa se os demais números não sao convertidos na função decode', () => {
  expect(decode('12345678')).toEqual('aeiou678');
});
test('Testa o length do retorno da função encode', () => {
  expect(encode('ana').length).toEqual('1n1'.length);
});
test('Testa o length do retorno da função decode', () => {
  expect(decode('12345').length).toEqual('aeiou'.length);
});
