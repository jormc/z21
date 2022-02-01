# z21
A Z21 client library made with Nodejs & Typescript to connect via http / udp protocols with the connected device(s).

<br />

## How does it works?

In this version only two ts files are included:

* ***src/z21Client.ts:*** this is the main Z21 udp client, only the <code>*public sendRequest(command: Buffer): Promise<Buffer>*</code> function is supported by the now
* ***src/app.ts:*** this is the main app file, just gets the Z21 serial number

<br />

## Test this version

On this version you can simply use the ***app.ts*** module that uses the ***z21Client.ts***.

Launch the demo app with:

    $ npm run demo

and see what's happend...


<br />

## Next steps

Work is in progres...

Any contribution will be welcome :-) 


<br />

---

<br />

## Revisions

* **0.0.1b (2022-02-01)** 
  > First version of the library. Project is started, including a very very simple udp socket client that connects with the Z21 device and accepts http requests. Also a very very simple app that uses this client is included.
