import socket

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

# Authentication logic
received_username = client_socket.recv(1024).decode().strip()  # Strip whitespace

if received_username == valid_username:
    client_socket.send(b"Username accepted. Please enter your password:")
    received_password = client_socket.recv(1024).decode().strip()  # Strip whitespace

    if received_password == valid_password:
        client_socket.send(b"Authentication successful!")
    else:
        client_socket.send(b"Authentication failed. Invalid password.")
else:
    client_socket.send(b"Authentication failed. Invalid username.")

# Close the sockets
client_socket.close()
server_socket.close()
