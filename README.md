# Mike's simplified Office Lights Project

The origins of this are Bryan Smith's (pismartdisplay)[https://github.com/bryan-ab-smith/pismartdisplay], I then tore a bunch of his good stuff out that I didn't need, and then janked it all up with bits and pieces of my own and a lot of copypasta'd example code, which I then bent and spindled in wierd ways until it ran.

A little API for controlling some tuya lights in my office and the most jenky little web page that works on an old iphone.

## Status

This is a work in progress so expect things to potentially go wrong. However, code is only checked in when it is presumed to work.

## Setup

Setup is annoying at this point. I'm hoping, in the future, to automate this with an install script.

### Pi Setup

Just setup a basic headless Pi.  not gonna care too much here, also, who the heck else is likely to use this?  If you do, hopefully you know this bit.

For reasons of necessity and also because I like to be difficult to myself, I wanted to use python 3.10.x, which wasn't available...

step in (sh-python-installer)[https://github.com/tvdsluijs/sh-python-installer]

Which I used to build python3.10

### Office Light Setup

1. Clone code:

    `git clone git@github.com:sixty4k/officelightthing.git`

2. Edit smartdisplay.service and change:

    a. User to the user that you have starting and autolgging in at boot. (root)

    b. WorkingDirectory to the directory where the smart display code is stored.

3. Setup a virtual environment & start it

    ```
    /usr/bin/python3.10  -m venv .
    . venv/bin/activate
    ```

4. Install the Python modules required:

    `pip install -r requirements.txt`

5. Copy smart display service to /etc/systemd/system/ and enable the service:

    `sudo cp smartdisplay.service /etc/systemd/system`
    
    `sudo systemctl enable smartdisplay`

## Config

TODO: the horrifying tuyactrl jiggery.


## License
  
MIT License

Copyright (c) 2019 Bryan Smith
Copyright (c) 2020 Mike Robinson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.