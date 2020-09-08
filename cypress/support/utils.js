
    function randomtext() {
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `testname${id}@hotmail.com`
        return testname;
   }