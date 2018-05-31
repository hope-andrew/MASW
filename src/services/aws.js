import aws from 'aws-sdk';

// aws.config.update({
//   region: 'us-east-1',
//   credentials: {
//     accessKeyId: 'AKIAIRRFRCW24VLH7OOA',
//     secretAccessKey: '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',
//   },
// });
//
// const ddb = new aws.DynamoDB({apiVersion: '2012-10-08'})
//
//
// // const sign = (filename, filetype ) => {
// //   var s3 = new aws.S3();
// //
// //   var params = {
// //       Bucket: SOME_BUCKET,
// //       Key: filename,
// //       Expires: 60,
// //       ContentType: filetype
// //   };
// //
// //   s3.getSignedUrl(‘putObject’, params, function(err, data) {
// //       if (err) {
// //           console.log(err);
// //           return err;
// //       } else {
// //           return data;
// //       }
// //   });
// // }
//
// const getItem = () => {
//   const params = {
//     TableName: 'Music',
//     Key: {"Artist": "Prince"},
//     // ProjectionExpression: 'Year'
//   }
//
//   ddb.getItem(params, (err, data) => {
//     if (err) {
//       console.log('Error : ', err);
//       return data
//     } else {
//       console.log('Succcess')
//       console.log(data)
//       return data
//     }
//   })
// }
//
// const queryTable = () => {
//   const params = {
//     TableName: 'Music',
//     KeyConditionExpression: 'Artist = :a',
//     ExpressionAttributeValues: {
//       ':a': {S: 'Prince'},
//     }
//   }
//
//   ddb.query(params, (err, data) => {
//     if (err) {
//       console.log('Error : ', err);
//       return data
//     } else {
//       console.log('Succcess')
//       console.log(data)
//       return data
//     }
//   })
// }
//
// const scanTable = () => {
//   const params = {
//     TableName: 'Music',
//     // KeyConditionExpression: 'Artist = :a',
//     ExpressionAttributeValues: {
//       ":artist": {
//         S: "Prince",
//       },
//       ":album" : {
//         S: "Purple Rain",
//       }
//     },
//     FilterExpression: "contains (Artist, :artist) and contains (Album, :album)",
//   }
//
//   ddb.scan(params, (err, data) => {
//     if (err) {
//       console.log('Error : ', err);
//       return data
//     } else {
//       console.log('Succcess')
//       console.log(data)
//       return data
//     }
//   })
// }
//
export default { }
