// Synchronous
    // writeFileSync
        // used for creating a file if it doesn't exist, otherwise add content to the file
    // appendFileSync
        // to add the content at the end of the existing file
    // unlinkSync
        // to delete the file

// Asynchronous (callback or async/await)
    // writeFile
        // used for creating a file if it doesn't exist, otherwise add content to the file
    // appendFile
        // to add the content at the end of the existing file
    // unlink
        // to delete the file

// CRUD - Create / Read / Update / Delete
    // 1st Step - CRUD on Files
    // 2nd Step - CRUD on Single file on the DATA inside

const fs = require('fs');
// console.log(fs);

////////////////////////////////////////////////////////////////////////////////////////////////

// // Creating a File using synchronized process
// console.log("Before Creating a File");
// function creatAFileSync() {
//     fs.writeFileSync("sample1.txt", "New CODE...");
//     console.log("File has been created!!!");
// }
// creatAFileSync();
// console.log("After Creating a File");

////////////////////////////////////////////////////////////////////////////////////////////////

// // Creating a File using asynchronized process
// console.log("Before Creating a File");
// function createAFile() {
//     // using callback
//     fs.writeFile("sample2.txt", "Sample 2 Content", (err) => {
//         if(err) console.log(err);
//         console.log("File has been created!!!");
//     });
// }
// createAFile();
// console.log("After Creating a File");

////////////////////////////////////////////////////////////////////////////////////////////////

// // Read a file using synchronized process
// console.log("Before Reading a File");
// function readAFileSync() {
//     let data = fs.readFileSync("sample1.txt", "utf8");
//     console.log(data);
// }
// readAFileSync();
// console.log("After Reading a File");

// ////////////////////////////////////////////////////////////////////////////////////////////////

// // Read a file using asynchronized process
// console.log("Before Reading a File");
// function readAFile() {
//     fs.readFile("sample2.txt", "utf8", (err, result) => {
//         if(err) console.log(err);
//         console.log(result);
//     });
// }
// readAFile();
// console.log("After Reading a File");

// ////////////////////////////////////////////////////////////////////////////////////////////////

// // Append a file using synchronized process
// console.log("Before Updating a File");
// function updateAFileSync() {
//     fs.appendFileSync("sample3.txt", "New Data Added...");
//     console.log("File has been updated!!!");
// }
// updateAFileSync();
// console.log("After Updating a File");

// ////////////////////////////////////////////////////////////////////////////////////////////////

// // Append a file using asynchronized process
// console.log("Before Updating a File");
// function updateAFile() {
//     fs.appendFile("sample2.txt", "New Data Added...", (err) => {
//         if(err) console.log(err);
//         console.log("File has been updated!!!");
//     });
// }
// updateAFile();
// console.log("After Updating a File");

////////////////////////////////////////////////////////////////////////////////////////////////

// // Delete a file using synchronized process
// console.log("Before Deleting a File");
// function deleteAFileSync() {
//     try {
//         fs.unlinkSync("sample1.txt");
//         console.log("File has been deleted!!!");
//     } catch(err) {
//         console.log(err.message);
//     }
// }
// deleteAFileSync();
// console.log("After Deleting a File");

////////////////////////////////////////////////////////////////////////////////////////////////

// // Delete a file using asynchronized process
// console.log("Before Deleting a File");
// function deleteAFile() {
//     fs.unlink("sample2.txt", (err) => {
//         if(err) console.log(err);
//         console.log("File has been deleted!!!");
//     });
// }
// deleteAFile();
// console.log("After Deleting a File");