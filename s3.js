
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

async function s3obj() {
    // store something
    await s3.putObject({
        Body: JSON.stringify({ key: "value?" }),
        Bucket: "cyclic-gleaming-wrap-hare-us-west-2",
        Key: "some_files/my_file.json",
    }).promise();

    // get it back
    let my_file = await s3.getObject({
        Bucket: "cyclic-gleaming-wrap-hare-us-west-2",
        Key: "some_files/my_file.json",
    }).promise();

    console.log(JSON.parse(my_file.Body.toString()));
}
s3obj();