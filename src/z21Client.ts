import dgram from "dgram";

class Z21Client {

  private _port: number;
  private _address: string;

  public constructor(address: string = "192.168.0.111", port: number = 21105) {
    this._address = address;
    this._port = port;
  }

  public sendRequest(command: Buffer): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
      const client = dgram.createSocket("udp4");

      // Event on client listening
      client.on("listening", () => {
        var address = client.address();
        /*console.log(
          "UDP client listening on " + address.address + ":" + address.port
        );*/
      });

      // Handle client requests from server responses
      client.on("message", (msg, info) => {
        console.log("[Z21Client] Response message:", msg);
        console.log("[Z21Client] Response info:", info);
        client.close();
        resolve(msg);
      });

      // Handle client close event
      client.on("close", () => {
        console.log("[Z21Client] Client is closed");
      });

      // Handle client errors
      client.on("error", (error) => {
        console.log("[Z21Client] Client error has been raised:", error);
        client.close();
      });

      // Send commands to the server
      client.send(command, this._port, this._address, (error) => {
        if (error) {
          console.log("[Z21Client] Send error:", error);
          client.close();
        } else {
          console.log("[Z21Client] Request command: ", command);
        }
      });
    });
  }
}

export {Z21Client};