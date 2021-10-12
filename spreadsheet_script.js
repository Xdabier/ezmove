const myEmail = "ezmove.contact@gmail.com";
const myName = "EzMove Leads";
const mySubject = "New EzMove lead!";

function doPost(e) {
  return handleResponse(e);
}

var SCRIPT_PROP = PropertiesService.getScriptProperties();

function handleResponse(e) {
  var lock = LockService.getPublicLock();
  lock.waitLock(30000);

  try {
    var sheet = SpreadsheetApp.getActiveSheet();

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1; // get next row
    var row = [];

    function findIfExists(phone) {
      for (var i = 2; i <= sheet.getLastRow(); i++) {
        const row = sheet.getRange(i, 1, 1, sheet.getLastColumn()).getValues()[0];
        const exists = row.findIndex(x => `${x}` === `${phone}`);

        if (exists >= 0) {
          return true;
        }
      }

      return false;
    }

    if (findIfExists(e.parameter["phone"])) {
      return ContentService
        .createTextOutput(JSON.stringify({
          "result": "error",
          "error": "value exists"
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    // loop through the header columns
    for (i in headers) {
      if (headers[i] === "date" && !e.parameter[headers[i]]) {
        continue;
      }
      row.push(e.parameter[headers[i]]);
    }
    // more efficient to set values as [][] array than individually
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);

    //send me email notification
    sendEmail(myEmail, mySubject, myName, "You just got a new lead! <br> <br> ", e.parameter);

    // return json success results
    return ContentService
      .createTextOutput(JSON.stringify({
        "result": "success"
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    // if error return this
    return ContentService
      .createTextOutput(JSON.stringify({
        "result": "error",
        "error": err,
        "e": e
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally { //release lock
    lock.releaseLock();
  }
}

function setup() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  SCRIPT_PROP.setProperty("key", doc.getId());
}

function sendEmail(email, title, name, htmlBody, data) {

  var body = "";
  if (data) {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        body = body + `<b>${key}</b> : ${data[key]}<br/>`;
      }
    }

    body = body + `<b>Shit url</b> : <a href="https://docs.google.com/spreadsheets/d/1ghrUWfUmmzwX-0Um2zKVLrajOGRgwbhzp4s2tkKjk-c/edit?usp=sharing">EzMove Leads</a><br/>`;
  }


  GmailApp.sendEmail(email, title, "", {
    "name": name,
    "htmlBody": `${htmlBody} ${body}`,
    "from": myEmail
  });
}

