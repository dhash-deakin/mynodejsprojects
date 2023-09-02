import socket
import hashlib

# Create a socket
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Connect to the server
client_socket.connect(('127.0.0.1', 12345))

# User input for username and password
username = input("Enter your username: ")
password = input("Enter your password: ")

# Send username to the server
client_socket.send(username.encode())

# Receive the challenge from the server
challenge = client_socket.recv(1024)

# Create a response by hashing the challenge and password
response = hashlib.sha256(challenge + password.encode()).digest()

# Send the response to the server
client_socket.send(response)

# Receive authentication result
authentication_result = client_socket.recv(1024).decode()
print(authentication_result)

# Close the socket
client_socket.close()
