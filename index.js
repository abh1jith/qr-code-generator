import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {message: "Enter the link for the QR code to be generated:",
    name: "name",
},
  ])
  .then((answers) => {
    var url = answers.name;
    console.log(url);
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('aNewQR.png'));

    fs.writeFile("userURL.txt", url, 'utf8', (err) => {
        console.log(err);
});
  })