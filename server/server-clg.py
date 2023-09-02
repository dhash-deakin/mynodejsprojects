import socket
import hashlib
import os

# Create a socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Bind the socket to a specific address and port
server_socket.bind(('127.0.0.1', 12345))

# Listen for incoming connections
server_socket.listen(1)

print("Server is listening...")

# Accept a connection
client_socket, client_address = server_socket.accept()
print(f"Accepted connection from {client_address}")

# Server's hardcoded username and password
valid_username = "user123"
valid_password = "pass123"

# Authentication logic with challenge
received_username = client_socket.recv(1024).decode().strip()  # Strip whitespace

if received_username == valid_username:
    # Generate a random challenge
    challenge = os.urandom(16)
    client_socket.send(challenge)

    # Receive the hashed response from the client
    received_response = client_socket.recv(1024)

    # Calculate the expected response
    expected_response = hashlib.sha256(challenge + valid_password.encode()).digest()

    if received_response == expected_response:
        client_socket.send(b"Authentication successful!")
    else:
        client_socket.send(b"Authentication failed. Invalid response.")
else:
    client_socket.send(b"Authentication failed. Invalid username.")

# Close the sockets
client_socket.close()
server_socket.close()
