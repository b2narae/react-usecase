class UserStorage {
    loginUser(id, pw, onSuccess, onError) {
        setTimeout( () => {
            if (id === 'taekhwan' && pw === 'dream') {
                onSuccess(id)
            } else {
                onError(new Error("No registration"));
            }
        }, 2000);
    }
    getRoles(id, onSuccess, onError) {
        setTimeout(() => {
            if (id === 'taekhwan') {
                onSuccess({ name: 'taekhwan', role: 'manager'});
            } else {
                onError(new Error("No Role"));
            }
        }, 1000);       
    };
}

const userStorage = new UserStorage();
const id = prompt("id");
const pw = prompt("pw");

userStorage.loginUser(
    id,
    pw,
    (enteredId) => {
        userStorage.getRoles(enteredId, 
            (userRole) => {
                alert(`Hello, ${userRole.name}. You are ${userRole.role}!`);
            },
            (errorMessage) => {console.log(errorMessage)}
        );
    },
    (loginError) => {
        console.log(loginError);
    }
)