console.log("Hello World");

describe("myFunction", function() {
    it("should add the class 'dark-mode' to the <body> element when the function is called", function() {
        // Arrange
        var element = document.body;
        var originalClassList = element.classList;
        var expectedClassList = new Set(["dark-mode"]);

        // Act
        myFunction();

        // Assert
        expect(element.classList).toEqual(expectedClassList);
    });
});