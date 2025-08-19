const data = [
    {
        id: 101,
        name: "Ashwini",
        age: 22
    }, {
        id: 102,
        name: "Ramchandra",
        age: 55
    }, {
        id: 103,
        name: "Vadkar",
        age: 80
    }
];

const func = (id) => {
    for (var i = 0; i < data.length; i++) {
        if (id == data[i].id) {
            return data[i];
        }
    }

    return { error: "Invalid Id!!" };
};

function toUpperCase(name) {
    return name.toUpperCase();
}
function processData(data, callback) {
    console.log("Processing data...");
    setTimeout(() => {
        data.name = toUpperCase(data.name);
        callback(data);
    }, 2000);


}
function fetchData(url, callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const parts = url.split("/");
        const fetchData = func(parts[2]);
        callback(fetchData);
    }, 3000);

}

fetchData("api/data/101", (fetchData) => {
    console.log("fetchData: ", fetchData);
    if (fetchData.error) {
        console.log("Error ocurred during fetching data");
        console.error(fetchData.error);
    } else {
        processData(fetchData, (processData) => {
            console.log("Processed Data:", processData);
        });
    }
});