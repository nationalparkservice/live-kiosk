# Yellowstone Live Kiosk Setup

## Notes

- The "Visitor" account no longer needs to be setup with "Assigned Access", so this can be disabled.

## Disabling Metro UI on Windows 8

If your kiosk is running Windows 8, you will probably want to disable the Metro UI components so users can't swipe in from the side to display "charms" and get to the internet. To do this:

1. Download [Metro Killer](http://www.tordex.com/metrokiller.html) and place it on the desktop of "Visitor" account
1. Create a "Basic Task" using Windows task scheduler
1. Configure this task to run everytime the user logs on
1. Have it execute the MetroKiller.exe file and pass the following option: `/s`

## Installation Steps

1. Sign in with the "Visitor" account
2. Drag-and-drop the "yellowstone-live-kiosk..." directory onto the desktop
3. Once on the desktop, open this directory
4. Right-click on the "yellowstone-live-kiosk-win32-x64-0.1.0.exe" file and select "Create shortcut..."
5. Hit the "Windows" key and the "R" key at the same time
6. Type "%appdata%" (minus the quotes) and press enter
7. In the file window that pops up, browse to "Microsoft > Windows> Start Menu > Programs > Startup"
8. Drag-and-drop the shortcut file you created in step 3 into the "Startup" directory
9. Press the "Windows" key and the "R" key at the same time (again)
10. Type "netplwiz" (minus the quotes) and press enter
11. In the "User Accounts" dialog box that pops up, select the "Visitor" user
12. Uncheck the box at the top that says "Users must enter a user name and password to use this computer."
13. Click the "Apply" button at the bottom
14. In the "Automatically sign in" dialog that pops up, leave the "Password" fields blank and click on the "OK" button
15. Click "OK" again to close the "User Accounts" dialog
16. Restart

## Update Steps

1. Sign in with the "Visitor" account
2. On the desktop, delete the "yellowstone-live-kiosk..." directory
3. Drag-and-drop the new "yellowstone-live-kiosk..." directory onto the desktop
4. Restart


