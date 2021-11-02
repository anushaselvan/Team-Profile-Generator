const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Get manager office number", () => {
        const manager = new Manager("abc", 1, "abc@gmail.com", 2);
        expect(manager.getOfficenumber()).toEqual(expect.any(Number));
    });
    it("Get employee role", () => {
        const manager = new Manager("abc", 1, "abc@gmail.com", 2);
        expect(manager.getRole()).toEqual("Manager");
    });
});