const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Initialization", () => {
        const employee = new Employee();
        expect(typeof employee).toBe("object");
    });
    it("should create an instance of employee object", () => {
        const employee = new Employee("abc", 1, "abc@gmail.com");
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });
    it("Get employee name", () => {
        const employee = new Employee("abc", 1, "abc@gmail.com");
        expect(employee.getName()).toEqual(expect.any(String));
    });
    it("Get employee ID", () => {
        const employee = new Employee("abc", 1, "abc@gmail.com");
        expect(employee.getId()).toEqual(expect.any(Number));
    });

    it("Get employee email", () => {
        const employee = new Employee("abc", 1, "abc@gmail.com");
        expect(employee.getEmail()).toEqual(expect.any(String));
    });
    it("Get employee role", () => {
        const employee = new Employee("abc", 1, "abc@gmail.com");
        expect(employee.getRole()).toEqual("Employee");
    });
});