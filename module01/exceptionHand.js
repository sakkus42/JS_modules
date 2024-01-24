try {
    console.log(value);
} catch (err) {
    console.log("Catch Run: %s", err.value);
    console.log("Catch Run: %s", err.message);
} finally {
    console.log("the finally block always works");
}

