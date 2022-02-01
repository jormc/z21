import { Z21Client } from "./z21Client";

// LAN COMMANDS
const LAN_GET_SERIAL_NUMBER: string = "04001000";
const LAN_LOGOFF: string = "04003000";
const LAN_X_GET_VERSION: string = "07004000212100";
const LAN_X_GET_STATUS: string = "07004000212405";
const LAN_X_SET_TRACK_POWER_OFF: string = "07004000212405";
const LAN_X_SET_TRACK_POWER_ON: string = "070040002180a1";

var client = new Z21Client();

console.log("Requesting for Z21 serial number...\n");
client
  .sendRequest(Buffer.from(LAN_GET_SERIAL_NUMBER, "hex"))
  .then((response) => {
    console.log("\nZ21 serial number:", response);

    // Z21 DataSet
    // DataLen (2 Byte), Header (2 Byte), Data (n Bytes)
    // ------------------------------------------
    // | DataLen (2B) | Header (2B) | Data (nB) |
    // ------------------------------------------

    if (response.length === 8) {
      var dataLen = response.slice(0, 2);
      var header = response.slice(2, 4);
      var data = response.slice(4);
      console.log("-------------------------------");
      console.log("| DataLen | Header |   Data   |");
      console.log("-------------------------------");
      console.log(
        "|  ",
        dataLen.toString("hex"),
        " | ",
        header.toString("hex"),
        " |",
        data.toString("hex"),
        "|"
      );
      console.log("-------------------------------");
      console.log(
        "|    " +
          dataLen.readUInt8() +
          "    |   " +
          header.readUInt8() +
          "   |  " +
          data.readUInt32LE() +
          "  |"
      );
      console.log("-------------------------------");
    }
  });
