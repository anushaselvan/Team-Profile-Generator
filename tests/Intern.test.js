const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Get intern school name", () => {
        const intern = new Intern("abc", 1, "abc@gmail.com", "abc");
        expect(intern.getSchool()).toEqual(expect.any(String));
    });
    it("Get employee role", () => {
        const intern = new Intern("abc", 1, "abc@gmail.com","abc");
        expect(intern.getRole()).toEqual("Intern");
    });
});