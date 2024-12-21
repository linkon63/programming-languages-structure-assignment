#include < stdio.h >
#include < stdlib.h >

    int main() {
    // Declare an integer variable and initialize it
    int var = 10;

    // Declare a pointer and assign it the address of 'var'
    int * ptr = &var ;

    // Dereferencing the pointer to print the value of 'var'
    printf("Value of var: %d\n", * ptr);  // Output: 10

    // Change the value of 'var' using the pointer
    * ptr = 20;
    printf("Updated value of var: %d\n", var);  // Output: 20

    // Dynamically allocate memory for an integer
    int * dyn_ptr = (int *)malloc(sizeof(int));
    if (dyn_ptr == NULL) {  // Check if malloc failed
        fprintf(stderr, "Memory allocation failed\n");
        return 1;  // Return with error code
    }

    // Assign a value to the dynamically allocated memory
    * dyn_ptr = 30;
    printf("Dynamically allocated value: %d\n", * dyn_ptr);  // Output: 30

    // Free the dynamically allocated memory
    free(dyn_ptr);
    dyn_ptr = NULL;  // Avoid dangling pointer

    return 0;
}
