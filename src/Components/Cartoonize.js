const http = require("https");

const options = {
  method: "POST",
  hostname: "cartoon-yourself.p.rapidapi.com",
  port: null,
  path: "/facebody/api/portrait-animation/portrait-animation",
  headers: {
    "content-type": "multipart/form-data; boundary=---011000010111000001101001",
    "X-RapidAPI-Key": "0eb3e1bbe8msh6f842f790fccdcdp16dbe0jsn61b893c42b88",
    "X-RapidAPI-Host": "cartoon-yourself.p.rapidapi.com"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(
  '-----011000010111000001101001\r\nContent-Disposition: form-data; name="image"\r\n\r\n\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="type"\r\n\r\n<REQUIRED>\r\n-----011000010111000001101001--\r\n\r\n'
);
req.end();
