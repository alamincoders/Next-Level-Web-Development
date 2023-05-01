"use strict";
const user = {
    name: "Leanne Graham",
    username: "Bret",
    company: {
        name: "Romaguera-Crona",
        // catchPhrase: "Multi-layered client-server neural-net",  ---- 🙄 error
        catchPhrase: 632,
        // bs: "harness real-time e-markets",  -- no error- because it's a optional property
    },
};
// ?  ---- optional syntax
// user.company.name = "Nur Software";  ---  error : Cannot assign to 'name' because it is a read-only property.--
// Learning --- object, literal types, optional types in typescript
