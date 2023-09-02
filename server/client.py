import socket

# Create a socket
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Connect to the server
client_socket.connect(('127.0.0.1', 12345))

# User input for username and password
username = input("Enter your username: ")
password = input("Enter your password: ")

# Send username to the server
client_socket.send(username.encode())

# Receive server's response
response = client_socket.recv(1024).decode()
print(response)

if "Username accepted" in response:
    # Send password to the server
    client_socket.send(password.encode())

    # Receive authentication result
    authentication_result = client_socket.recv(1024).decode()
    print(authentication_result)

# Close the socket
client_socket.close()
