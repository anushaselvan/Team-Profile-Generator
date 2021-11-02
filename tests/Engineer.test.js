const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Get engineer GitHub username", () => {
        const engineer = new Engineer("abc", 1, "abc@gmail.com", "abc");
        expect(engineer.getGitHub()).toEqual(expect.any(String));
    });
    it("Get employee role", () => {
        const engineer = new Engineer("abc", 1, "abc@gmail.com","abc");
        expect(engineer.getRole()).toEqual("Engineer");
    });
});