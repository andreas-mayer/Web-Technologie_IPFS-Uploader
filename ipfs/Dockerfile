FROM ipfs/go-ipfs

#RUN ipfs init && ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["GET", "POST"]' && ipfs config --json API.HTTPHeaders.Access-Control-Allow-Headers '["Authorization"]' && ipfs config --json API.HTTPHeaders.Access-Control-Expose-Headers '["Location"]' && ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]' && ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["http://0.0.0.0:5001", "http://localhost:3000", "http://127.0.0.1:5001", "https://webui.ipfs.io"]'
# RUN ipfs init && ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["GET", "POST"]' && ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*", "http://127.0.0.1:8080", "http://localhost:3000", "http://localhost:48084", "https://gateway.ipfs.io", "https://webui.ipfs.io"]'
RUN mkdir /scripts
COPY /publish /scripts