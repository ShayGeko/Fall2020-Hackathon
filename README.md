# **Shut The Fact Up!** 

## *7th November 2020*

### *SFU CSSS Hackathon*

**Build Instructions:**

**To set up the chrome extension:**

1.) Download the zipped folder and unzip it.

2.) Open Google Chrome

3.) Click on the 3 dots at the top right -> more tools -> extensions

4.) Enable developer mode button at the top right

5.) Click on Load Unpacked near the top left

6.) Select the downloaded unzipped folder

**To add more replacement data:**
dependencies are python, django, django rest framework and django-cors-headers, which we didn't manage to include here due to inexperience. We are very sorry (:
1.) py manage.py runserver 8002

2.) go to http://127.0.0.1:8002/api/censorList/?format=api

3.) type in toCensor and what to censor with

4.) post


Authors: Heorhii Shramko and Rohan Parmar

Heorhii Shramko: hsa159@sfu.ca
Rohan Parmar: rpa56@sfu.ca

There also are 2 bugs which we managed to fix locally: 
CensorThis!/content_script.js line 59 i < censorList.length
Line 64 is extra, should be just removed
