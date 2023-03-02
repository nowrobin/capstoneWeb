// const { config, Group } = require("coolsms-sdk-v4");
// const conf = require("../config/smsconfig"); // smsconfig.json

// //////////////////////////////////////////////////////////////////////
// // Cool SMS API 설정
// //////////////////////////////////////////////////////////////////////
// config.init({
//   apiKey: conf.apiKey,
//   apiSecret: conf.apiSecret,
// });

// async function send(message: any, agent = {}) {
//   try {
//     var res = await Group.sendSimpleMessage(message, agent);
//     return res;
//   } catch (e) {
//     throw new Error(e);
//   }
// }

// //////////////////////////////////////////////////////////////////////
// // Cool SMS API 사용
// //////////////////////////////////////////////////////////////////////
// exports.sendSms = (req: any, res: any) => {
//   const number = req.body.number; // SMS 전송할 번호
//   const message = req.body.message; // SMS 전송할 메시지

//   console.log(" > number: " + number);
//   console.log(" > message: " + message);

//   try {
//     var res: any = send({
//       to: number,
//       text: message,
//       type: conf.type,
//       from: conf.from,
//     });
//     console.log(res);
//     res.json({ result: true });
//   } catch (e) {
//     console.log(e);
//     res.json({ result: false, message: "sms transmission failed" });
//   }
// };
