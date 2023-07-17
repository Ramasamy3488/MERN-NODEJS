const fs = require('fs');
const traineeFile = "./trainees.json";
const querystring = require('querystring');

// Read all Trainees
function readAllTrainees(req, res) {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if(err) console.log(err);

        console.log(data);
        res.write(JSON.stringify(data));
        res.end();
    });
}
// readAllTrainees();

// Read specific Trainee by Name/Email
function readTrainee(req, res) {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if(err) console.log(err);

        let body = "";
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            let qry = querystring.parse(body);

            let name = qry.name;
            let email = qry.email;
                        
            let result = JSON.parse(data);
            let output = result.filter(v => v.name === name && v.email === email);
            (output.length > 0) 
                ?
                (console.log(output), res.write(JSON.stringify(output)), res.end()) 
                : 
                (console.log("No Trainees Found!"), res.write("No Trainees Found!"), res.end());
        });
    });
}
// readTrainee("Tony", "tony@gmail.com");

// Add a new Trainee
function addTrainee(req, res) {
    const traineeObj = {
        "name": trainee[0],
        "email": trainee[1],
        "batch": trainee[2],
        "year": trainee[3],
        "timings": trainee[4]
    };
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if(err) console.log(err);

        let result = JSON.parse(data);
        let output = result.filter(v => v.email === traineeObj.email);
        if(output.length > 0) {
            console.log("Trainee already exists!");
        } else {
            result.push(traineeObj);
            fs.writeFile(traineeFile, JSON.stringify(result), (err) => {
                if(err) console.log(err);
                console.log("Trainee has been created!");
            });
        }
    });
}
// addTrainee("Raju", "raju@gmail.com", "January", "2023", "7-9pm");

// Update a specific Trainee
function updateTrainee(req, res) {
    const traineeObj = {
        "name": trainee[0],
        "email": trainee[1],
        "batch": trainee[2],
        "year": trainee[3],
        "timings": trainee[4]
    };
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if(err) console.log(err);

        let flag = false;

        let result = JSON.parse(data);
        let traineeData = result.map(v => {
            if(v.email === traineeObj.email) {
                let temp = {...v};
                for(let temp1 in traineeObj) {
                    temp[temp1] = traineeObj[temp1];
                }
                flag = true;
                return temp;
            }
            return v;
        });
        if(flag) {
            fs.writeFile(traineeFile, JSON.stringify(traineeData), (err) => {
                if(err) console.log(err);
                console.log("Trainee has been updated!");
            });
        } else {
            console.log("Trainee not found!");
        }
    });
}
// updateTrainee("Dinesh", "srinanoo@gmail.com", "January", 2023, "7-9pm");

// Delete a specific Trainee
function deleleteTrainee(req, res) {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if(err) console.log(err);

        let result = JSON.parse(data);
        let output = result.filter(v => v.email !== email);
        if(output.length < result.length) {
            fs.writeFile(traineeFile, JSON.stringify(output), (err) => {
                if(err) console.log(err);
                console.log("Trainee has been deleted!");
            });
        } else {
            console.log("Trainee not found!");
        }
    });
}
// deleleteTrainee("raju@gmail.com");

module.exports = {
    readAllTrainees,
    readTrainee,
    addTrainee,
    updateTrainee,
    deleleteTrainee
}