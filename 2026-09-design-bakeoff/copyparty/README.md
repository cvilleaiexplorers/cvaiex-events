# Team drop folder

Share lookbook images, screenshots, and exports over the room Wi-Fi. Only the lead's laptop needs setup; teammates use their browsers. This example works on macOS, Linux, and Windows. You do not need `just`, or to install Python separately.

## 1. Install uv (if needed)

On macOS or Linux, run in Terminal:

```sh
curl -LsSf https://astral.sh/uv/install.sh | sh
```

On Windows, run in PowerShell:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Open a new terminal after installation. See the [uv installation instructions](https://docs.astral.sh/uv/getting-started/installation/) for other installation methods.

## 2. Start the folder

If you have this repository, open a terminal in `design-hackathon/copyparty/` (the directory containing `copyparty.conf`). The empty `share/` folder is included.

If you are downloading just this example, save [copyparty.conf](copyparty.conf) in a new folder, open a terminal there, and create a folder named `share` alongside it:

```sh
mkdir share
```

From that directory, run the same command on all three operating systems:

```sh
uv tool run copyparty==1.20.24 -c copyparty.conf
```

uv downloads and caches Copyparty and supplies Python if needed. Leave this terminal open while sharing. Only `share/` is exposed; other files alongside it are not shared. Anyone who can reach the server can browse, download, and upload without a password. The example does not grant general move or delete permissions.

Already have `just`? The included [justfile](justfile) is optional: run `just serve` instead of the uv command. It runs the same foreground server.

## 3. Share and test

Open `http://127.0.0.1:3923/` on your own laptop to check the page. For teammates, use the laptop's Wi-Fi address printed at startup, such as `http://192.168.1.47:3923/`, or scan the startup QR code. If multiple addresses appear, choose the Wi-Fi adapter's address. Every team can use port 3923 because each laptop has a different IP address.

From a phone or second laptop on the same Wi-Fi, open that address, upload a small file, and download it back. Confirm the file appears in `share/` on the lead's laptop. No login is needed.

If it does not connect, check that both devices are on the same network, allow incoming port 3923 on the trusted private network if the firewall asks, and check whether the Wi-Fi blocks connections between devices. If startup reports that port 3923 is already in use, stop the previous server with Ctrl+C in its terminal before starting this one.

### When venue Wi-Fi blocks device connections

Some venue or guest Wi-Fi networks let everyone reach the internet but block connections between devices (called **client isolation** or **AP isolation**). Being on the same Wi-Fi, or even the same IP subnet, does not guarantee your teammates can reach the drop folder. Test at the venue before the event; a successful test at home or in the lead's own browser is not enough.

If teammates' connections time out, check the laptop firewall first: Windows can treat venue Wi-Fi as Public even if home Wi-Fi is Private, so the same firewall exception might not apply. Changing ports will not bypass client isolation. If access works through a laptop hotspot but fails through venue Wi-Fi, venue filtering is the likely cause.

**Windows laptop hotspot workaround** (tested with a phone at the venue):

1. Leave Copyparty running. On the lead's laptop, open **Settings → Network & internet → Mobile hotspot**, choose the internet connection to share, and enable sharing over Wi-Fi. Share the hotspot name and password with your team. See [Microsoft's hotspot instructions](https://support.microsoft.com/en-us/windows/experience/connectivity-networking/use-your-windows-device-as-a-mobile-hotspot).
2. Connect teammates' devices to the laptop's hotspot instead of directly to venue Wi-Fi.
3. Run `ipconfig` on the laptop and find the IPv4 address of its hotspot adapter (often named `Local Area Connection*`, with an address such as `192.168.137.1`). Share `http://<hotspot-IP>:3923/`, using the actual address. Copyparty already listens on all IPv4 interfaces, so no config change is needed. If you restart it, choose the hotspot address from the startup list rather than the venue Wi-Fi address/QR code.
4. Test an upload and download from a teammate's device, and check that everyone can still reach the online tools they need. Keep the laptop awake and the hotspot enabled during the event; turn it off afterward.

The laptop's venue Wi-Fi address may still work from devices connected to its hotspot, but prefer the hotspot adapter's address so the shared link does not depend on the venue address. The hotspot's Wi-Fi password is separate from Copyparty: the drop folder still needs no login.

For other operating systems, or if laptop hotspot sharing is unavailable, use a separate team network/router that permits device connections. Test it before relying on it; hotspot and internet-sharing support varies by device.

## 4. Stop afterward

Keep the laptop awake during the meetup. Press **Ctrl+C** in the server terminal when finished. Uploaded files remain in `share/`, so you can give them to your local coding agent.

This is a password-free folder over plain HTTP. Use trusted Wi-Fi and disposable team files, keep personal files outside `share/`, and do not forward port 3923 to the internet. Uploaded files are ignored by Git in this example.

## Optional: upload from a local agent

An HTTP client can upload a file with PUT without a password. For example, from a directory containing `example.txt`:

```sh
curl --upload-file example.txt http://127.0.0.1:3923/example.txt
```

In Windows PowerShell, use `curl.exe` in place of `curl` to avoid the older PowerShell alias. For a different laptop, replace `127.0.0.1` with the lead's Wi-Fi address. Download through the browser or the same file URL.
