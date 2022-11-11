const getRandomId = require('./index');

test('Функция должна вернуть строку', () => {
	const res = getRandomId(2);

	expect(typeof res).toBe('string');
});

test('Строка должна состоять из нужного количество блоков, по 4 случайных символа', () => {
	const res = getRandomId(5);

	expect(res.length).toBe(24);
});

test('Строка должна соответствовать чёткому паттерну', () => {
	const res = getRandomId(4);
	const arr = res.split('-');

	expect(res[4] === '-' && res[9] === '-' && res[14] === '-').toBeTruthy();
	expect(arr.length).toBe(4);

	for (const block of arr) {
		for (let char of block) {
			expect(char === '-').toBeFalsy();
		}
	}
});

test('Тест. 100 итераций', () => {
	const ids = [];

	for (let i = 0; i < 100; i++) {
		const res = getRandomId(2);

		expect(ids.includes(res)).toBeFalsy();
		ids.push(res);
	}
});

test('Тест. 1000 итераций', () => {
	const ids = [];

	for (let i = 0; i < 1000; i++) {
		const res = getRandomId(2);

		expect(ids.includes(res)).toBeFalsy();
		ids.push(res);
	}
});