function add(a: number, b: number) {
    return a + b;
}

describe('测试加法', () => {
    it('add(1,2) 等于 3', () => {
        expect(add(1, 2)).toEqual(3);
    });
});