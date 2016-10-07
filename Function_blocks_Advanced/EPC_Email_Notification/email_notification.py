#!/usr/bin/python
import smtplib

#SMTP server settings
SMTP_SERVER = 'smtp.server.com' #e.g. smtp.gmail.com
SMTP_PORT = 587
SMTP_USERNAME = 'yourname@server.com' #your login name, e.g. yourname@gmail.com
SMTP_PASSWORD = 'yourpassword' #CAUTION: This is stored in plain text!

#notification recipient and content
recipient = 'notification@recipient.com'
subject = 'Event notification [REX Control System]'
emailText = 'This is to inform you that an event ocurred.'

emailText = "" + emailText + ""

headers = ["From: " + SMTP_USERNAME,
           "Subject: " + subject,
           "To: " + recipient,
           "MIME-Version: 1.0",
           "Content-Type: text/html"]
headers = "\r\n".join(headers)

session = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)

session.ehlo()
session.starttls()
session.ehlo

session.login(SMTP_USERNAME, SMTP_PASSWORD)

session.sendmail(SMTP_USERNAME, recipient, headers + "\r\n\r\n" + emailText)
session.quit()
