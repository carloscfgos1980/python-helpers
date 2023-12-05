import sent_email_component


body = 'Name: Alberto\n Last Name: El Militar\n text: Checking backend how to send notifications'


sent_button = sent_email_component.email_attachment(body)

print(sent_button)
