// Union-like class in JavaScript
class Union {
    constructor() {
        this.intValue = null;    // To store an integer value
        this.floatValue = null;  // To store a floating-point value
        this.stringValue = null; // To store a string value
    }

    // Method to set an integer value
    setInt(value) {
        this.intValue = value;
        this.floatValue = null;
        this.stringValue = null;
    }

    // Method to set a floating-point value
    setFloat(value) {
        this.floatValue = value;
        this.intValue = null;
        this.stringValue = null;
    }

    // Method to set a string value
    setString(value) {
        this.stringValue = value;
        this.intValue = null;
        this.floatValue = null;
    }

    // Method to display the current value
    display() {
        if (this.intValue !== null) {
            console.log(`Integer: ${this.intValue}`);
        } else if (this.floatValue !== null) {
            console.log(`Float: ${this.floatValue}`);
        } else if (this.stringValue !== null) {
            console.log(`String: ${this.stringValue}`);
        } else {
            console.log("No value set.");
        }
    }
}

// Testing the Union-like class
let u = new Union();

u.setInt(10);
u.display(); // Displays: Integer: 10

u.setFloat(3.14);
u.display(); // Displays: Float: 3.14

u.setString("PLS Assignments");
u.display(); // Displays: String: PLS Assignments
