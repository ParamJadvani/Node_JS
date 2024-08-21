const fs = require("fs");
const prompt = require("prompt-sync")();

const fileOperations = () => {
  console.log("--- FS MODULES ---");
  console.log(
    "1) Create File\n2) Read File\n3) Rename File\n4) Delete File\n5) Append File\n0) Exit\n"
  );

  const choice = parseInt(prompt("Enter your choice: "));

  switch (choice) {
    case 0:
      console.log("Exiting...");
      return;
    case 1:
      const filename = prompt("Please enter a file name: ");
      const content = prompt("Please enter file content: ");
      fs.writeFile(filename, content ? content : "Hello World!", (err) => {
        if (err) throw err;
        console.log(`File ${filename} has been created.`);
      });
      break;

    case 2:
      const readFileName = prompt("Please enter the file name to read: ");
      fs.readFile(readFileName, "utf-8", (err, data) => {
        if (err) throw err;
        console.log(data);
      });
      break;

    case 3:
      const oldFileName = prompt("Please enter the old file name: ");
      const newFileName = prompt("Please enter the new file name: ");
      fs.rename(oldFileName, newFileName, (err) => {
        if (err) throw err;
        console.log(`File ${oldFileName} has been renamed to ${newFileName}.`);
      });
      break;

    case 4:
      const deleteFileName = prompt("Please enter the file name to delete: ");
      fs.unlink(deleteFileName, (err) => {
        if (err) throw err;
        console.log(`File ${deleteFileName} has been deleted.`);
      });
      break;

    case 5:
      const appendFileName = prompt("Please enter the file name to append: ");
      const appendContent = prompt("Please enter the content to append: ");
      fs.appendFile(
        appendFileName,
        appendContent ? appendContent : "Hello World !",
        (err) => {
          if (err) throw err;
          console.log(`Content has been appended to ${appendFileName}.`);
        }
      );
      break;

    default:
      console.log("Invalid choice! Please try again.");
      break;
  }

  fileOperations();
};

fileOperations();
