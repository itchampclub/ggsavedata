var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1_o6VEDP8XMFzb7xerS1jkdt94_if88chqQuZwzZOxFc/edit");
var sNoti = ss.getSheetByName("noti-userId");
    

function doPost(e) {
    let data = JSON.parse(e.postData.contents)
    let userMsg = data.originalDetectIntentRequest.payload.data.message.text;
    let userID = "Ua8642279498fc02ae72bf76f9ba80e55";

    var bubble = '';  
    var carousel = [];     

    if(userMsg == "flex"){
      let sNoti = sheetNoti.getRange(2, 1, sheetData.getLastRow(),sheetData.getLastColumn()).getValues();
      for(let i=0;i<sNoti.length;i++){
        if(userID == sNoti[i][2]){
          bubble =  {
              "type": "bubble",
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "data",
                    "align": "center"
                  }
                ]
              }
            },carousel.push(bubble); 
        }
      }

////////////////วางไว้ใต้ }  end for loop////////////
  var result = {
          "fulfillmentMessages": [
            {
              "platform": "line",
              "type": 4,
              "payload" : {
                "line":  {
                  "type" : "flex",
                   "altText": "ทะเบียนสรรพสามิต",
                    "contents": {
                      "type": "carousel",
                      "contents": carousel
                    }
                }
              }
            }
          ]
        };
  let replyJSON = ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
  return replyJSON;
//////////////////////////////////////////////////

   }
}