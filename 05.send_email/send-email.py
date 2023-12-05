import os
from email.message import EmailMessage
import ssl
import smtplib


email_sender = 'kuva5008@gmail.com'
email_pw = 'prtnqdrjqonijddi'
# email_pw = os.environ.get("Email_password")
email_receiver = 'area51.cu@gmail.com'
subject = 'testing backend app'
body = """
Just checking
bla
bla
bla
"""

em = EmailMessage()
em['From'] = email_sender
em['To'] = email_receiver
em['Subject'] = subject
em.set_content(body)

context = ssl.create_default_context()

with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
    smtp.login(email_sender, email_pw)
    smtp.sendmail(email_sender, email_receiver, em.as_string())
