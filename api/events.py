from blinker import signal

message_received = signal('message-received')
message_sent = signal('message-sent')