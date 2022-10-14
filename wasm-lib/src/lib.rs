use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn calculator(a: i32, b: i32) -> i32 {
    a + b
}

#[wasm_bindgen]
pub fn fibonacci(n: i32) -> i32 {
    if n <= 1 {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

#[test]
fn cal_test() {
    assert_eq!(1 + 1, calculator(1, 1));
}

#[test]
fn fib_test() {
    assert_eq!(1, fibonacci(1));
    assert_eq!(1, fibonacci(2));
    assert_eq!(2, fibonacci(3));
    assert_eq!(3, fibonacci(4));
    assert_eq!(5, fibonacci(5));
    assert_eq!(8, fibonacci(6));
}