// let b = Buffer.from('中')
// console.log(b.toString())  //toString是将buffer中的数据转成字符串；当它没有写东西时，默认是utf8
// console.log(b.toString('utf8'))

// let b = Buffer.from('中')
// console.log(b.toString("base64"))  //5Lit

// 当使用base64时一个汉字 "中"有三个字节 得到5Lit的转变过程
// let b = Buffer.from('中')
//1，16进制 <Buffer e4 b8 ad>
// console.log(b) 
// console.log(b.toString("base64"))  //5Lit

// 2，将16进制转成2进制  0x打头表示一个16进制的数  (0xe4).toString(2)意味着将16进制的数转成2进制
// console.log((0xe4).toString(2)) //11100100
// console.log((0xb8).toString(2)) //10111000
// console.log((0xad).toString(2)) //10101101

// "中"是一个汉字，有三个字节，转成二进制24位 111001001011100010101101  3*8 = 4*6（base64）  
// 3，（base64） 为得到 4*6 111001 001011 100010 101101  但是每个字节要8位  补0  00111001 00001011 00100010 00101101得到这样的二进制，使其从二进制转成10进制
// console.log(parseInt('00111001',2)) //57
// console.log(parseInt('00001011',2)) //11
// console.log(parseInt('00100010',2)) //34
// console.log(parseInt('00101101',2)) //45

// 4，拿到base64的字符串；再通过数组形式，拿到汉字"中"的字符串
// ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// str+=str.toLowerCase(); //转成小写字母
// str+="0123456789+/";
// // console.log(str);
// // 想要拿到某个数对应字符，可通过数组形式  拿到汉字"中"的字符串
// console.log(str[57]+str[11]+str[34]+str[45]);























