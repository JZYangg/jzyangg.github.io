---
layout: post
title: "How to Fix Valorant Crashing on Alt-Tab (Stretched Resolution)"
date: 2026-06-04
category: guides
---

Do you or your friends play Valorant on a custom stretched resolution, you’ve probably dealt with the annoying issue where the game completely freezes or crashes the moment you Alt-Tab to check Discord or change a song. 

Here is exactly how to fix it so you can Alt-Tab smoothly without ruining your competitive matches.

## The Fix: GPU Scaling & Fullscreen Optimizations

The crash happens because Windows and your graphics driver are fighting over who handles the resolution stretch when the game loses focus and this espeically happens when your monitor is not set the resolution that you are using in valorant. 

Depending on your experiences this guide won't be any help for you because either you are using different methods or you guys are using different GPU or you are facing an whole another different issue then what this guide is made for. 

**ALSO MAKE SURE AND CHECK YOUR DRIVERS IS UP-TO-DATE, IF NOT UPDATE YOUR DRIVERS BEFORE YOU FOLLOW THIS GUIDE**

### **(VALORANT CONFIG METHOD)**

### Step 1: Delete/Refresh Valorant Config Files
Sometimes, your valorant config files can be broken or corrupted which causes the crashes. First, we would need to head to the config folder for valorant at **C:\Users\USERNAME\AppData\Local\VALORANT\Saved\Config** <img src="/assets/Guides/2026-06-04%20How%20to%20fix%20valorant%20crashes%20on%20stretch%20res/config%20folder.png" alt="Valorant Config Folder" width="100%">

Then click the **WindowsClient** folder then click on **RiotLocalMachine.ini** and find the folder with the same first 8 characters <img src="/assets/Guides/2026-06-04 How to fix valorant crashes on stretch res/RiotLocalMachine.png" width="100%">

Then back out and find the folder that you just got from the **RiotLocalMachine.ini**, as soon you found the folder that you saw in **RiotLocalMachine.ini** open the folder up.

**At the end of the folder name it will show your region that the account is based in** <img src="/assets/Guides/2026-06-04 How to fix valorant crashes on stretch res/config folder pt.2.png" width="100%">

When clicking on the folder you, go to **WindowsClient** folder and you would want to delete **GameUserSettings.ini** from the folder. After that, go open valorant so it could create a new **GameUserSettings.ini** file. Go to **Valorant Video Settings* and choose **Fullscreen** -> **Your Native Resolution (The Highest Your Monitor Can Go)** -> **Fill** -> **Apply**, after applying close valorant and go back to the folder again and reopen **GameUserSettings.ini** and locate **ResolutionSizeX and ResolutionSizeY** <img src="/assets/Guides/2026-06-04 How to fix valorant crashes on stretch res/GameUserSetting part 1.png" width="100%"> and change it to your desired resolution. At the very bottom of right under **HDRDisplayOutputNits=1000** add **Fullscreenmode=2** <img src="/assets/Guides/2026-06-04 How to fix valorant crashes on stretch res/GameUserSetting part 2.png" width="100%">

After you save the text file, right click on **GameUserSettings.ini** tick **Read Only** and click Apply so Valorant can't modify the file. Now, if you open valorant it should be stretched res

### Step 2: Force GPU Scaling (AMD or NVIDIA)
Instead of letting your monitor handle the stretching, force your graphics card to do the heavy lifting.

* **For NVIDIA Users:** Open NVIDIA Control Panel -> Go to *Adjust desktop size and position* -> Set scaling mode to **Aspect Ratio** or **Full-screen** -> Set "Perform scaling on:" to **GPU**. Check the box for "Override the scaling mode set by games and programs."
* **For AMD Users:** Open AMD Software -> Go to Settings -> Graphics -> Global Display (Depends which monitor you are using, click on that one) -> Turn on **GPU Scaling** and set Scaling Mode to **Full panel**.

### Step 3: Disable Fullscreen Optimizations
Windows has a built-in feature that tries to blend borderless and exclusive fullscreen, which completely breaks stretched resolutions on an Alt-Tab.

1. Right-click your **Valorant** desktop shortcut (or navigate to the actual `VALORANT-Win64-Shipping.exe` file in your Riot Games folder).
2. Go to **Properties** and click the **Compatibility** tab.
3. Check the box that says **"Disable fullscreen optimizations."**
<img src="/assets/Guides/2026-06-04 How to fix valorant crashes on stretch res/desktop valorant settings 1.png" width="60%">
4. Click **Apply** and then **OK**.

### **(DISABLE MONITOR METHOD)**
**COMING SOON**
