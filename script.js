const reflexiveBtn = document.getElementById("reflexive");
const antiReflexiveBtn = document.getElementById("anti-reflexive");
const symmetricalBtn = document.getElementById("symmetrical");
const antiSymmetrical = document.getElementById("anti-symmetrical");

const result = document.getElementById("result");

const stringToArray = (str) => {
    return str.split(",").map((item) => +item);
};

const isReflexive = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][i]);
            if (arr[i][i] === 0) return false;
        }
    }
    return true;
};

const isAntiReflexive = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][i] === 1) return false;
        }
    }
    return true;
};

const isSymmetrical = (arr) => {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if ((arr[i][j] === 0 && arr[j][i] === 1 && i !== j) || (arr[i][j] === 1 && arr[j][i] === 0 && i !== j)) {
                pairs.push(false);
            }
            if (arr[i][j] === 1 && arr[j][i] === 1 && i !== j) {
                pairs.push([
                    [i + 1, j + 1],
                    [j + 1, i + 1],
                ]);
            }
        }
    }
    console.log(pairs);
    if (pairs.includes(false) || !pairs.length) {
        return false;
    }
    return true;
};

const isAntiSymmetrical = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 1 && arr[j][i] === 1 && i !== j) return false;
        }
    }
    return true;
};

reflexiveBtn.addEventListener("click", () => {
    const inputA = document.getElementById("a").value;
    const inputB = document.getElementById("b").value;
    const inputC = document.getElementById("c").value;
    const inputD = document.getElementById("d").value;
    const inputE = document.getElementById("e").value;

    const matrix = [stringToArray(inputA), stringToArray(inputB), stringToArray(inputC), stringToArray(inputD), stringToArray(inputE)];

    result.innerHTML = "Reflexive: " + isReflexive(matrix);
});

antiReflexiveBtn.addEventListener("click", () => {
    const inputA = document.getElementById("a").value;
    const inputB = document.getElementById("b").value;
    const inputC = document.getElementById("c").value;
    const inputD = document.getElementById("d").value;
    const inputE = document.getElementById("e").value;

    const matrix = [stringToArray(inputA), stringToArray(inputB), stringToArray(inputC), stringToArray(inputD), stringToArray(inputE)];

    result.innerHTML = "Anti-reflexive: " + isAntiReflexive(matrix);
});

symmetricalBtn.addEventListener("click", () => {
    const inputA = document.getElementById("a").value;
    const inputB = document.getElementById("b").value;
    const inputC = document.getElementById("c").value;
    const inputD = document.getElementById("d").value;
    const inputE = document.getElementById("e").value;

    const matrix = [stringToArray(inputA), stringToArray(inputB), stringToArray(inputC), stringToArray(inputD), stringToArray(inputE)];

    result.innerHTML = "Symmetrical: " + isSymmetrical(matrix);
});

antiSymmetrical.addEventListener("click", () => {
    const inputA = document.getElementById("a").value;
    const inputB = document.getElementById("b").value;
    const inputC = document.getElementById("c").value;
    const inputD = document.getElementById("d").value;
    const inputE = document.getElementById("e").value;

    const matrix = [stringToArray(inputA), stringToArray(inputB), stringToArray(inputC), stringToArray(inputD), stringToArray(inputE)];

    result.innerHTML = "Anti-symmetrical: " + isAntiSymmetrical(matrix);
});
