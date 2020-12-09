const enhancer = require('./enhancer.js');
const { TestScheduler } = require('jest');
// test away!

describe("enhancer tests", () => {
    describe('tests repair', () => {
        test('tests repair functionality', () => {
            const item = enhancer.repair({itemName: "sword", durability: 50, enhancement: 15});
            const durability = item.durability;
            expect(durability).toBe(100);
        })
    })

    describe('tests success', () => {
        test('tests success functionality w/ enhancement lower than 20', () => {
            const item = enhancer.success({itemName: "sword", durability: 50, enhancement: 15});
            const enhancement = item.enhancement;
            expect(enhancement).toBe(16);
        });
        test('tests success functionality w/ enhancement at 20', () => {
            const item = enhancer.success({itemName: "sword", durability: 50, enhancement: 20});
            const enhancement = item.enhancement;
            expect(enhancement).toBe(20);
        })
    })

    describe('tests fail', () => {
        test('tests failure w/ durability less than 15', () => {
            const item = enhancer.fail({itemName: "sword", durability: 50, enhancement: 14});
            const durability = item.durability;
            expect(durability).toBe(45);
        });
        test('tests failure w/ enhancement at 15', () => {
            const item = enhancer.fail({itemName: "sword", durability: 50, enhancement: 15});
            const durability = item.durability;
            expect(durability).toBe(40);
        });
        test('tests failure w/ enhancement greater than 16', () => {
            const item = enhancer.fail({itemName: "sword", durability: 50, enhancement: 18});
            const enhancement = item.enhancement;
            expect(enhancement).toBe(17);
        }) 
    })
})